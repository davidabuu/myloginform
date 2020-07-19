//Getting the UI
const email = document.querySelector('.input')
let valid = true

function Validation(){
    const emailValue = email.value
    //To confirm the email
    if(emailValue === ''){
      //show Error
      showError('Please enter your email', 'error')
      return false
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
}