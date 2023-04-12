const textField = document.getElementsByTagName('input');

for (i = 0; i < textField.length; i++) {
    textField[i].addEventListener('invalid', function (e) {
        e.preventDefault();
        this.classList.remove('no-val');
        this.classList.add('invalid');
    })
}