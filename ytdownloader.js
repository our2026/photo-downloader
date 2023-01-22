const fileInput =document.querySelector("input"),
downloadbtn =document.querySelector("button");

downloadbtn.addEventListener("click", e => {
    e.preventDefault();
    fetchfile("fileInput.value");
});
function fetchfile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let aurl=URL.createObjectURL(file);
        const atag=document.createElement("a");
        atag.href=aurl;
        atag.download= url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    }).catch(() => {
        alert("failed to download");
        downloadbtn.innerText="download file"});


    }




    