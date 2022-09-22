function creatModal(){
    const bodyModal                = document.querySelector('body')
    const backgroundOpacity        = document.createElement('div')
    const formResetPassword        = document.createElement("form")
    const buttonClose              = document.createElement("div")
    const h3Title                  = document.createElement("h3")
    const buttonX                  = document.createElement("button")
    const paragrafoForm            = document.createElement("p")
    const labelEmail               = document.createElement("label")
    const inputEmail               = document.createElement("input")
    const labelNewPassword         = document.createElement("label")
    const inputNewPassword         = document.createElement("input")
    const labelNewPasswordConfirm  = document.createElement("label")
    const inputNewPasswordConfirm  = document.createElement("input")
    const divButtonSubmit          = document.createElement("div")
    const buttonSubmit             = document.createElement("button") 

    backgroundOpacity.classList = 'modal_wrapper'
    formResetPassword.classList = 'form_container'
    buttonClose.classList = 'button_close'
    h3Title.innerText = 'Reset password'
    buttonX.id = 'buton_close_id'
    buttonX.innerText = 'x'
    paragrafoForm.innerText = 'Enter your primary email below to reset your password'
    labelEmail.classList = 'email_label'
    labelEmail.innerText = 'E-mail'
    inputEmail.classList = 'email_input'
    inputEmail.placeholder = 'Type your e-mail here'
    labelNewPassword.classList = 'senha_label'
    labelNewPassword.innerText = 'New password'
    inputNewPassword.classList = 'senha_input'
    inputNewPassword.placeholder = 'Type your new password here'
    labelNewPasswordConfirm.classList = 'senha_label'
    labelNewPasswordConfirm.innerText = 'Confirm new password'
    inputNewPasswordConfirm.classList = 'senha_input'
    inputNewPasswordConfirm.placeholder = 'Type your new password again'
    divButtonSubmit.classList = 'div_button_submit'
    buttonSubmit.classList = 'button_submit'
    buttonSubmit.innerText = 'Submit'

    buttonClose.append(h3Title, buttonX);
    divButtonSubmit.append(buttonSubmit);
    formResetPassword.append(buttonClose, paragrafoForm, labelEmail, inputEmail, labelNewPassword, inputNewPassword, labelNewPasswordConfirm, inputNewPasswordConfirm, divButtonSubmit);
    backgroundOpacity.append(formResetPassword)
    bodyModal.append(backgroundOpacity)

    return bodyModal
}

function modalOpen(){
    const buttonModal = document.getElementById('forgot_password')

    buttonModal.addEventListener('click', () => {
        creatModal()
        modalClose()
    }) 
}
modalOpen()

function modalClose(){
    const buttonClose = document.getElementById('buton_close_id')
    const modalWrapperConst = document.getElementsByClassName('.modal_wrapper')

    buttonClose.addEventListener('click', () => {
        console.log("oi")
        modalWrapperConst.remove()
    }) 
}
