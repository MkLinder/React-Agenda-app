export interface Conta {
    id: string,
    name: string,
    gender: string,
    carrer: string,
    email: string,
    password: string
}

const conta:Conta = {
    email: 'usuario@email.com',
    password: '123456',
    name: 'Rafaela',
    gender: 'f',
    carrer: 'Dra.',
    id: '1'
}

export const api = new Promise<Conta>((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})