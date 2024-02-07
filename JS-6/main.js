// console.log(document.forms[0])
// console.log(document.forms.registration)
// let form = document.forms.registration

// console.log(form.elements[1])
// console.log(form.elements.email)
// let elem = form.elements.email

// for (let i of form.elements){
//     console.log(i)
// }

// console.log(elem.form)
// console.log(form.elements[0].value)
// console.log(form.elements[2].classList[0])
// console.log(form.elements[5].checked)
// console.log(form.elements.gender[0].checked)
// let select = form.elements[3]
// // console.log(form.elements[3].options[2].selected = true)
// // select.selectedIndex = 1
// // select.value = 'Kazan'
// let option = new Option('Novgorod', 'Novgorod')
// select[select.option.length] = option
// select[select.option.length] = option

let form = document.forms.registration;
let email = form.elements[1];
email.onblur = () => {
    if (!email.value.includes('@')){
        let error = document.querySelector('.error')
        error.innerHTML = 'Email error'
    }
}
email.ondlur = () => {
    let error = document.querySelector('.error')
    error.innerHTML = ''
}
// email.addEventListener('focus', () => console.log('focus'))
// email.addEventListener('blur', () => console.log('blur'))
// form.addEventListener('focusin', () => console.log('focus'))
// form.addEventListener('focusout', () => console.log('blur'))
email.addEventListener('input', () => console.log(email.value))

function subm(event){
    event.preventDefault();
    console.log('С успешной регистрацией!')
    alert('Happy registration!')
}