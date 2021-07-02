var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputId = document.querySelector("#output-id");


function clickHandler(){
    console.log(txtInput);
    console.log("clicked");
    console.log(outputId);
    console.log("input" , txtInput.value)
    outputId.innerText = "jhjhjhjkh "+txtInput.value ;
    
};
btnTranslate.addEventListener("click",clickHandler)
 

















