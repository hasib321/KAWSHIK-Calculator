function calculator(number) {
    // document.getElementById('operand').innerText =
    //     document.getElementById('operand').innerText + number;
    // or
    const outpt = document.getElementById('operand');
    const outputValuee = outpt.innerText;
    const theNumber = outputValuee + number;
    outpt.innerText = theNumber;
}

function equal() {
    document.getElementById('operand').innerText = eval(document.getElementById('operand').innerText);
}


function clean() {
    document.getElementById('operand').innerText = "";
}

function del() {
    let preivousValue = document.getElementById('operand').innerText;
    document.getElementById('operand').innerText = preivousValue.substring(0, preivousValue.length - 1);
}
