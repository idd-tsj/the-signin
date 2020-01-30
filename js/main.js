// DOM (document object model) references
let $modal = document.querySelector('.modal')
let $signin = document.querySelector('.signin')
let $close = document.querySelector('.close')
let $user = document.querySelector('#user')
let $pass = document.querySelector('#pass')
let $submit = document.querySelector('.submit')
let $form = document.querySelector('.getstarted')



// clickable .signin
$signin.addEventListener('click', event => {
  // .modal to show
  $modal.style.display = `block`
})

// clickable .close
$modal.addEventListener('click', event => { 
  // .modal to hide
  $modal.style.display = `none`
})


// focus #user
$user.addEventListener('focus', event => {
  // remove class .error to #user
  $user.classList.remove(`error`)
})

// focus #pass
$pass.addEventListener('focus', event => {
  // remove class .error to #pass
  $pass.classList.remove(`error`)
})


$form.addEventListener('submit', event => {
  event.preventDefault()

  // add class .error to #user
  $user.classList.add(`error`)

  // add class .error to #pass
  $pass.classList.add(`error`)
})

/* 
if (   ) {

}


*/