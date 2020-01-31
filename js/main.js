// ****** STORE ALL DOM REFERENCES ******
let $modal =  document.querySelector('.modal')
let $user =   document.querySelector('#user')
let $pass =   document.querySelector('#pass')
let $signin = document.querySelector('.signin')
let $close =  document.querySelector('.close')
let $submit = document.querySelector('.submit')
let $form =   document.querySelector('.getstarted')


// ****** UI CHANGES *******
// ****** EVENT LISTENERS *******
// Capture .signin click
$signin.addEventListener('click', event => { 
  // Change the display style to block for the .modal
  $modal.style.display = 'block'
})

// Capture .close click
$close.addEventListener('click', event => {
  // Change the display style to none for the .modal
  $modal.style.display = 'none'
})


// Capture #user focus
$user.addEventListener('focus', event => {
  // Remove .error class from #user
  $user.classList.remove('error')
})

// Capture #pass focus
$pass.addEventListener('focus', event => {
  // Remove .error class from #pass
  $pass.classList.remove('error')
})

// Capture form submit
$form.addEventListener('submit', event => { 
  
  event.preventDefault()  // Stop the form from submitting

  // Add .error class to #user
  $user.classList.add('error')

  // Add .error class to #pass
  $pass.classList.add('error')

})

