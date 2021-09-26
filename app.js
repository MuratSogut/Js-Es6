// // var a = 123;

// // console.log("a");
// // console.log(typeof a);

// // console.warn("uyarı !");
// // console.error("hata !");
// // // console.clear();

// // var b= null;
// // console.log(b); 

// // var numbers = [1,2,3,4,5];
// // console.log(numbers);


// // var person = {
// //     name: "Murat",
// //     age : 25 
// // }
// // console.log(person);
// // console.log(typeof person);



// // var date = new Date();
// // console.log(date);


// var merhaba = function () {
//     // console.log("merhaba");
//     return "asd";
// }

// //merhaba();
// console.log(merhaba());
 


// // var a = [11,22,33];
// // var b = a;

// // a.push(44);
// // // console.log(b);

// // for(let sayi in a){
// // console.log(sayi);
// // console.log(a[sayi]);
// // }


// // for(let sayi of a){
// // console.log(sayi);
// // }


// // var a; 
// // a = 20;
// // console.log(typeof a);

// // let a,b;

// // a=10;
// // b=20;

// // console.log(a+b);


// //const a = 123;
// //a = 0;
// //console.log(a);


// //let value;

// //value = String(123);
// //value = (123).toString();

// //value = Number(123);
 
// // console.log(value);
// // console.log(typeof  value);
 

// // let value;
// // value = Math.floor(Math.random() * 20 + 1);
// // console.log(value);


// // let value;
// // value = "Louis";
// // value = value.length;
// // console.log(value);


// // const name = "Murat Söğüt";
// // const department = "Bilişim";
// // const salary = 4200;

// // //const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;
// // const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`

// // console.log(a);


// // let value = [10,20,30,40,100];
// // value = value.sort(function (x,y){ return x-y }) 
// // console.log(value[0]);


// // let deger = document.getElementById("h3").textContent;
// // console.log(deger);


// // let deger = document.getElementsByClassName("ccc")[0];
// // console.log(deger);



// // let deger = document.querySelector("#test");
// // console.log(deger);


// // let deger = document.querySelectorAll(".ccc")[0];
// // console.log(deger);


// // var zaman = new Date();
// // console.log(zaman);

// // console.log(zaman.getFullYear());
// // console.log(zaman.getMonth());
// // console.log(zaman.getDay());








// let data = {
//     kisiler:[
//         {name:"Mehmet", surname:"Söğüt", age:"29"},
//         {name:"Murat", surname:"Söğüt", age:"36"},
//         {name:"Fatih", surname:"Söğüt", age:"35"}
//     ], 
//     islem:"Get"  // Key - Value standartı
// }

// //console.log(data.kisiler[0].name);
// //console.log(typeof data);

// console.log(data);

// console.log("****************");

// var kayit = JSON.stringify(data); // String e Çevirir
// console.log(kayit);

// console.log("*************************************");

// var cevir = JSON.parse(kayit); // JSON a Çevirir
// console.log(cevir);

// console.log("****************************************************************");


// var kisiler = document.getElementsByClassName("kisiler")[0];

// for (let getir in data){
//     //console.log(getir);
//     //console.log(data[getir]);

//     // for(deger of data[getir]){
//     //     console.log(deger);
//     // }

//     var gelen = data[getir];

//     if(getir == "kisiler"){

//         for(isimler in gelen){

//             console.log(gelen[isimler]["name"]);
//             //kisiler.innerHTML += '<li>' + gelen[isimler]["name"] + '</li>';
//             kisiler.innerHTML += '<li>' + gelen[isimler]["name"] + '</li>'; 


//         }


//     }

// }

// console.log("****************************************************************");

// var test = 2;
// console.log(`Uzun ince bir yoldayim
// Gidiyorum gündüz gece
// Bilmiyorum ${test} ne haldeyim
// Gidiyorum gündüz gece
// Gündüz gece`);

// console.log("****************************************************************");
 
// var data3 = fetch("veri.json")
// .then(response => console.log(response));


// // Eski yöntem Arrow function suz hali 

// /*
// var data3 = fetch("veri.json")
// .then(function(response){
//     return console.log(response);
// });
// */


