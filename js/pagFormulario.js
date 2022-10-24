function mostrarRespuesta() {
    document.getElementById('desaparecer').style.display = "none";
    document.getElementById('aparecerResultados').style.display = "block"

    document.getElementById('contenido1-modal');

    /* aqui trae textualmente las preguntas */
    let pregunta1 = document.getElementById('pregunta1').innerHTML;
    let pregunta2 = document.getElementById('pregunta2').innerHTML;
    let pregunta3 = document.getElementById('pregunta3').innerHTML;
    let pregunta4 = document.getElementById('pregunta4').innerHTML;
    let pregunta5 = document.getElementById('pregunta5').innerHTML;
    let pregunta6 = document.getElementById('pregunta6').innerHTML;
    let pregunta7 = document.getElementById('pregunta7').innerHTML;
    let pregunta8 = document.getElementById('pregunta8').innerHTML;
    let pregunta9 = document.getElementById('pregunta9').innerHTML;
    let pregunta10 = document.getElementById('pregunta10').innerHTML;
    let pregunta11 = document.getElementById('pregunta11').innerHTML;
    let pregunta12 = document.getElementById('pregunta12').innerHTML;
    let pregunta13 = document.getElementById('pregunta13').innerHTML;
    let pregunta14 = document.getElementById('pregunta14').innerHTML;
    let pregunta15 = document.getElementById('pregunta15').innerHTML;
    let pregunta16 = document.getElementById('pregunta16').innerHTML;



    /* aqui trae las respuestas de las preguntas */
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    let p4 = document.getElementById('p4').value;
    let p5 = document.getElementById('p5').value;
    let p6 = document.getElementById('p6').value;
    let p7 = document.getElementById('p7').value;
    let p8 = document.getElementById('p8').value;
    let p9 = document.getElementById('p9').value;
    let p10 = document.getElementById('p10').value;
    let p11 = document.getElementById('p11').value;
    let p12 = document.getElementById('p12').value;
    let p13 = document.getElementById('p13').value;
    let p14 = document.getElementById('p14').value;
    let p15 = document.getElementById('p15').value;
    let p16 = document.getElementById('p16').value;

    /* guarda las preguntas en un arreglo */
    let preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16];

    /* guarda las respuestas en un arreglo */
    let resultados = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];


    let contSi = 0;
    let contNo = 0;

    for (let index = 0; index < resultados.length; index++) {


        if (resultados[index] == "Si") {
            contSi++;
        } else {
            contNo++;
            console.log(preguntas[index]);

            let recomendacionpregunta = recomendaciones(index);

            document.getElementById('titulo1-modal').innerHTML = 'SE ENCONTRARON LAS SIGUIENTES VULNERABILIDADES';
            document.getElementById('contenido1-modal').innerHTML += preguntas[index] + '<h5 class="titulosolucion" >Solución:</h5>' + '<h6>' + recomendacionpregunta + '</h6>' + ' <br></br>';

        }



    }

    console.log('TOTAL DE SI ' + contSi);
    console.log('TOTAL DE NO ' + contNo);
    let porcentaje = (contSi * 100) / 16;


    /* este for sirve para saber cuantas preguntas se cumplieron en la seccion comunicacion de datos */
    let contSiComDat = 0;
    for (let index = 0; index <= 4; index++) {

        if (resultados[index] == "Si") {
            contSiComDat++;
        }

    }
    /* aqui asigna el porcentaje a la barra de comunicacion de datos */
    let valorBarraComDat = (contSiComDat * 100) / 5;
    document.getElementById('barraConDat').style.width = valorBarraComDat + "%";

    /* aqui se le asigna el texto a la barra */
    document.getElementById('barraConDat').innerHTML = valorBarraComDat + "%";










    /* este for sirve para saber cuantas preguntas se cumplieron en la seccion hardware y software */
    let contSiHyS = 0;
    for (let index = 5; index <= 8; index++) {

        if (resultados[index] == "Si") {
            contSiHyS++;
        }

    }
    /* aqui asigna el porcentaje a la barra de Hardware y software */
    let valorBarraHys = (contSiHyS * 100) / 4;
    document.getElementById('barrahys').style.width = valorBarraHys + "%";

    /* aqui se le asigna el texto a la barra */
    document.getElementById('barrahys').innerHTML = valorBarraHys + "%";







    /* este for sirve para saber cuantas preguntas se cumplieron en la seccion PLANTA FISICA Y EMPLEADOS */
    let contSiEmple = 0;
    for (let index = 9; index <= 15; index++) {

        if (resultados[index] == "Si") {
            contSiEmple++;
        }

    }
    /* aqui asigna el porcentaje a la barra de Hardware y software */

    /* parseInt elimina los decinales */
    let valorBarraEmpleados = parseInt(contSiEmple * 100 / 7);


    /* lo convierte a texto otra vez*/
    let valorBarraEmpleadosString = valorBarraEmpleados + "%";


    document.getElementById('barraEmpleados').style.width = valorBarraEmpleadosString;

    /* aqui se le asigna el texto a la barra */
    console.log(valorBarraEmpleadosString);
    document.getElementById('barraEmpleados').innerHTML = valorBarraEmpleadosString;








    if (contSi >= 0 && contSi <= 4) {
        document.getElementById("nivel").innerHTML = "BAJO";
        document.getElementById("nivel").style.color = 'red';
        document.getElementById('totalRespuestas').innerHTML = contSi + " de 16";
        document.getElementById('emoji').src = '/img/pag formulario/bajo.png';

    } else if (contSi >= 5 && contSi <= 8) {
        document.getElementById("nivel").innerHTML = "REGULAR";
        document.getElementById("nivel").style.color = 'orange';
        document.getElementById('totalRespuestas').innerHTML = contSi + " de 16";
        document.getElementById('emoji').src = '/img/pag formulario/regular.png';
    } else if (contSi >= 9 && contSi <= 12) {
        document.getElementById("nivel").innerHTML = "BUENO";
        document.getElementById("nivel").style.color = '#fcb913';
        document.getElementById('totalRespuestas').innerHTML = contSi + " de 16";
        document.getElementById('emoji').src = '/img/pag formulario/bueno1.png';
    } else if (contSi >= 13 && contSi <= 16) {
        document.getElementById("nivel").innerHTML = "EXCELENTE";
        document.getElementById("nivel").style.color = 'green';
        document.getElementById('totalRespuestas').innerHTML = contSi + " de 16";
        document.getElementById('emoji').src = '/img/pag formulario/excelente.png';
    } else {
        document.getElementById("nivel").innerHTML = "error";
    }

    document.getElementById("porcentaje").innerHTML = porcentaje + " %";

}


