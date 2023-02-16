function setTextEditorStyleByStyleProperty(propertyName, propertyValue) {
    const textEditor = document.getElementById('text-editor');

    if(propertyName === 'fontWeight' && textEditor.style[propertyName] === 'bold'){
        textEditor.style[propertyName] = 'normal';
    }
    else if(propertyName === 'fontStyle' && textEditor.style[propertyName] === 'italic') {
        textEditor.style[propertyName] = 'normal';
    }
    else if(propertyName === 'textDecoration' && textEditor.style[propertyName] === 'underline') {
        textEditor.style[propertyName] = 'none';
    }
    else if(propertyName === 'textTransform' && textEditor.style[propertyName] === 'uppercase') {
        textEditor.style[propertyName] = 'none';
    }
    else {
        textEditor.style[propertyName] = propertyValue;
    }
}

function setTextEditorTextAlignByStyleProperty(propertyValue) {
    const textEditor = document.getElementById('text-editor');

    textEditor.style.textAlign = propertyValue;
}


