function buttonclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}

function percentageClick() {
    var text = document.getElementById("screen").value;
    if (text) {
        var result = eval(text) / 100; 
        document.getElementById("screen").value = result;
    }
}
