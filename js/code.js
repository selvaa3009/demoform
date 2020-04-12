$(document).ready(function(){
    // $('.menu-icon').click(function(){
    //     $('.menu-items').toggle('slide');
    // });
    // $('.accordion-items').hide();

    // $('.accordion > a').click(function () {
    //     $('.accordion-items').slideUp();
    //     $('.accordion').children('.accordion-items').slideDown();
    //     return false;
    // });
    $('.accordion-items').hide();
    
    $('.accordion > li.list-items > a').click(function () {
        console.log(this);
        // $('.accordion-items').slideUp();
        // $('.accordion > li > a').removeClass('down').addClass('right');
        $(this).toggleClass('right').toggleClass('down');
        $(this).parent().children('.accordion-items').toggle();
        return false;
    });
});

const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value}</span>`;
        rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
