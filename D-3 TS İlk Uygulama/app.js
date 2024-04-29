//Ders Linki = https://www.youtube.com/watch?v=UgxgqB34lq0&list=PLfAfrKyDRWrHHC_routvb5WEviGZbJA0w&index=3
var message = "Hello World";
var h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);
/* TS kodlarımızı yazdıktan sonra terminal üzerinden tsc app.ts komutu ile TS dosyamızı
js dosyası olarak compile edebiliyoruz. */ 

//! Not: Eğer biz sürekli bir şekilde tsc app.ts kullanmak yerine bir değişiklik yapıldığında
//! anında compile olsun istersek tsc app.ts --watch kullanarak sürekli değişiklikleri izleyip
//! compile etmesini sağlayabiliriz.

/* Ayrıca biz node ile ts dosyamızı direkt olarak terminal üzerinde çalıştırmak istersekte
terminale ts-node app.ts yazarak ts dosyamızı direk çalıştırabiliriz.*/