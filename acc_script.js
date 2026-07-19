let headers=document.querySelectorAll(".header");

headers.forEach(element => {
    element.addEventListener("click",function(){
        const activeitem=document.querySelector(".faq-item.active");
        if (activeitem && activeitem!==this.parentElement){
            activeitem.classList.remove("active");
        }
        this.parentElement.classList.toggle("active");
    });
});