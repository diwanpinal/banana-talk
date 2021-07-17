var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputId = document.querySelector("#output-id");



var serverURL="https://api.funtranslations.com/translate/minion.json"

function  getTranslationURL(text){

    return serverURL +"?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured".error);
    alert("something went wrong , Try angain after sometime")
}

function clickHandler(){
    
    console.log("input" , txtInput.value)
    var  inputText = txtInput.value ;
    outputId.innerText = outputId.value ;
    fetch (getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{ 
        var translatedText= json.contents.translated;
        outputId.innerText = translatedText ;
    
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)


















