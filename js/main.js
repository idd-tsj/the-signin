// ****** DOM REFERENCES ******
let $modal =  document.querySelector('.modal')
let $user =   document.querySelector('#user')
let $pass =   document.querySelector('#pass')
let $signin = document.querySelector('.signin')
let $close =  document.querySelector('.close')
let $submit = document.querySelector('.submit')


// ****** UI MODIFICATIONS ******
// Display the .modal
$modal.style.display = `block`

// Remove the .modal
$modal.style.display = `none`

// Add .error to #user
$user.classList.add(`error`)

// Add .error to #pass
$pass.classList.add(`error`)

// Remove .error from #user
$user.classList.remove(`error`)

// Remove .error from #pass
$pass.classList.remove(`error`)



// ****** INTERACTIVE EVENT LISTENERS ******
// Capture the .signin click
// Capture the .close click
// Capture the .submit click
// Capture the focus of #user
// Capture the focus of #pass
