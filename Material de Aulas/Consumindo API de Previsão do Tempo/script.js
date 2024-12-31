

    /*Forma 1 FETCH*/
    /*function getAddressByCep(){
        const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`);
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });*/

    /*Forma 2 TRY/CATCH*/
    async function getAddressByCep(){
        const cep = document.getElementById('cep').value;

        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            console.log(data);
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
        } catch(error){
            alert(error.message);
        }        
}

/*Previsão do Tempo*/
async function getPrevisao(){
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = '';
        for(
            let index = 0;
            index < data.hourly.temperature_2m.length; 
            index++
        ){
            document.getElementById(
                'resposta'
            ).innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;
        }
    } catch(error){
        alert(error.message);
    }        
}