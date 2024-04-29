const reversedText = (text:string)=>{
    return text.split("").reverse().join("");
}

console.log(reversedText(15))

/* Artık biz burada string yerine başka bir tipte veri kullanırsak burada bize 
"Argument of type 'number' is not assignable to parameter of type 'string'."
olarak hata verecektir. Ve biz bu hatayı TS sayesinde compile aşamasında farketmiş olacağız.*/