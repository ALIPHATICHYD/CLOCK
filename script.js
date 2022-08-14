const mainContainer = document.querySelector('body');
const switchContainer = document.querySelector('.switch-container');
const switchBtn = document.querySelector('.switch')
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const tick =  document.querySelector('.tick')
const dot = document.querySelector('.dot')


setInterval(() => {
    let day =   new Date();
    let hr = day.getHours() * 30;
    let mins = day.getMinutes() * 6
    let sec = day.getSeconds() * 6
