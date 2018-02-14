



var calculate = () => {
    var a = document.getElementById('numa').value
    var b = document.getElementById('numb').value
    var c = document.querySelector('input[name="operator"]:checked').value
    notify('Kết quả ' + eval(a + c + b))
}

var check = () => {
    var a = document.getElementById('numa').value
    var b = document.getElementById('numb').value
    var c = document.querySelector('input[name="operator"]:checked').value
    console.log(c)
    if(a === '' || b === '' || c === '')
        notify('Vui lòng nhập đủ thông tin')
    else
        calculate()
}

var notify = (notice) => {
    document.getElementById('alert').textContent = notice
}