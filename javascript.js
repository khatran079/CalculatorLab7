function clearForm(){
    document.getElementById("my-form").reset();
    document.getElementById("display-area").value = "";
    window.location.reload();
}


function add(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if(isNaN(x) || isNaN(y)){
        window.alert("The inputs are  not numbers. Please enter again!")
        clearForm()
    }
    else{
        result = parseFloat(x)+parseFloat(y);
        document.getElementById("display-area").value = `${x} + ${y} = ${result}`;
    }
}

function multiply(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if(isNaN(x) || isNaN(y)){
        window.alert("The inputs are  not numbers. Please enter again!")
        clearForm()
    }
    else{
        result = parseFloat(x)*parseFloat(y);
        document.getElementById("display-area").innerHTML = `${x} x ${y} = ${result}`
    }
}

function divide(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if(isNaN(x) || isNaN(y)){
        window.alert("The inputs are  not numbers. Please enter again!")
        clearForm()
    }
    else{
        result = parseFloat(x)/parseFloat(y);
        document.getElementById("display-area").innerHTML = `${x} / ${y} = ${result}`
    }
}






