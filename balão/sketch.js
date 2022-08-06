//VARIÁVEIS
var bola;
var database,position;


//CRIE AQUI A FUNÇÃO PRELOAD







function setup(){
//TAMANHO DA TELA
    createCanvas(500,500);

//CONFIGURAÇÃO DO FIREBASE
    database =  firebase.database();
    console.log(database)

//CRIANDO A BOLA
    bola = createSprite(250,250,10,10);
    bola.shapeColor = "red";

//ADICIONE AQUI A ANIMAÇÃO DO BALÃO NO SPRITE DA BOLA
   





//AJUSTANDO A POSIÇÃO DA BOLA DE ACORDO COM O FIREBASE
    var bolaPosition = database.ref('ball/position');
    bolaPosition.on("value",lerPosicao,mostrarErro);

}

function draw(){
//PLANO DE FUNDO
    background("white");

//MOVIMENTAÇÃO DO SPRITE
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
     
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);

    }


    drawSprites();
}
//FUNÇÕES

function changePosition(x,y){
database.ref('ball/position').set({

    'x': position.x + x,
    'y': position.y + y,

  

})


}


function lerPosicao(data){

    position = data.val()
    bola.x = position.x
    bola.y = position.y



}

function mostrarErro(){
console.log("erro ao conecetar com a base de dados")
}
