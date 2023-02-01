// import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
// import { useState } from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../../Context/CartContext";
// import { db } from "../firebaseConfig";
// import { NotificationContext } from "../../../Context/NotificationContext";

// export const createOrder = async () => {

//     if (Object.entries(values).length === 0) return console.error("error")
//     setLoading(true)
//     const objOrder = { buyer: values, items: cart, total }

//     const batch = writeBatch(db);

//     const ids = cart.map(prod => prod.id)
//     const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
//     const outOfStock = []
//     const productsAddedToCartFromFirestore = await getDocs(productsRef);

//     const { docs } = productsAddedToCartFromFirestore;

//     docs.forEach(doc => {
//         const dataDoc = doc.data();
//         const stockDb = dataDoc.stock;
//         const productInCart = cart.find(prod => prod.id === doc.id)
//         const prodQuantity = productInCart.quantity
//         if (stockDb >= prodQuantity) {
//             batch.update(doc.ref, { stock: stockDb - prodQuantity })
//         } else {
//             outOfStock.push({ id: doc.id, ...dataDoc })
//         }
//     })

//     if (outOfStock.length === 0) {
//         await batch.commit();
//         const orderRef = collection(db, 'orders',)
//         const orderAdded = await addDoc(orderRef, objOrder)
//         const { id } = orderAdded
//         setOrder(id)
//         clearCart();
//         setLoading(false)
//         resetInputs();
//         setNotification("Gracias por su compra", "success", 4)
//         setTimeout(() => {
//             navigate("/")
//         }, 5000)
//     } else {
//         setLoading(false)
//         setError("Hay un producto sin stock, vuelva a productos");
//         clearCart();
//     }
// }
