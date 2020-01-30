// ****** DOM REFERENCES ******
let $modal =  document.querySelector('.modal')
let $user =   document.querySelector('#user')
let $pass =   document.querySelector('#pass')
let $signin = document.querySelector('.signin')
let $close =  document.querySelector('.close')
// let $submit = document.querySelector('.submit')
let $form =   document.querySelector('.getstarted')


// ****** UI MODIFICATIONS ******
// ****** INTERACTIVE EVENT LISTENERS ******

// Capture the .signin click
$signin.addEventListener('click', event => { 
  // Display the .modal
  $modal.style.display = `block`
})


// Capture the .close click
$close.addEventListener('click', event => { 
  // Remove the .modal
  $modal.style.display = `none`
})


// Capture the focus of #user
$user.addEventListener('focus', event => { 
  // Remove .error from #user
  $user.classList.remove(`error`)
})


// Capture the focus of #pass
$pass.addEventListener('focus', event => {
  // Remove .error from #pass
  $pass.classList.remove(`error`)
})


$form.addEventListener('submit', event => {
  event.preventDefault();

  // Add .error to #user
  $user.classList.add(`error`)

  // Add .error to #pass
  $pass.classList.add(`error`)
})


/* 
if ( ) {

} 
*/