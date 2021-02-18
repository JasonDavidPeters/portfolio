var htmlElement = document.documentElement;
var query = window.getComputedStyle(document.body);
var fontSize = 18;
htmlElement.style.backgroundColor="black";
var containerElement = document.createElement("div");
displayNumbers();
var resizing;

function resizeWindow(){ 
    // console.log('firing event');
    query = window.getComputedStyle(htmlElement);
    containerElement=document.createElement('div');
    // if (!resizing)
    // displayNumbers();
}
window.addEventListener("resize", function(event) {
    resizing=true;
    resizeWindow();
})
function displayNumbers(){ 
    // containerElement.style.position="absolute";
    containerElement.style.width=query.width+"px";
    containerElement.style.height=query.height+"px";
    console.log(query.width);
    for (var j = 0; j < parseInt(query.height) / (fontSize); j++) {
        for (var i = 0; i < parseInt(query.width)/(fontSize); i++) {
                var spanElement = document.createElement("span");
                spanElement.className="backgroundNumber" + i+""+j;
                spanElement.style.position="absolute";
                spanElement.style.display="inline-block";
                spanElement.style.color="white";
                spanElement.style.fontSize=fontSize+"px";
                spanElement.style.top=j*fontSize+'px';
                spanElement.style.left=i*fontSize+"px";
                spanElement.style.fontFamily="rainyhearts";
                spanElement.textContent=(parseInt((Math.random()*2)) == 1) ? "0" : "1"; // randomly 0 or 1
                spanElement.style.zIndex="0";   
                spanElement.addEventListener("mouseenter", function() {changeNumber(this) });
                containerElement.appendChild(spanElement);
            
        }
    }
    htmlElement.appendChild(containerElement);
}

function changeNumber(number) {
        if (number.textContent == '0')
        number.textContent='1';
        else  if (number.textContent == '1')
        number.textContent='0';
}