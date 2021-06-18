function valuesearching() {
    var search
    var url
    
    var cidade = document.getElementById('City').value
    var estado = document.getElementById('UF').value
    var log = document.getElementById('Logr').value
    search = document.getElementById('cepres')

    url = `https://viacep.com.br/ws/${estado}/${cidade}/${log}/json/`
    fetch(url)
    .then(response =>{
        return response.json()
    }) .then(responde =>{
        console.log(responde)
        var salvarcep = ''
        responde.map(responde =>{
            salvarcep = salvarcep + `<p> - ${responde.logradouro} - ${responde.cep} </p>`

        })
        search.innerHTML= salvarcep
    })
}