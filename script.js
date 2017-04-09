var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var renderedText = document.getElementById('rendered-html')
var rawText = document.getElementById('raw-html')
var description = document.getElementById('description')
var email = document.getElementById('email')
var phone = document.getElementById('phone')

function profile () {
  var profileText = '<h1>Hi, my name is ' + firstName.value + ' ' + lastName.value + '</h1>' + '<p>' +
  description.value + '</p>' + 'if you\'re interested in a date, you can email me at ' + '<a href="mailto:' +
  email.value + '" target="_blank">' + email.value + '</a>' + ' or give me a call at ' + '<a href="tel:' +
  phone.value + '" target="_blank">' + phone.value + '</a>'

  renderedText.innerHTML = profileText
  rawText.textContent = profileText
}

// Event Listeners
firstName.addEventListener('input', profile)
lastName.addEventListener('input', profile)
description.addEventListener('input', profile)
email.addEventListener('input', profile)
phone.addEventListener('input', profile)
