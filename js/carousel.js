
//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(img,title, url){
        this.img = img;
        this.title = title;
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
        let valores = `<a href ="${item.url}"><img src="img/${item.img}" alt=${item.title}/></a>`;
        let valorTexto = `<a href="${item.url}">${item.title} </a>`;
        const carrosel = document.querySelector('#carousel');//DOM
        const tituloCarrosel = document.querySelector('#carousel-title');//DOM
        carrosel.innerHTML = valores;
        tituloCarrosel.innerHTML = valorTexto;
        Carousel._sequence++;//carrosel avança
        if(Carousel._sequence >= Carousel._size){
        Carousel._sequence = 0;
       }
    }
};
