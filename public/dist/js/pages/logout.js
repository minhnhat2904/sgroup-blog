document.getElementById('logout-button').addEventListener('click', async function(event) {
    localStorage.removeItem('user');

    location.href = '/';
})