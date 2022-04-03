const filterChars = (string) => {
  return string.replace(/[a-zA-Z]/g, '')
}

const form = document.getElementById('pay-form')

form.onsubmit = (event) => {
  event.preventDefault()
  const { card, expire, cvc, name } = event.currentTarget
  const cardNumberFilled = card.value.length === 19
  const expireDateFilled = expire.value.length === 5
  const cvcFilled = cvc.value.length === 3
  if (cardNumberFilled && expireDateFilled && cvcFilled) {
    const image = document.createElement('img')
    image.src = 'https://sun9-48.userapi.com/impg/qEkWW2zflpMxzfT8GX4xqMJzAGU5EydUHSDg8A/EFFEcMku-oI.jpg?size=648x648&quality=96&sign=ab7eba79b3c081050564d0a3faeae0cc&type=album'
    document.body.append(image)
    return
  }
  alert('заполните данные карты')
}

const cardNumber = document.getElementById('card-number')

cardNumber.oninput = (event) => {
  const value = filterChars(event.target.value)
  const groupNumbersBy4 = value.replace(/ /g, '').match(/.{1,4}/g) || []

  cardNumber.value = groupNumbersBy4.join(' ')
}

const expireDate = document.getElementById('expire-date')

expireDate.oninput = (event) => {
  const value = filterChars(event.target.value)
  const groupNumbersBy2 = value.replace('/', '').match(/.{1,2}/g) || []

  expireDate.value = groupNumbersBy2.join('/')
}

const cvc = document.getElementById('cvc')

cvc.oninput = (event) => {
  const value = filterChars(event.target.value)
  cvc.value = value
}
