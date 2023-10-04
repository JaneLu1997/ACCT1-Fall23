let firstSection = document.getElementById("sectionOne")
let firstImage = document.getElementById("imageOne")
let buttonChangeColor = document.getElementById("colorChangeBTN")
let buttonGenColor = document.getElementById("colorGenBTN")
let buttonChangeImage = document.getElementById("imageChangeBTN")
let buttonAddText = document.getElementById("addTextBTN")



let changeColor = function(){
    firstSection.style.backgroundColor = "rgb(170, 250, 190)"

}

let generateColor = function(){
    let redComp = Math.random() * 255
    let greenComp = Math.random() * 255
    let blueComp = Math.random() * 255
    firstSection.style.backgroundColor = "rgb("+redComp+", "+greenComp+", "+blueComp+")"
}

let changeImage = function(){
    firstImage.classList.toggle("image-2")
    if(firstImage.classList[0] == "image-2"){
        firstImage.src = "loopy_2.png"
    }
    else {
        firstImage.src = "loopy_3.png"
    }
}

let addText = function(){
    let myParag = document.createElement("p")
    myParag.innerText = "World Destruction!"
    myParag.style.fontWeight = "bolder"
    firstSection.appendChild(myParag)
}



firstSection.style.backgroundColor = "rgb(255,170,190)"

buttonChangeColor.addEventListener("click", changeColor)
buttonGenColor.addEventListener("click", generateColor)
buttonChangeImage.addEventListener("click", changeImage)
buttonAddText.addEventListener("click",addText)