
const defaultText = "**Result** *will* be `shown here`";
const previewBlock = document.getElementById('preview');
previewBlock.innerHTML = parse(defaultText);

document.getElementById('description')
    .addEventListener('keyup', function (e) {
        previewBlock.innerHTML = parse(e.target.value);
    });

document.getElementById('copy')
    .addEventListener('click', function () {
        document.getElementById('description').select();
        document.execCommand('copy');

        const copiedMessageBlock = document.getElementById('copiedMessage');
        copiedMessageBlock.innerText = 'Copied!';
        setTimeout(function () {
            copiedMessageBlock.innerText = '';
        }, 3000);
    });