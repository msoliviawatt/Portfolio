function copyToClipboard(button) {
    const code = button.nextElementSibing.innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = "Copy";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}