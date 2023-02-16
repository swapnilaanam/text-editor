document.getElementById('btn-bold').addEventListener('click', function() {
    setTextEditorStyleByStyleProperty('fontWeight', 'bold');
});

document.getElementById('btn-italic').addEventListener('click', function() {
    setTextEditorStyleByStyleProperty('fontStyle','italic');
});

document.getElementById('btn-underline').addEventListener('click', function() {
    setTextEditorStyleByStyleProperty('textDecoration','underline');
});

document.getElementById('btn-align-left').addEventListener('click', function() {
    setTextEditorTextAlignByStyleProperty('left');
});

document.getElementById('btn-align-right').addEventListener('click', function() {
    setTextEditorTextAlignByStyleProperty('right');
});

document.getElementById('btn-align-center').addEventListener('click', function() {
    setTextEditorTextAlignByStyleProperty('center');
});

document.getElementById('btn-align-justify').addEventListener('click', function() {
    setTextEditorTextAlignByStyleProperty('justify');
});

document.getElementById('font-size-field').addEventListener('change', function() {

    const fontSizeField = document.getElementById('font-size-field');
    const fontSizePx = fontSizeField.value;

    const textEditor = document.getElementById('text-editor');
    textEditor.style.fontSize = fontSizePx + 'px';
});

document.getElementById('text-case').addEventListener('click', function() {
    setTextEditorStyleByStyleProperty('textTransform', 'uppercase');
});

document.getElementById('input-color').addEventListener('change', function(event) {

    const textColor = event.target.value;

    const textEditor = document.getElementById('text-editor');
    textEditor.style.color = textColor;
});