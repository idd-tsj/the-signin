// const $ = (selector) => {
//   return document.querySelector(selector)
// }


// let $modal = $('.modal')



// DOM (document object model) references
let $modal = document.querySelector('.modal')
let $signin = document.querySelector('.signin')
let $close = document.querySelector('.close')
let $user = document.querySelector('#user')
let $pass = document.querySelector('#pass')
let $submit = document.querySelector('.submit')


// .modal to show
$modal.style.display = `block`

// .modal to hide
$modal.style.display = `none`

// add class .error to #user
$user.classList.add(`error`)

// add class .error to #pass
$pass.classList.add(`error`)

// remove class .error to #user
$user.classList.remove(`error`)

// remove class .error to #pass
$pass.classList.remove(`error`)


// clickable .signin
$signin.addEventListener('click', event => { console.log('click!') })

// clickable .close
$close.addEventListener('click', event => { console.log('click!') })

// clickable .submit
$submit.addEventListener('click', event => { console.log('click!') })

// focus #user
$user.addEventListener('focus', event => { console.log('focus!') })

// focus #pass
$pass.addEventListener('focus', event => { console.log('focus!') })
