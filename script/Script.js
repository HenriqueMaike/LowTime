/**
 * Created by henri on 16/04/2017.
 */

img = new Array('1','2','3');

indice = 0;

setInterval("mudaImg()", 6000);

function mudaImg(i) {

    if (i == 0 || i == 1 || i == 2 || i == 3) {

        indice = i;

    } else {

        if (indice == img.length - 1) {

            indice = 0;

        } else {

            indice++;

        }

    }

    document.getElementById("banner_img_1").setAttribute("class", "");
    document.getElementById("banner_img_2").setAttribute("class", "");
    document.getElementById("banner_img_3").setAttribute("class", "");
    document.getElementById("banner_img_" + img[indice]).setAttribute("class", "hover");

    document.getElementById("imagens").innerHTML = "<img src='imagens/"+ img[indice] +".jpg' width='900' height='400' border='0' alt='Banner'>";

}