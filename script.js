
let active = 2;
let list = document.querySelectorAll('.carousel .item');
const listLength = list.length;



const nextArrow = document.querySelector('.next-arrow');
nextArrow.addEventListener('click', ()=>{
    
    const next =  (active + 1 ) % listLength;

    console.log(`next is ${next} `)
    list[active].classList.remove('active');
    list[next].classList.add('active');

    active = next;



})
const prevArrow = document.querySelector('.prev-arrow');
prevArrow.addEventListener('click', ()=>{
    const prev = (listLength + active - 1 ) % listLength;
    console.log(`next is ${prev} `);

    list[active].classList.remove('active');
    list[prev].classList.add('active');

    active = prev;
})
