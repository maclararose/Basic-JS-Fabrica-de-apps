document.write("<br/> Escolha seu pedido <br/>");
document.write("<br/> 0 - Nada <br/>");
document.write("<br/> 1 - Hamburguer <br/>");
document.write("<br/> 2 - Sorvete <br/>");
document.write("<br/> 3 - Pizza <br/>");

function pedir(){
    
    x = prompt("Qual seu pedido?");

    switch(x){

        case "0":
            alert("Voce pediu: Nada");
            break;

        case "1":
            alert("Voce pediu: Hamburguer");
            break;

        case "2":
            alert("Voce pediu: Sorvete");
            break; 

        case "3":
            alert("Voce pediu: Pizza");
            break;

        default:
            alert("Opcao invalida!");
            break;
    }
}