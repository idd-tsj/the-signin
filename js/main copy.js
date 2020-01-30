// Function that can select any element using css selector
const $ = (selector) => document.querySelector(selector)


// clickable .signin
$('.signin').addEventListener('click', event => {
  // .modal to show
  $('.modal').style.display = `block`
})

// clickable .close
$('.close').addEventListener('click', event => { 
  // .modal to hide
  $('.modal').style.display = `none`
})

// clickable .submit
$('.submit').addEventListener('click', event => {
  // add class .error to #user
  $('#user').classList.add(`error`)

  // add class .error to #pass
  $('#pass').classList.add(`error`)
})

// focus #user
$('#user').addEventListener('focus', event => {
  // remove class .error to #user
  $('#user').classList.remove(`error`)
})

// focus #pass
$('#pass').addEventListener('focus', event => {
  // remove class .error to #pass
  $('#pass').classList.remove(`error`)
})
