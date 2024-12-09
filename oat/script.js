function goToPage() {
    window.location.href = 'index.html';
}

function theme() {
    if(document.body.dataset.theme === 'dark'){
        document.body.dataset.theme =  '';
    }
    else{
        document.body.dataset.theme =  'dark';
    }
}