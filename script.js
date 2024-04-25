let saturate =document.getElementById("saturate") ;
let contrast =document.getElementById("contrast") ;
let brightness =document.getElementById("brightness") ;
let sepia =document.getElementById("sepia") ;
let grayscale =document.getElementById("grayscale") ;
let blur =document.getElementById("blur") ;
let huerotate =document.getElementById("hue-rotate") ;

let  upload=document.getElementById("upload") ;
let download =document.getElementById("download") ;
let img=document.getElementById("img") ;
let resat=document.querySelector("span");
let imgBox=document.querySelector(".imgbox");

let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");

function reasTvalue(){
    img.style.filter = "none";
    contrast.value = "100"
    saturate.value = "100"
    brightness.value = "100"
    sepia.value = "0"
    grayscale.value = "0"
    blur.value = "0"
    huerotate.value = "0"
}



window.onload = function (){
  download.style.display = "none";
  resat.style.display = "none";
 imgBox.style.display = "none";
}



upload.onchange = function(){
    reasTvalue()
    download.style.display = "block";
    resat.style.display = "block";
   imgBox.style.display = "block";
   let file = new FileReader();
   file.readAsDataURL(upload.files[0]);
   file.onload = function (){
    img.src = file.result;
   }
   
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);
        img.style.display = "none"
    
       
    }
}



let filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {

filter.addEventListener('input', function(){
   ctx.filter =`
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
    `
    ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);
})

});

download.onclick = function(){
download.href = canvas.toDataURL("img/jpeg");
}



