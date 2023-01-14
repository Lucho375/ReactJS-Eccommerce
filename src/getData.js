const products = [
    {
        id: "1",
        name: "RTX 3090",
        marca: "Gigabyte",
        price: 400,
        stock: 3,
        category: "placas de video",
        images: [
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/1.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/2.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/3.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/4.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/5.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/6.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/7.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/8.png",
            "https://www.gigabyte.com/FileUpload/Global/WebPage/636/img/9.png"
        ]
    },
    {
        id: "2",
        name: "RTX 3070",
        marca: "MSI",
        stock: 3,
        price: 550,
        category: "placas de video",
        images: [
            "https://asset.msi.com/resize/image/global/product/product_160516708705dd5f6377e11cba748c4e5caad64449.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            "https://asset.msi.com/resize/image/global/product/product_16036988629d55e2a540b254c63fdb2ad1d77eaf1e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            "https://asset.msi.com/resize/image/global/product/product_160369886484ea0cc6bed7758cc70961239da7a408.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            "https://asset.msi.com/resize/image/global/product/product_16036988629efa1e731f242db6f1d22f918f510b2f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        ]
    },
    {
        id: "3",
        name: "ROG-STRIX-1000G",
        marca: "Asus",
        stock: 5,
        price: 250,
        category: "fuentes",
        images: [
            "https://dlcdnwebimgs.asus.com/gain/0CB64E96-7BAF-446C-893E-E96BBF09A133/w1000/h732",
            "https://dlcdnwebimgs.asus.com/gain/0EAD6D09-1FA9-487E-A69F-0CCC06902660/w1000/h732",
            "https://dlcdnwebimgs.asus.com/gain/2BF79FB7-2DF2-4F97-B2E4-82F2499BD9C4/w1000/h732"
        ]
    },{
        id: "4",
        name: "Ryzen 9 5900X",
        marca: "AMD",
        stock: 7,
        price: 450,
        category: "procesadores",
        images: [
            "https://www.amd.com/system/files/styles/992px/private/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png?itok=flFMuxbT",
            "https://www.amd.com/system/files/2022-05/1432865-ryzen-5000-boxes-1260x709_0.jpg"
        ]
    },
    {
        id: "5",
        name: "Intel I9",
        marca: "Intel",
        stock: 2,
        price: 550,
        category: "Procesadores",
        images: [
            "https://m.media-amazon.com/images/I/61qUfPKfqJL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61EXfoqgfYL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61fuimJDQBL._AC_SL1200_.jpg"
        ]
    }
]

export async function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}

export async function getProductById(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products.find(e => e.id === id))
        }, 1000)
    })
}

export const getProductByCat = (cat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === cat))
        }, 1000)
    })
}
