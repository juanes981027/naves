document.addEventListener("DOMContentLoaded",function(){
    const cuadrosTablero = document.querySelectorAll(".tablero div")
    const resultadoAliens = document.querySelector(".conteo")
    let cuadros = 15;
    let posicionNave = 202;
    let posicionAliens = 0;
    let aliensMuertos = 0;
    let resultado = 0;
    let direccion = 1;
    let alienID = 0;
    let aliens = [  ]
    for (i=0;i<40;i++){
        aliens.push(i)
    }
    console.log(aliens)

   

    aliens.forEach(alien => cuadrosTablero[posicionAliens+alien].classList.add("aliens"))

    cuadrosTablero[posicionNave].classList.add('nave')
    
})