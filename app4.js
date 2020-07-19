// Getting the UI elements
const password = document.querySelector('#secret')
const confirm = document.querySelector('#confirm')
// Adding the event listeners
const button = document.querySelector('.forms')
button.addEventListener('submit', (e) => {
    e.preventDefault()
    // Getting the Elements values
    const passwordValue = password.value
    const confirmValue = confirm.value
    //Validation
    if(passwordValue === ''){
      //Show Error
      showError('Please your password is required', 'error')
    }else if(passwordValue.length <= 6){
        showLenghtError('Password must be more than 6 characters', 'errorss')
    }
     else if(confirmValue !== passwordValue  ){
        showConfirmError('Please the password do not match', 'errrr')

    }else if(confirmValue !== '' & confirmValue === passwordValue){
        showSuccess('Your password has been reset', 'success')
        // Clear Fields
        clearFields()
    }
    //Show error function
    function showError(message, className){
         //Create an element
         const div = document.createElement('div') 
         div.className = `${className}`
         div.appendChild(document.createTextNode(message))
         const emailHead =  document.querySelector('.sece')
         const emailDowm = document.querySelector('.sec')
         emailHead.insertBefore(div, emailDowm)
         //set time out
         setTimeout(() => {
             document.querySelector('.error').remove()
         }, 3000)
    }
    //Show length error
    function showLenghtError(message, className){
        //Create an element
        const div = document.createElement('div') 
        div.className = `${className}`
        div.appendChild(document.createTextNode(message))
        const emailHead =  document.querySelector('.sece')
        const emailDowm = document.querySelector('.sec')
        emailHead.insertBefore(div, emailDowm)
        //set time out
        setTimeout(() => {
            document.querySelector('.errorss').remove()
        }, 3000)
    }
    function showConfirmError(message, className){
        //Create an element
        const div = document.createElement('div') 
        div.className = `${className}`
        div.appendChild(document.createTextNode(message))
        const emailHead =  document.querySelector('.con')
        const emailDowm = document.querySelector('.conf')
        emailHead.insertBefore(div, emailDowm)
        //set time out
        setTimeout(() => {
            document.querySelector('.errrr').remove()
        }, 3000)
    }
    // Show success
    function showSuccess(message, className){
         //Create an element
         const div = document.createElement('div') 
         div.className = `${className}`
         div.appendChild(document.createTextNode(message))
         const emailHead =  document.querySelector('.reset')
         const emailDowm = document.querySelector('.sup')
         emailHead.insertBefore(div, emailDowm)
         //set time out
         setTimeout(() => {
             document.querySelector('.success').remove()
         }, 3000)
    }
    // clear fields
    function clearFields(){
        document.querySelector('#secret').value = ''
        document.querySelector('#confirm').value = ''
    }

})