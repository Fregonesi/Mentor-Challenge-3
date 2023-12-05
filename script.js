function initAccordion() {
const accordionList = document.querySelectorAll(".js-accordion h6");
const activeClass = 'ativo'
if(accordionList.length) {
accordionList[0].classList.add(activeClass)
accordionList[0].nextElementSibling.classList.add(activeClass)


function handleAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', handleAccordion);
})
}
}
initAccordion()