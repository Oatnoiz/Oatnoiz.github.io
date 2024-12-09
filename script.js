function goToPage() {
    window.location.href = 'homepage.html';
}

function theme() {
    if(document.body.dataset.theme === 'dark'){
        document.body.dataset.theme =  '';
    }
    else{
        document.body.dataset.theme =  'dark';
    }
}