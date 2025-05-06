const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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


$('#btn1').click(function(){
    $('#imgCard1, #pCard1').toggle()
    var hCard1 = $('#card1').css("height")
    if (hCard1 == "80px"){
        $('#card1').css('height', '100%')
    }
    if (hCard1 != "80px"){
        $('#card1').css('height', '150px')
    }
})

$('#btn2').click(function(){
    $('#imgCard2, #pCard2').toggle()
    var hCard2 = $('#card2').css("height")
    if (hCard2 == "80px"){
        $('#card2').css('height', '100%')
    }
    if (hCard2 != "80px"){
        $('#card2').css('height', '150px')
    }
})

$('#btn3').click(function(){
    $('#imgCard3, #pCard3').toggle()
    var hCard3 = $('#card3').css("height")
    if (hCard3 == "80px"){
        $('#card3').css('height', '100%')
    }
    if (hCard3 != "80px"){
        $('#card3').css('height', '150px')
    }
})

$('#btn4').click(function(){
    $('#imgCard4, #pCard4').toggle()
    var hCard4 = $('#card4').css("height")
    if (hCard4 == "80px"){
        $('#card4').css('height', '100%')
    }
    if (hCard4 != "80px"){
        $('#card4').css('height', '150px')
    }
})


