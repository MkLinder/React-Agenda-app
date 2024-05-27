import {Login} from './Login'

describe('login', () => {

    const mockEmail = 'mike@email.com'
    const mockPass = '123456'

    it('Deve redirecionar à página Home, caso o email seja válido', async () => {
        const response = await Login(mockEmail, mockPass)
        expect(response).toBeTruthy()
    })

    it('Não deve redirecionar à página e deve mostrar um aviso de email ou senha inválido.', async () => {
        const response = await Login('qualquer@email.com', '1234')
        expect(response).toBeFalsy()
    })
})