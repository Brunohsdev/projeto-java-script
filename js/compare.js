//for table
const tabela = document.getElementById('compare');
//comparadores
const comparacao_img0 = document.getElementById('compare_image_0');
const comparacao_img1 = document.getElementById('compare_image_1');
const comparacao_modelo0 = document.getElementById('compare_modelo_0');
const comparacao_modelo1 = document.getElementById('compare_modelo_1');
const comparacao_altura0 = document.getElementById('compare_alturacacamba_0');
const comparacao_altura1 = document.getElementById('compare_alturacacamba_1');
const comparacao_altura_cacamba0 = document.getElementById('compare_alturacacamba_0');
const comparacao_altura_cacamba1 = document.getElementById('compare_alturacacamba_1');
const comparacao_altura_do_solo0 = document.getElementById('compare_alturasolo_0');
const comparacao_altura_do_solo1 = document.getElementById('compare_alturasolo_1');
const comparacao_capacidade_carga0 = document.getElementById('compare_capacidadecarga_0');
const comparacao_cacacidade_carga1 = document.getElementById('compare_capacidadecarga_1');
const comparacao_motor0 = document.getElementById('compare_motor_0');
const comparacao_motor1 = document.getElementById('compare_motor_1');
const compare_potencia_0 = document.getElementById('compare_potencia_0');
const compare_potencia_1 = document.getElementById('compare_potencia_1');
const compare_volumecacamba_0 = document.getElementById('compare_volumecacamba_0');
const compare_volumecacamba_1 = document.getElementById('compare_volumecacamba_1');


//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}
//coloca o objeto carro dentro da lista
function SetCarToCompare(el, carClass) {
    // let index = GetCarArrPosition(el, carClass);
    if(carClass instanceof Car){       
        if(el.checked == true){
               carArr.push(carClass);
            
        } else {
            carArr.splice(carClass);
        } 
    } else {
        throw "You need set a Car Class";
    }
} 

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