/* ventana modal para las recomendaciones */


function recomendaciones(index) {

    let recomendacion = "";

    switch (index) {
        case 0:
            recomendacion = '111111';

            break;
        case 1:
            recomendacion = '2222222';
            break;
        case 2:
            recomendacion = '3333333';
            break;
        case 3:
            recomendacion = '444444';
            break;
        case 4:
            recomendacion = '5555555';
            break;
        case 5:
            recomendacion = '666666';
            break;
        case 6:
            recomendacion = '777777';
            break;
        case 7:
            recomendacion = '888888';
            break;
        case 8:
            recomendacion = '999999';
            break;
        case 9:
            recomendacion = '10 10 10';
            break;
        case 10:
            recomendacion = '11 11 11';
            break;
        case 11:
            recomendacion = 'Se recomienda realizar  periodicamente conferencias o cualquier tipo de capacitación acerca de ciberseguridad a los empleados para así mitigar errores humanos que puedan ocacionar vulnerabilidades no deseadas.';
            break;
        case 12:
            recomendacion = '13 13 13';
            break;
        case 13:
            recomendacion = '14 14 14';
            break;
        case 14:
            recomendacion = '15 15 15';
            break;
        case 15:
            recomendacion = '16 16 16';
            break;


        default:

            break;
    }

    return recomendacion;

}