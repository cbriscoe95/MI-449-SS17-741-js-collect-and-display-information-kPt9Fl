var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var renderedText = document.getElementById('rendered-html')
var rawText = document.getElementById('raw-html')
var descriptionText = document.getElementById('description')
var emailText = document.getElementById('email')
var phoneText = document.getElementById('phone')

firstName.addEventListener('input', function () {
  var first = firstName.value
  var last = lastName.value

  renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>'
  rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>'
})

lastName.addEventListener('input', function () {
  var first = firstName.value
  var last = lastName.value

  renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>'
  rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>'
})

descriptionText.addEventListener('input', function () {
  var first = firstName.value
  var last = lastName.value
  var description = descriptionText.value

  renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>'
  rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + description + '</p>'
})

// Need to add rendered and raw html for email and phone: 2/14 12:51
emailText.addEventListener('input', function () {
  var first = firstName.value
  var last = lastName.value
  var description = descriptionText.value
  var email = emailText.value

  renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
  'if you\'re interested in a date, you can email me at ' + email

  rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
  'if you\'re interested in a date, you can email me at ' + email
})

phoneText.addEventListener('input', function () {
  var first = firstName.value
  var last = lastName.value
  var description = descriptionText.value
  var email = emailText.value
  var phone = phoneText.value

  renderedText.innerHTML = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
  'if you\'re interested in a date, you can email me at ' + email + ' or give me a call at ' + phone

  rawText.textContent = '<h1>Hi, my name is ' + first + ' ' + last + '</h1>' + '<p>' + description + '</p>' +
  'if you\'re interested in a date, you can email me at ' + email + ' or give me a call at ' + phone
})
