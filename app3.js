//Getting the elements
const email = document.querySelector('#email')
const password =  document.querySelector('#password')
let corrret = true
//Form validation

   function Valid(){
      
        // Getting the values
    const emailValue = email.value
    const passwordValue = password.value
    // Validation
    if(emailValue === ''){
     // Show email error
     showError('Please enter your email', 'error')
     valid = false
    
    }if(passwordValue === ''){
        // Show password error
        showPasswordError('Please enter your password', 'errors')
        valid = false   
        //Passowrd minimun length
       }else if(passwordValue.length <= 6){
        showLengthError('Password must be more than 6 characters','errorss')
        valid = false
       }else if(passwordValue.length > 6){
         valid = true
       }
    return valid
     function showError(message, className){
         //Create an element
         const div = document.createElement('div') 
         div.className = `${className}`
         div.appendChild(document.createTextNode(message))
         const emailHead =  document.querySelector('.email')
         const emailDowm = document.querySelector('.emails')
         emailHead.insertBefore(div, emailDowm)
         //set time out
         setTimeout(() => {
             document.querySelector('.error').remove()
         }, 3000)
     }
     function showPasswordError(message, className){
         //Create an element
         const div = document.createElement('div') 
         div.className = `${className}`
         div.appendChild(document.createTextNode(message))
         const emailHead =  document.querySelector('.pass')
         const emailDowm = document.querySelector('.passs')
         emailHead.insertBefore(div, emailDowm)
         //set time out
         setTimeout(() => {
             document.querySelector('.errors').remove()
         }, 3000)
        }
        function showLengthError(message, className){
            //Create an element
            const div = document.createElement('div') 
            div.className = `${className}`
            div.appendChild(document.createTextNode(message))
            const emailHead =  document.querySelector('.pass')
            const emailDowm = document.querySelector('.passs')
            emailHead.insertBefore(div, emailDowm)
            //set time out
            setTimeout(() => {
                document.querySelector('.errorss').remove()
            }, 3000)
           }
   }
   
   
        