function copyToClipboard(button) {
    const code = button.nextElementSibling.innerText;
    const icon = button.querySelector("i");

    navigator.clipboard.writeText(code).then(() => {
        icon.classList.remove("fa-copy");
        icon.classList.add("fa-check");
        setTimeout(() => {
            icon.classList.remove("fa-check");
            icon.classList.add("fa-copy");
        }, 2000);
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}