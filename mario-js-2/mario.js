window.onload = mySize()

function mySize(){
    let pyramidSize = document.getElementsByTagName("input")[0];
    pyramidSize = pyramidSize.value;
    pyramidSize = parseInt(pyramidSize);
    let clearPyramid = document.getElementById("pyramid");
    let node = document.getElementById("pyramid2")
    clearPyramid.removeChild(node);
    let newP2 = document.createElement("div");
    newP2.id = "pyramid2";
    clearPyramid.appendChild(newP2); 
    return drawPyramid(pyramidSize)
    console.log(pyramidSize)
}


function drawPyramid(height){
    let resp = printPyramid(height);
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
        document.getElementById("pyramid2").appendChild(node);
        document.getElementById('pyramid2').appendChild(lineBreak);
    }
    var removeElement = document.getElementById("construction");
    removeElement.parentNode.removeChild(removeElement);
}

function myColor(){
    let brickColor = document.getElementsByTagName("select")[0];
    brickColor = brickColor.value
    



}
