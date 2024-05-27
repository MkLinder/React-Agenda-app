const conta = {
    email: 'usuario@email.com',
    password: '123456',
    name: 'Usuario novo',
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})