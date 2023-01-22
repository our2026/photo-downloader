const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading";
    fetchFile(fileInput.value);
});
function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let Url = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = Url;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(Url);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}