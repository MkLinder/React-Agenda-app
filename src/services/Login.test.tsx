import {Login} from './Login'

describe('login', () => {

    const mockEmail = 'mike@email.com'
    const mockAlert =jest.fn()
    window.alert = mockAlert
    it('Deve exibir um alert com boas vindas', () => {
        Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}!`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        Login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })
})