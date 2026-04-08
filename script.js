document.querySelectorAll('td').forEach((td) => {
    td.addEventListener("click", () => {
        navigator.clipboard.writeText(td.innerHTML);
    })
});