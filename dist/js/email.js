console.log('It works')

$(document).ready(function () {

    $('.submit').click(function (event) {
        console.log('Clicked button')

        var firstName = $('.firstName').val()
        var lastName = $('.lastName').val()
        var email = $('.email').val()
        var phone = $('.phone').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(firstName.length > 2 ) {
            statusElm.append('<div>First Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>First Name is not valid</div>')
        }

        if(lastName.length > 2 ) {
            statusElm.append('<div>Last Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Last Name is not valid</div>')
        }

        if(phone.length > 2 ) {
            statusElm.append('<div>Phone is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Phone is not valid</div>')
        }

        if(message.length > 20 ) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }

    })
})