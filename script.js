function display(value){
    document.getElementById("result").value += value;
}

function del(){
    document.form.answer.value = document.form.answer.value.substr(0,form.answer.value.length-1)

}
function clearscreen()
{
    document.getElementById("result").value = "";
}

function giveans(){
    var a = document.getElementById("result").value;
    var b= eval(a);
    document.getElementById("result").value = b;
}


