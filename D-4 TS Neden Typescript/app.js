// Ders Linki = https://www.youtube.com/watch?v=ihwXELzUIkg&list=PLfAfrKyDRWrHHC_routvb5WEviGZbJA0w&index=4

/* TS tip sistemi ekleyerek JS'deki dinamik tip problemlerini önlememize yardım eder.
JS'de dinamik tip nedir? : JS'üzerinde çalışırken değişkenin tipini biz belirlemiyoruz
değişkenin değeri neyse tipi ona göre otomatik olarak belirleniyor. Örn; */


// let box

// console.log(typeof box); //*Burada değişkenimizin tipini undefined olarak görürüz.

// box = "kutu"

// console.log(typeof box); //*Burada değişkenimizin tipini string olarak görürüz.

// box = 50

// console.log(typeof box); //*Burada değişkenimizin tipini number olarak görürüz.

/* Yukarıdaki örneklerde gördüğümüz dinamik tip bazı yerlerde avantaj sağladığı gibi
bazı yerlerde problemleri beraberinde getiriyor. TS bu problemlerin önüne geçmemizi sağlıyor.

Örn; Mutlu diye bir değerimiz var ve bu değeri bir fonksiyona parametre olarak geçip
ters olacak şekilde "ultuM" olarak yazdırmak istiyoruz.*/

// const reversedText = (text)=>{
//     return text.split("").reverse().join("");
// }

// console.log(reversedText("Mutlu"));

/* Biz burada yukarıda parametre olarak "Mutlu" değilde herhangi bir number
gönderdiğimizde hata alırız. Bu hatayı yönetmek için aşağıdaki gibi bir yapı oluşturabiliriz. */

const reversedText = (text) =>{
    if(typeof text !== "string"){
        throw new Error("Hatalı bir tip gönderdiniz!")
    }
    return text.split("").reverse().join("");
}

try{
    console.log(reversedText("Mutlu"));
}
catch(e){
    console.log(e.message)
}

/* Burada string bir değer verdiğimiz taktirde fonksiyonumuz bize string ifadeyi tersine
çevirecek, string bir değer vermediğimiz taktirde catch blokları devreye girecek ve hata mesajını
göreceğiz. Biz bu şekilde bir hata kontrolü yapmak yerine TS kullanarak ve tip belirleyerek
compile aşamasında bu hataları engelleyebiliriz.*/


/* Başka bir örnek yapalım: */

function getProduct (id){
    return{
        id,
        name: "Ürün #" + id,
        price : 55
    }
}

const product = getProduct(1)

console.log(product)
/* Burada biz objenin içerisinde olmayan bir propertys'e erişmeye çalıştığımızda
js bize hata vermek yerine undefined olarak dönüş yapıyor. Örn; */

console.log(product.test) //*Burada undefined olarak çıktı alırız.


/* Şimdi bu örnekleri Typescript nasıl çözüyor app.ts sayfasında ona bakalım. */