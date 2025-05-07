const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* Generar alert al presionar el boton "enviar" en la sección de "Contacto" */
$('#btn5').click(function(){
    alert("Gracias por tu mensaje")
})
/* 
$('#btn2').click(function(){
    alert("Añadido a favoritos :) ")
})

$('#btnnews1').click(function(){
    alert("Gracias por suscribirte a nuestro Newsletter")
})
$('#btnnews2').click(function(){
    alert("Gracias por suscribirte a nuestro Newsletter")
})

 */
/* 
$('#cc1').dblclick('dblclick', changeColor);
$('#cc2').on('dblclick', changeColor);

function changeColor(){
    var tColor = $(this).css("color");
     if (tColor == 'rgb(33, 37, 41)'){
        $(this).css('color', 'rgb(255, 0, 0)')
    }
    if (tColor == 'rgb(255, 0, 0)'){
        $(this).css('color', 'rgb(33, 37, 41)')
    }        
};
 */

/* Esconder la información de las cards, cambiando el texto del botón de Ocultar a mostrar y viceversa */
$('#btn1').click(function(){
    $('#imgCard1, #pCard1').toggle()
    var nameBtn1 = document.getElementById("btn1")

    if (nameBtn1.value == "Mostrar"){
        nameBtn1.value = "Ocultar";
        nameBtn1.innerHTML = "Ocultar";

    }
    else{
        nameBtn1.value = "Mostrar";
        nameBtn1.innerHTML = "Mostrar";

    }
})

$('#btn2').click(function(){
    $('#imgCard2, #pCard2').toggle()
    var nameBtn2 = document.getElementById("btn2")

    if (nameBtn2.value == "Mostrar"){
        nameBtn2.value = "Ocultar";
        nameBtn2.innerHTML = "Ocultar";
    }
    else{
        nameBtn2.value = "Mostrar";
        nameBtn2.innerHTML = "Mostrar";
    }
})

$('#btn3').click(function(){
    $('#imgCard3, #pCard3').toggle()
    var nameBtn3 = document.getElementById("btn3")

    if (nameBtn3.value == "Mostrar"){
        nameBtn3.value = "Ocultar";
        nameBtn3.innerHTML = "Ocultar";
    }
    else{4
        nameBtn3.value = "Mostrar";
        nameBtn3.innerHTML = "Mostrar";
    }
})

$('#btn4').click(function(){
    $('#imgCard4, #pCard4').toggle()
    var nameBtn4 = document.getElementById("btn4")

    if (nameBtn4.value == "Mostrar"){
        nameBtn4.value = "Ocultar";
        nameBtn4.innerHTML = "Ocultar";
    }
    else{
        nameBtn4.value = "Mostrar";
        nameBtn4.innerHTML = "Mostrar";
    }
})

