/* Inicializar los tooltips de Bootstrap */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



/* Generar alert al presionar el boton "enviar" en la sección de "Contacto" 
Se comprueba la validez de cada campo del Form, si algún campo se encuentra incompleto se genera un alert
indicando que se deben completar todos los campos; si todo está correcto entonces se genera un alert dando
las gracias por el mensaje.
Al finalizar la función se resetean los campos del formulario*/

function myValidation() {
    const inpObj1 = document.getElementById('name');
    const inpObj2 = document.getElementById('InputEmail1');
    const inpObj3 = document.getElementById('issue');
    const inpObj4 = document.getElementById('message');
    const form = document.getElementById('myForm');
    if ((!inpObj1.checkValidity()) || (!inpObj2.checkValidity()) || (!inpObj3.checkValidity()) || (!inpObj4.checkValidity())){
        alert('Completa todos los campos');
    }
    else {
        alert('Gracias por tu mensaje, pronto nos pondremos en contacto contigo\n                                   Que tengas un lido día!!!');
        form.reset();
    } 

} 


/* Esconder la información de las cards con el método toggle al hacer click en los botones de cada Card.
Se realiza el mismo procedimiento para los cuatro botones de la sección "Destacados".
Al realizar click en un botón se utiliza el método getElementById para seleccionar el boton y cambiar su valor de Ocultar a mostrar y viceversa.
*/
$('#btn1').click(function(){
    $('#imgCard1, #pCard1').toggle()
    var nameBtn1 = document.getElementById('btn1');

    if (nameBtn1.value == 'Mostrar'){
        nameBtn1.value = 'Ocultar';
        nameBtn1.innerHTML = 'Ocultar';

    }
    else{
        nameBtn1.value = 'Mostrar';
        nameBtn1.innerHTML = 'Mostrar';

    }
})

$('#btn2').click(function(){
    $('#imgCard2, #pCard2').toggle()
    var nameBtn2 = document.getElementById('btn2');

    if (nameBtn2.value == 'Mostrar'){
        nameBtn2.value = 'Ocultar';
        nameBtn2.innerHTML = 'Ocultar';
    }
    else{
        nameBtn2.value = 'Mostrar';
        nameBtn2.innerHTML = 'Mostrar';
    }
})

$('#btn3').click(function(){
    $('#imgCard3, #pCard3').toggle()
    var nameBtn3 = document.getElementById('btn3');

    if (nameBtn3.value == 'Mostrar'){
        nameBtn3.value = 'Ocultar';
        nameBtn3.innerHTML = 'Ocultar';
    }
    else{
        nameBtn3.value = 'Mostrar';
        nameBtn3.innerHTML = 'Mostrar';
    }
})

$('#btn4').click(function(){
    $('#imgCard4, #pCard4').toggle()
    var nameBtn4 = document.getElementById('btn4');

    if (nameBtn4.value == 'Mostrar'){
        nameBtn4.value = 'Ocultar';
        nameBtn4.innerHTML = 'Ocultar';
    }
    else{
        nameBtn4.value = 'Mostrar';
        nameBtn4.innerHTML = 'Mostrar';
    }
})

