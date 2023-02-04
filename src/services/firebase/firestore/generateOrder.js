import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const createOrder = async (values, cart, total) => {

    const modifiedItems = cart.map(item => {
        const { id, name, price, quantity } = item
        return { id, name, price, quantity }
    })

    const objOrder = { buyer: values, items: modifiedItems, total }
    const batch = writeBatch(db);
    const ids = cart.map(prod => prod.id)
    const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    const outOfStock = []
    const productsAddedToCartFromFirestore = await getDocs(productsRef);
    const { docs } = productsAddedToCartFromFirestore;
    docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productInCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productInCart.quantity
        if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
            outOfStock.push({ id: doc.id, ...dataDoc })
        }
    })

    if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, 'orders',)
        const orderAdded = await addDoc(orderRef, objOrder)
        const { id } = orderAdded
        return id
    } else {
        return "Hay productos sin stock"
    }
}
