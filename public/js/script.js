document.getElementById('cadastrar').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let data = {
        email,
    }
    let converData = JSON.stringify(data);
    localStorage.setItem('lead', converData);
    alert("Seu e-mail foi salvo com sucesso!")
    document.getElementById('email').value='';

})

