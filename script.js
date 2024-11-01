

function fun1(){
    alert("Ahoj :D");
}
function fun2(){
    document.getElementById("button2").textContent = "Button se změnil";
}
function fun3(){
    document.getElementById("text3").textContent = "Jínačí text v <H3>";
}
function fun4(){
    document.getElementById("text4").style = "display:block;";
}
function fun5(){
    var name = document.getElementById("nameInput").value;
    if (name) {
        alert("Ahoj, " + name + "!");
    } else {
        alert("Prosím, zadejte své jméno.");
    }
}
const textElement = document.getElementById("text6");

textElement.addEventListener("mouseover", function() {
    textElement.textContent = "Text po přejetí myší!";
});

textElement.addEventListener("mouseout", function() {
    textElement.textContent = "Přejeďte myší na tento text.";
});

function fun7() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('text7').textContent = currentTime;
}
function fun8() {
    const today = new Date();
    const currentDate = today.toLocaleDateString();
    document.getElementById('text8').textContent = currentDate;
}

function fun8() {
    const today = new Date();
    const currentDate = today.toLocaleDateString();
    document.getElementById('text8').textContent = currentDate;
}

function fun9() {

    document.getElementById('text9').textContent = Math.floor(document.getElementById('input8').value) + 3 ;

}


function fun10() {

    document.getElementById('text10').textContent = Math.floor(document.getElementById('input9').value) + Math.floor(document.getElementById('input10').value);

}

const image = document.getElementById("image11")
image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.5)";
});

image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1.0)";
});