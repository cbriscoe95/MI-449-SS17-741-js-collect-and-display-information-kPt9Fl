var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var renderedText = document.getElementById('rendered-html')
var rawText = document.getElementById('raw-html')
var descriptionText = document.getElementById('description')
var emailText = document.getElementById('email')
var phoneText = document.getElementById('phone')

function profile () {
  // First name
  firstName.addEventListener('input', function () {
    var first = firstName.value
    var last = lastName.value
    var description = descriptionText.value
    var email = emailText.value
    var phone = phoneText.value

    renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'

    rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'
  })
  // Last Name
  lastName.addEventListener('input', function () {
    var first = firstName.value
    var last = lastName.value
    var description = descriptionText.value
    var email = emailText.value
    var phone = phoneText.value

    renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'

    rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'
  })
  //  Description
  descriptionText.addEventListener('input', function () {
    var first = firstName.value
    var last = lastName.value
    var description = descriptionText.value
    var email = emailText.value
    var phone = phoneText.value

    renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'

    rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'
  })
  //  Email
  emailText.addEventListener('input', function () {
    var first = firstName.value
    var last = lastName.value
    var description = descriptionText.value
    var email = emailText.value
    var phone = phoneText.value

    renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'

    rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'
  })
  //  Phone
  phoneText.addEventListener('input', function () {
    var first = firstName.value
    var last = lastName.value
    var description = descriptionText.value
    var email = emailText.value
    var phone = phoneText.value

    renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'

    rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
    'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' +
    email + '</a>' + ' or give me a call at ' + '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>'
  })
}
profile()
