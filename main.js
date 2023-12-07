const accordionItems = document.querySelectorAll('.fir_ac')
console.log(accordionItems);

accordionItems.forEach(item => 
    item.addEventListener("click", () => {
        const isItemOpen = item.classList.contains("open");
        accordionItems.forEach(item => item.classList.remove("open"));
        if (!isItemOpen) {
            item.classList.toggle("open")
            
        }
    })
    );