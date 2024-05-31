var imagefolder = document.querySelector(".image-container")
var images = imagefolder.querySelectorAll("img")
//console.log(images)
var closebtn = document.querySelector(".close-image")
var zoomimage = document.querySelector(".overlay")

var popupimage = document.getElementById("display-image")

closebtn.addEventListener("click",()=> {
    zoomimage.style.display = "none"
})

images.forEach( function(image){
    image.addEventListener("click",()=>{
        zoomimage.style.display = "block"
        popupimage.src = image.getAttribute('src')
    })
})