const form = document.getElementById('verificador');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let ValA = parseFloat(document.getElementById('n1').value);
    let ValB = parseFloat(document.getElementById('n2').value);

    const messagesucess = `<b>Correto !!</b>   Campo B (${n2.value}) é maior que o Campo A (${n1.value})`
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})