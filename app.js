
let imgBox=document.querySelector("imgBox");
let qrImg=document.getElementById("qr-img")
let UrlText=document.getElementById("url");
function genQr(params) {
     qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ UrlText.value;
    
}
let genBtn =document.querySelector(".generate");
genBtn.addEventListener("click",genQr);


// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com