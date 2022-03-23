function add(){
    var result=Number(document.getElementById("fn").value) + Number(document.getElementById("sn").value);
    document.getElementById("b1").value =result;
}
function subtract(){
    var result=Number(document.getElementById("fn").value) - Number(document.getElementById("sn").value);
    document.getElementById("b2").value =result;
}
function Multiplication(){
    var result=Number(document.getElementById("fn").value) * Number(document.getElementById("sn").value);
    document.getElementById("b3").value =result;
}
function Division(){
    var result=Number(document.getElementById("fn").value) / Number(document.getElementById("sn").value);
    document.getElementById("b4").value =result;
}

