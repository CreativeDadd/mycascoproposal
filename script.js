document.addEventListener("DOMContentLoaded", () =>{
    
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav-ul");
    const closedBtn = document.querySelector(".close-btn");
    const items = document.querySelectorAll(".item");

    // create event handler to make menu list appear when outline btn is clicked:
    menuBtn.addEventListener("click", () => {
        navUl.classList.add("active");
        menuBtn.classList.add ("remove");
        closedBtn.classList.add("active-closedbtn")
    })


closedBtn.addEventListener("click", () => {
    menuBtn.classList.remove ("remove");
    closedBtn.classList.remove("active-closedbtn");
    navUl.classList.remove("active")
    

})
//create event to make menu display but remove ul element:
items.forEach(item => {
    item.addEventListener("click", () => {
        // delay closing menu list by 400ms:
        
            navUl.classList.remove("active");
            menuBtn.classList.remove("remove");
            closedBtn.classList.remove("active-closedbtn");
        
     })

})
    
})