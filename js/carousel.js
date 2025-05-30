
//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(img,h2, url){
        this.img = img;
        this.h2 = h2;
        this.url = url;
    }
  
    static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    
    static Next(){
        const item = carouselArr[Carousel._sequence];
        const carrosel = document.querySelector('#carousel');
        const tituloCarrosel = document.querySelector('#carousel-title');
        carrosel.innerHTML = `<a href ="${item.url}"><img src="img/${item.img}" alt=${item.h2}/></a>`;
        tituloCarrosel.innerHTML = `<a href="${item.url}">
        ${item.h2} </a>`;
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
        Carousel._sequence = 0;
       }
    }
};
