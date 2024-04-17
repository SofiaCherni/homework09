let burger = document.getElementById("burger");
let navbarlist = document.getElementById("navbarList")
console.log(burger);
console.log(navbarList);

burger.addEventListener("click", function() {
    burger.classList.toggle('active'); 
    navbarList.classList.toggle('active'); 
    
})