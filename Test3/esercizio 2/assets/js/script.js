var saluto = document.getElementById('saluto');
var btnAdd = document.getElementById('inserisci');
var btnDelete = document.getElementById('elimina');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    var nome = document.getElementById('nome').value;
    localStorage.setItem('utente', nome);
    saluto.innerHTML = `Benvenuto: ${localStorage.getItem('utente')}`;
    document.getElementById('nome').value = '';
});

btnDelete.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('utente');
    saluto.innerHTML = '';
})