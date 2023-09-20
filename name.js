function toggleHiddenParagraph() {
    var hiddenParagraph = document.getElementById('hidden-paragraph');
    if (hiddenParagraph.style.display === 'none' || hiddenParagraph.style.display === '') {
        hiddenParagraph.style.display = 'block';
    } else {
        hiddenParagraph.style.display = 'none';
    }
}