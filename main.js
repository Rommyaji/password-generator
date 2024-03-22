let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')

const generatePassword = (length) => {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const number = '1234567890'
    const symbol = '~!@#$%^&*()-_=+/|\|]}[{;:/?.><'

    const data = lowerAlphabet + upperAlphabet + number + symbol
    let generator = ''

    for(let i = 0; i < length; i++) {
        generator += data[(Math.floor(Math.random() * data.length))]
    }

    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}


const savePassword = () => {
    password.select()
    password.setSelectionRange(0, 9999)

    navigator.clipboard.writeText(password.value)
    alert('Password copied to clipboard')
}