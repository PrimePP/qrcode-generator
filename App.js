//selecting elements
const userInput = document.querySelector(".data");
const qrCodeImage = document.getElementById("img");
const qrCodeBtn = document.getElementById('submit');

/* This generates API
using this API - https://goqr.me/api/doc/create-qr-code/
*/
function generateNewQR(){
    userValue = userInput.value;
    try{
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${userValue}&amp;size=100x100`
    }catch(e){
        console.log(e);
    }
}

qrCodeBtn.addEventListener('click',generateNewQR);