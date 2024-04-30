//Ders Linki = https://www.youtube.com/watch?v=h_e8K5XDMd4&list=PLfAfrKyDRWrHHC_routvb5WEviGZbJA0w&index=6

let fullName : string = "Mutlu";
/* Burada string tipinde bir tanımlama yaptığımız için biz fullName değişkenine string tipinden
farklı bir tipte değer atamaya çalışırsak compiler bize hata verecektirç. Örn; */

// fullName = 10;

let counter : number = 10;

const active : boolean = true;


/* Eğer biz bir dizi için tip belirlemek istersek şu şekilde kullanımlar yapabiliriz; */

const names : string[] = ["Mutlu","Selma","Kubi"];

/* Eğer sayılardan oluşan bir dizi için tip tanımı yapmak istersekte şu şekilde kullanabiliriz; */

const numbers : number[] = [1,2,3,4,5,6,7,8,9]

/* Obje tipi tanımlamak için objeye değer atamak gibi benzer bir tanım yapıyoruz. Örn; */

let user = {
    name: "Mutlu",
    surname: "SENEM",
    age: 30
}
/* Normalde biz bu şekilde obje tanımlamaları yapıyoruz ama tip belirterek obje tanımı
yapmak istersek aşağıdaki gibi kullanabiliriz; */

let userTS : {
    name : string,
    surname : string,
    age : number
}

userTS = {
    name : "Mutlu",
    surname : "SENEM",
    age : 30
}

/* Burada yukarıda obje içerisindeki verilerin tiplerini belirtmiş olduk ve aşağıda
obje içerisine gelen değerler verilen tiplerde olmadığı sürece TS compiler'ı bize hata verecektir. */


//! Fonksiyonlarda tip tanımlamaları:

let carpmaIslemi : (x:number , y:number)=> number

/* Burada x ve y nin tipinin number olması gerektiğini ve geriye'de bir number döneceğini
belirlemiş olduk. */

carpmaIslemi = (x,y)=>{
    return x*y
}

console.log(
    carpmaIslemi(1,5)
)