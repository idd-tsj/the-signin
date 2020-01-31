// ****** STORE ALL DOM REFERENCES ******
let $modal =  document.querySelector('.modal')
let $user =   document.querySelector('#user')
let $pass =   document.querySelector('#pass')
let $signin = document.querySelector('.signin')
let $close =  document.querySelector('.close')
let $submit = document.querySelector('.submit')

// ****** UI CHANGES *******
// Change the display style to block for the .modal
$modal.style.display = 'block'

// Change the display style to none for the .modal
$modal.style.display = 'none'

// Add .error class to #user
$user.classList.add('error')

// Add .error class to #pass
$pass.classList.add('error')

// Remove .error class from #user
$user.classList.remove('error')

// Remove .error class from #pass
$pass.classList.remove('error')


// ****** EVENT LISTENERS *******
// Capture .signin click
$signin.addEventListener('click', event => { console.log('click') })

// Capture .close click
$close.addEventListener('click', event => { console.log('click') })

// Capture .submit click
$submit.addEventListener('click', event => { console.log('click') })

// Capture #user focus
$user.addEventListener('focus', event => { console.log('focus') })

// Capture #pass focus
$pass.addEventListener('focus', event => { console.log('focus') })
