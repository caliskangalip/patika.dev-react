//const { default: axios } = require("axios")
import axios from "axios"

// -  Bu fonksiyon ** "async" ** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır.
// Fonksiyonun içindeki asenkron fonksiyonlar ** "await" ** ile tanımlanmalıdır.
// - Fonksiyon ** Number ** tipinde tek parametre alır.Bu parametre ** user id ** 'yi belirtir.
//     - Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili 
//     kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak 
//     yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede 
//     gelen user id'ile değiştirmeniz gerekiyor.

// 	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

// -  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.
// İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz 
// gerekiyor.

// 	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)




// export default function getData(userId) {
//     return new Promise(async(resolve, reject)=> {
//         const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
//         const { data : posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);
//         user.posts = posts;
//         resolve(user);
//     });
// }



function getUser(userId){
    return new Promise(async(resolve, reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
        if (false){
            reject("Beklenmeyen bir hata oluştu")
        }
        resolve(data);
    });
};
function getPosts(userId){
    return new Promise(async(resolve, reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);
        if (false){
            reject("Beklenmeyen bir hata oluştu")
        }
        resolve(data);
    });
};
export default async function getData(userId){
    try{
        const user= await getUser(userId);
        const posts = await getPosts(userId);
        user.posts=posts;
        return user;
    }catch(e){
        console.log(e);
    }
};