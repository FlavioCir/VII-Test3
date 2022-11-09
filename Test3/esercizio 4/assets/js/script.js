axios.get('https://fakestoreapi.com/products/').then(function(response) {
    console.log(response);
    console. table(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.get('https://fakestoreapi.com/products/1').then(function(response) { //mi tira fuori solo il primo elemento
    console.log(response);
    console. table(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.post('https://fakestoreapi.com/products/', {title: 'Titolo cambiato', price: 300}).then(function(response) { //post inserisce un nuovo oggetto e quindi gli dobbiamo passare tutti gli elementi che dobbbiamo aggiungere
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.put('https://fakestoreapi.com/products/3', {title: 'Titolo cambiato all\'iD 3'}).then(function(response) { //con PUT cambio un il valore di un elemento specifigandogli l'ID dell'elemento che sto cambiando
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});