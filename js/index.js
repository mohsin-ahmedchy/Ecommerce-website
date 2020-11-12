
/*js for navbar */

let menuBtn = document.querySelector("#menu-btn"),
menuItem = document.querySelector("#menu-items");
menuItem.style.maxHeight = "0px";
menuBtn.addEventListener("click",()=>{
   if(menuItem.style.maxHeight == "0px"){
        menuItem.style.maxHeight = "200px"
    }
    else{
        menuItem.style.maxHeight = "0px";
    }

})

/* js for image change */

let mainImg = document.getElementById("mainImg"),
changeImg = document.getElementsByClassName("changeImg");

changeImg[0].addEventListener("click",()=> {
    mainImg.src = changeImg[0].src;
})
changeImg[1].addEventListener("click",()=> {
    mainImg.src = changeImg[1].src;
})
changeImg[2].addEventListener("click",()=> {
    mainImg.src = changeImg[2].src;
})




