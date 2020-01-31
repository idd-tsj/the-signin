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
    let $form = document.querySelection('.getstarted');
    
        // You can go to your website>inspect and test each individual element to make sure that no errors show up and that they are in fact referring to the element that you want. 
    
    // ***** UI CHANGES *****
        // NOTE: if you hadn't preselected the element it would look like this < document.querySelector('.modal').style.display = 'block';
    $modal.getElementsByClassName.display = ('block')
    $modal.getElementsByClassName.display = ('none')
    $user.classList.add('error')
    $pass.classList.add('error')
    $user.classList.remove('error')
    $pass.classList.remove('error')
    
    // ***** EVENET LISTENERS *****
        // ele.addEventListener('action', event => {outcome});
    // capture .signin click
    $signin.addEventListener('click', event => { $modal.style.display = ('block')});
    // capture .close click
    $close.addEventListener('click', event => { $modal.style.display = ('none')});
    // capture. submit click
    $form.addEventListener('submit', event => {
        event.preventDefault() //stop from from submitting
        $user.classList.add('error')
        $pass.classList.add('error')
    });
    // capture #user focus
    $user.addEventListener('foucs', event => { 
        $user.classList.remove('error')});
    
    // capture # pass focus
    $pass.addEventListener('focus', event => {
        $pass.classList.remove('error')});
    
    
    
        //truncate spaces
        //if/else statement
        //if both feilds are valid remove modal remove sign in, add user's name to hello and make hello smaller 
    