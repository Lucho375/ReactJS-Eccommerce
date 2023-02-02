import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const database = collection(db, "products")
        const productsQuery = where('category', '==', categoryId)
        const productsFromFirestore = categoryId ? query(database, productsQuery) : database

        getDocs(productsFromFirestore).then(response => {
            const { docs } = response;
            const firestoreProducts = docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            resolve(firestoreProducts);
        }).catch(err => reject(err))
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, "products", productId)
        getDoc(docRef).then(response => {
            const data = response.data()
            const firestoreProduct = { id: response.id, ...data }
            resolve(firestoreProduct)
        }).catch(err => reject(err))
    })
}