// var data3 = fetch("veri.json")
// .then(response => response.json())
// .then(veri => console.log(veri))
 
  
// var data3 = fetch("veri.json")
// .then(response => response.json())
// .then(veri => {
//     console.log(veri);
//     console.log(veri.kullanicilar);
//     console.log(veri.yetki[0]);
//     var verimiz = JSON.stringify(veri);
//     console.log(verimiz);
// })


// var listele = document.getElementById("listele");

// let data4=fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(veri => {
//     //console.log(veri);

//     veri.forEach(element => {
//         listele.innerHTML += `<li>${element.title}</li>`;
//         //console.log(element.title);
//     });

// })



// var album = document.getElementById("album");

// let data5=fetch("https://jsonplaceholder.typicode.com/photos")
// .then(response => response.json())
// .then(veri => {
//     //console.log(veri);

//     veri.forEach(element => {

//         if (element.id <= 10) {
//             album.innerHTML += `<img src="${element.url}"/>`;
//             //console.log(element.title);
//         }
       
//     });

// })


// console.log("********************************");


// var y = function(){
//     console.log(5+4);
// }
// y();

// const x=()=>5+3;
// console.log(x());

// var sayi1= document.getElementById("sayi1");
// var sayi2= document.getElementById("sayi2");
// var hesapla= document.getElementById("hesapla");
// var hesap= document.getElementById("hesap");

// var calculate=(sayi1,sayi2)=> hesap.innerHTML=Number(sayi1.value)+Number(sayi2.value);

// hesapla.addEventListener("click",()=>{
//     calculate(sayi1, sayi2);    
// })
 
 
// console.log("********************************");
 
// let dizi=[5,6,7,"Mehmet","Ahmet",9];
// console.log(...dizi);

// // function yaz(a,b){
// //     console.log(a,b);
// // }
// // yaz(20,30,40,50,"Mehmet");


// // function yaz(...degerler){
// //     console.log(...degerler);
// // }
// // yaz(20,30,40,50,"Mehmet");


// function yaz(a,b,...degerler){
//     console.log(...degerler);
// }
// yaz(20,30,40,50,"Mehmet");
 
// // let isim="Mehmet"
// // console.log(isim[2]);

// let ortalama=(...sayilar)=>{
//     let dizi=sayilar;
//     console.log(dizi);
//     let uzunluk=dizi.length;
//     let toplam=0;
//     for (let i = 0; i < uzunluk-1; i++) {
//         toplam+=dizi[i];
//     }
    
//     let ort=toplam/uzunluk;
//     console.log(ort);

// }

// ortalama(20,30,40,10);

console.log("Map - Filter ********************************");


const personel={
    kisisel:[
        {
            isim:"Mehmet",
            soyisim:"Elbeyli",
            yas:32
        },
        {
            isim:"Mustafa",
            soyisim:"Elbeyli",
            yas:30
        },     {
            isim:"Yusuf",
            soyisim:"Şahbaz",
            yas:46
        }
    ],
    pozisyon:["FrontEnd","BackEnd","Pazarlama"]
};

console.log(personel.kisisel);

personel.kisisel.forEach(element => {
    console.log(element.isim);
});

for (element of personel.kisisel){
    console.log(element);
}

// Map

const dizi0=personel.kisisel.map((veri,index)=>{
    return veri.isim==="Yusuf";
})

console.log("dizi0 : " + dizi0);


const dizi=personel.kisisel.map((veri,index)=>{
    return veri;
})

console.log(dizi);

// Filter

const dizi2=personel.kisisel.filter((veri,index)=>{
    return veri.isim==="Yusuf"
})

console.log(dizi2);

const dizi3=personel.kisisel.filter((veri,index)=>{
    return veri.isim!=="Yusuf"
})

console.log(dizi3);

const murat = {
    id: 1,
    team: 'fb',
    hobbies: ['football, swim'],
};

const { team, id } = murat;
console.log(`team`, team)
console.log(`id`, id)

`takımı: ${team} id'si ${id}`

function createMachine(name, status) {
    return {
        name,
        status
    };
}

