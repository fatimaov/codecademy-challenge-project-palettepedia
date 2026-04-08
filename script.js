const colorCells = document.querySelectorAll("td");
const copiedMessage = document.createElement("span");
copiedMessage.className = "copy-toast";
copiedMessage.textContent = "Copied!";

colorCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const colorName = cell.textContent.trim();
        navigator.clipboard.writeText(colorName);
        cell.appendChild(copiedMessage);
        copiedMessage.classList.add("show");

        setTimeout(() => {
            copiedMessage.classList.remove("show");
        }, 1000);
    });
});
