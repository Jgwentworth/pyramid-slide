window.onload = mySize()

let changePyramidColor = document.getElementsByTagName("select")[0];;
console.log(changePyramidColor)
let resizePyramid = document.getElementById("size");
resizePyramid.addEventListener('click', mySize);
resizePyramid.addEventListener('click', myColor);
changePyramidColor.addEventListener('click', myColor)

function mySize(){
    let pyramidSize = document.getElementsByTagName("input")[0];
    pyramidSize = pyramidSize.value;
    pyramidSize = parseInt(pyramidSize);
    let clearPyramid = document.getElementById("pyramid");
    let node = document.getElementById("pyramid2");
    clearPyramid.removeChild(node);
    let newP2 = document.createElement("div");
    newP2.id = "pyramid2";
    clearPyramid.appendChild(newP2); 
    return drawPyramid(pyramidSize);
}

function drawPyramid(height){
    let resp = printPyramid(height);
    let brickColor = document.getElementsByTagName("select")[0];
    function printPyramid(height) {
        let marioString = "\u00A0"
        for (let i = 1; i < height; i++) {
            marioString = marioString + "\u00A0";
        }
        marioString = marioString + "#"
        const marioArr = []
        for (let i = 0; i < height; i++) {
            marioString = marioString + '#';
            marioString = marioString.substring(1);
            marioArr.push(marioString);
        }
        return marioArr
    }
    for (let i = 0; i < resp.length; i++) {
        const node = document.createElement("p");
        let line = resp[i];
        let lineSplit = line.split('');
        for (let i = 0; i < lineSplit.length; i++){
            let divElement = document.createElement("span");
            let x = document.createTextNode(lineSplit[i]);
            divElement.appendChild(x);
            if (lineSplit[i] == "#"){
                divElement.className = "box";
            } else {
                divElement.className = "space";
            }
            node.appendChild(divElement);        
        }
        let divSpan = document.createElement("span");
        node.appendChild(divSpan);
        let lineBreak = document.createElement('br');
        pyramidDiv2 = document.getElementById("pyramid2");
        pyramidDiv2.appendChild(node);
        pyramidDiv2.appendChild(lineBreak);
    }
    myColor()
}

function myColor(){
    let brickColor = document.getElementsByTagName("select")[0];
    brickColor = brickColor.value
    let brickStatus = document.getElementsByClassName("box");
    function colorChange(back, border){
        for (i = 0; i < brickStatus.length; i++){
            brickStatus[i].style.backgroundColor = back;
            brickStatus[i].style.borderColor = border;
        }
    };  
    switch(brickColor) {
    case "2":
        colorChange('#00008b', '#008b8b black black #008b8b' )
        break;
    case "3":
        colorChange('#228b22', '#90ee90 black black #90ee90' )
        break;
    default:
        colorChange('#d2691e', '#deb887 black black #deb887' )
    }
}

