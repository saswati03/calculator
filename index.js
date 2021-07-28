//Theme-changer
let checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change', function() {
    // Change the theme of the website
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value +=num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}