"use strict";

document.querySelector('.slider-button').addEventListener('click', function(event) {
    console.log('sdf');
    document.querySelector('.slider').classList.add('slider-active');
});
document.querySelector('.close-icon').addEventListener('click', function(event) {
    console.log('close');
    document.querySelector('.slider').classList.remove('slider-active');
});