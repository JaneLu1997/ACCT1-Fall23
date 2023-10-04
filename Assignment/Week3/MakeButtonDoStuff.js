let imageButtonOne = document.getElementById("firstImageBTN")
let firstImage = document.getElementById("imageOne")
let nextIMGbutton = document.getElementById("nextImageBTN")
let nextImage = document.getElementById("nextIMG")
let thirdIMGbutton = document.getElementById("thenImageBTN")
let thenImage = document.getElementById("thenIMG")
let lastIMGbutton = document.getElementById("lastImageBTN")
let lastImage = document.getElementById("lastIMG")


let getImageOne = function(){
    firstImage.style.display = "block";
    firstImage.style.margin = "50px";
    nextImage.style.display = "none"
    thenImage.style.display = "none";
    lastImage.style.display = "none";
}

let getImageTwo = function(){
    firstImage.style.display = "none";
    nextImage.style.display = "block";
    nextImage.style.margin = "50px";
    thenImage.style.display = "none";
    lastImage.style.display = "none";
  
}

let getImageThree = function(){
    firstImage.style.display = "none";
    nextImage.style.display = "none";
    thenImage.style.display = "block";
    thenImage.style.margin = "50px";
    lastImage.style.display = "none";
}

let getImageFour = function(){
    firstImage.style.display = "none";
    nextImage.style.display = "none";
    thenImage.style.display = "none";
    lastImage.style.display = "block";
    lastImage.style.margin = "50px";
}

imageButtonOne.addEventListener("click", getImageOne)
nextIMGbutton.addEventListener("click", getImageTwo)
thirdIMGbutton.addEventListener("click", getImageThree)
lastIMGbutton.addEventListener("click", getImageFour)