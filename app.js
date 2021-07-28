var translatebutton = document.querySelector("#block");
var textininputbox = document.querySelector("#input-text");
var textinoutput = document.querySelector("#output-box");

var url = "https://api.funtranslations.com/translate/dothraki.json"


function fullurl(text){
    return url + "?" + "text=" + text
}


function clickbutton(){
    var textentered = textininputbox.value;
    fetch(fullurl(textentered))
    .then(response => response.json())
    .then(json =>{
        var translatedoutput = json.contents.translated;
        textinoutput.innerText = translatedoutput;
    })
}

translatebutton.addEventListener("click",clickbutton)