

function burger_click(){
let checket_burger_button = document.getElementById("hidden_ul");

if(checket_burger_button.style.visibility == "visible"){
    checket_burger_button.style.visibility="hidden";
}else{
    checket_burger_button.style.visibility="visible";
}
}

let carausel_img = document.getElementById("carausel_img");

function btn_1(){

    if( carausel_img.src == "../images/images.jpg"){
        carausel_img.src="../images/banner2.jpg";
    }else{
        carausel_img.src="../images/banner2.jpg";
    }
    }

    
function btn_2(){
    if( carausel_img.src == "../images/images.jpg"){
        carausel_img.src="../images/banner2.jpg";
    }else{
        carausel_img.src="../images/images.jpg";
    }
    }