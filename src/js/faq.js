import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const panels = document.querySelectorAll(".answer");

panels.forEach(panel => {
  panel.style.height = ""; 
});

document.addEventListener('DOMContentLoaded', function () {
    const accordion = new Accordion('.accordion_list', {
        duration: 600, 
        showMultiple: false,
        openOnInit: [0],
        elementClass: 'accordion_item',
        triggerClass: 'accordion_header',
        panelClass: 'answer',
        activeClass: 'open',
        collapse: true,
    })

    const accordionBtns = document.querySelectorAll('.accordion_btn')

    accordionBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation()
            const header = btn.closest('.accordion_header')
            header.click()
    })
})
})
