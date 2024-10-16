
// get the button element

const javaclass=document.getElementById('colorButton');

// add event listener for the botton click

javaclass.addEventListener('click',()=>{

    // change the color of the button

    javaclass.style.backgroundColor=javaclass.style.backgroundColor==='blue' ? '#4caf50':'blue';

});