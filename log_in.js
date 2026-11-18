const form = document.getElementById('login-form');
const feedback = document.getElementById('feedback');

document.querySelector(',toggle-pwd').addEventListener('click', function (){
    const input = this.previousElementSibling;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    this.textContent = isHidden ? 'Masquer' : 'Afficher';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.checkValidity()) {
        feedback.style.color = '#b54747';
        feedback.textContent = 'Veuillez remplir tous les champs.';
        return;
    }
    feedback.style.color = '#355c7d';
    feedback.textContent = 'Connexion en cours...';
})