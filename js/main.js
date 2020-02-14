// *** THE GAME PLAN ****
    // ***** EVENET LISTENERS *****
    // capture .signin click
    // capture .close click
    // capture. submit click
    // capture #user focus
    // capture # pass focus

    // ***** UI CHANGES *****
    //change the display style to clock for the .model
    //change the display style to none for the .modal
    //add .error class to #user
    // Add. error class to #pass
    //remove .error class from #user
    //remove .error class from #pass


// ** STORE ALL DOM REFERENCE **
    // Note: $ sign indicates that the element is UI it exists in the DOM (document object model)
    // This section is like a javascript misenplace

    let $modal = document.querySelector('.modal');
    let $user = document.querySelector('#user');
    let $pass = document.querySelector('#pass');
    let $signin = document.querySelector('.signin');
    let $close = document.querySelector('.close');
    let $click = document.querySelector('.click');
    let $submit = document.querySelector('.submit');
    let $form = document.querySelector('.getstarted');
    let $hello = document.querySelector('.hello');
    
        // You can go to your website>inspect and test each individual element to make sure that no errors show up and that they are in fact referring to the element that you want. 
    
    // ***** UI CHANGES *****
        // NOTE: if you hadn't preselected the element it would look like this < document.querySelector('.modal').style.display = 'block';
    $modal.getElementsByClassName.display = ('block')
    $modal.getElementsByClassName.display = ('none')
    $user.classList.add('error')
    $pass.classList.add('error')
    $user.classList.remove('error')
    $pass.classList.remove('error')
    $signin.classList.display = ('none')

    
    // ***** EVENET LISTENERS *****
        // ele.addEventListener('action', event => {outcome});
    // capture .signin click
    $signin.addEventListener('click', event => { 
        $modal.style.display = ('block')
    });
    // capture .close click
    $close.addEventListener('click', event => { 
        $modal.style.display = ('none')
    });
    // capture. submit click
    $form.addEventListener('submit', event => {
        event.preventDefault() //stop from from submitting
        $user.classList.add('error')
        $pass.classList.add('error')
    });
    $user.addEventListener('foucs', event => { 
        $user.classList.remove('error')
    });
    $pass.addEventListener('focus', event => {
        $pass.classList.remove('error')
    });
        


// validation prototype

//variables
    //var 
//switch

if $user.textContent = "" {
    $form.addEventListener('submit', event => {
        event.preventDefault() //stop from from submitting
        $user.classList.add('error')
        $pass.classList.add('error')
    } else {
        $modal.style.display = ('none')
        $user.style.display = ('none')
        $hello.style.font = (' 400 4em Oswald' )
        $hello.textContent ('Welcome, ${.user}')
    }
}


    // 2. On submit, only add the `.error` class to the elements that have a `value` of "" (blank, meaning any text will prevent an error)What happens if the user just adding spaces to the field? Find a function that will trim off the white spaces in a field to validate it. <<<truncate spaces>>>>

    //If user and password are not blank close the modal 
    

    //3. Prototype a validation by checking the two fields on `submit`. If both are "valid" (not blank), close the `#modal`, remove the `#signin` and append `textContent` to the `#hello` heading so it reads "Welcome, [USERNAME]", in a font that's half the current size  Consider the various ways we could validate both fields, including the use of a boolean `var` as a switch

    //4. Try validating a field by adding/removing `.error` immediately after the cursor leaves one of the individual `<input>` (rather than on submit)- Consider this can be added individually to elements, but do so by writing one event listener/callback function using a loop

    // 5. Allow the user to click the `#modal` to close itself - Consider what happens when two elements that are overlapping are both waiting for a click: Click events will "bubble" (propagate) up the DOM tree. How could we stop an event from triggering on it's parents? - This will likely require a bit of web searching to solve


        //if/else statement
        //if both feilds are valid remove modal remove sign in, add user's name to hello and make hello smaller 
    