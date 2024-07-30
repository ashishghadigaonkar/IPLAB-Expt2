function add(){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let result;

    result = num1 + num2
    console.log(result)
    document.getElementById('answer').value = result
}
function sub(){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let result;

    result = num1 - num2
    console.log(result)
    document.getElementById('answer').value = result
}
function mult(){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let result;

    result = num1 * num2
    console.log(result)
    document.getElementById('answer').value = result
}
function divide(){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let result;

    if(num2==0){
        alert("Error: Number is not divided by 0")
    }
    else{
        result= num1 / num2
    }

    document.getElementById('answer').value = result
}