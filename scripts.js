

window.onload = function() {
    scrani.onload();
    updateExamples();
}

window.onfocus = function() {
    updateExamples();
}

function updateExamples() {
    navigator.clipboard.readText().then(clipText => {

        if (clipText.indexOf('https://drive.google.com/')==0) {
            // drive url
            document.querySelectorAll('code').forEach(($e) => {
                $e.innerHTML=$e.innerHTML.replace('URL to your Google Folder', clipText);
            })
        }    
        if (clipText.indexOf('https://github.com/')==0) {
            // github url
            document.querySelectorAll('code').forEach(($e) => {
                $e.innerHTML=$e.innerHTML.replace('(github user name)', clipText.split('/')[3]);
                $e.innerHTML=$e.innerHTML.replace('(github repo name)', clipText.split('/')[4]);
            })
        }    
    })
}
