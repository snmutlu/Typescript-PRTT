//Ders Linki = https://www.youtube.com/watch?v=n3DO6pI7ssk&list=PLfAfrKyDRWrHHC_routvb5WEviGZbJA0w&index=7

/* Bu bölümde TS de bir tip tanımlaması yapılmadığı durumda TS'in tipler hakkında nasıl 
çıkarım yaptığını öğreneceğiz. */

/* Örneğin counter tipinde bir değişkenimiz olsun ve tip tanımlaması yapmadan değerine
0 verelim. TS tip tanımlaması yapmasakta bu değişkenin number tipinde olduğunu bilecektir. */

let counter = 0;

let counter1 : number = 0;

/* Aşağıdaki değişkenle yukarıdaki değişken birebir aynıdır. 

Yani bir değişkenin bir başlangıç değeri varsa TS o değişkenin hangi tipte olduğunu bilecektir.*/

/* Ayrıca biz bir değişkene tip belirtmesek bile sonradan verdiğimiz ilk değerin tipinden başka bir 
tipte değer vermeye çalışırsak TS bize hata verecektir. Örn;*/

// let sayi = 0;

// sayi = "Mutlu"; //*Burada yukarıda başlangıç değeri olarak number verdiğimiz için hata alıyoruz.

// let harf = "Selma";

// harf = 0; //*Burada'da yukarıda başlangıç değeri olarak harf verdiğimiz için hata alıyoruz.

/* Aynı şekilde TS dizilerde ve functionlarda da otomatik olarak tip belirlemesi yapabiliyor. */


function setCounter(max=100){
    return max*2
}

console.log(setCounter(3))

/* Burada max değerine number tipinde bir değer verdiğimiz için setCounter functionuna
parametre olarak number tipinde bir değer vermemiz gerekiyor aksi taktirde hata alıyoruz. */

/* //! Eğer bir dizi içerisinde birden fazla tip varsa TS bu tiplerin dışında başka bir
! tipte veri eklenmesinde de hata veriyor. Örn;
 */

let isimler = ["Mutlu","Selma","Kubilay",null,false]
isimler.push("Ceyda")
isimler.push(true)
// isimler.push(3) //* Burada dizi içerisinde number tipinde bir veri olmadığı için hata alıyoruz.
console.log(isimler)

/* Bizler TS kullanırken olabildiğince tip tanımlaması yapmamaya çalışıyoruz. Tip tanımlamalarını
sadece değişkene bir başlangıç değeri vermediğimizde ve veya functionlardan geriye dönen değerin
hangi tipte olduğunu belirleyemediğimizde yapabiliriz. */