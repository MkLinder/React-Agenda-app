import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Link,
    Text
} from '@chakra-ui/react'
import '@fontsource/istok-web'
import { useContext, useState } from 'react'
import { Login } from '../services/Login'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'

export const LoginBox = () => {

    const [ email, setEmail ] = useState<string>('')
    const [pass, setPass] = useState('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    


    const validateUser = async (email: string,password:string) => {
        const loggedIn = await Login(email, password)

        if (!loggedIn){
            return alert('Email ou senha inválido!')
        }
        
        setIsLoggedIn(true)
        navigate(`/home/1`)
    }

    
    return (
        <Center>
            <Box
            width='40vw'
            height='310px'
            backgroundColor='rgba(255, 255, 255, 0.7)'
            borderRadius='22px'
            padding='20px'
            marginTop='20px'
            boxShadow='0 2px 4px rgba(70, 70, 70, 0.25)'
            >
                <Flex
                    flexDirection='column'
                    alignItems='center'
                >
                    <Input 
                        type='email' 
                        placeholder='usuário'
                        _placeholder={{color: '#C7C7C7', paddingLeft:'10px'}}
                        borderRadius='20px'
                        width='70%'
                        marginTop='30px'
                        bgColor='#ffffff'
                        boxShadow='inset 0 0 3px rgba(0, 0, 0, 0.25)'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        placeholder='senha'
                        _placeholder={{
                        color: '#C7C7C7', 
                        paddingLeft:'10px'
                        }}
                        borderRadius='20px'
                        width='70%'
                        marginTop='30px'
                        bgColor='#ffffff'
                        boxShadow='inset 0 0 3px rgba(0, 0, 0, 0.25)'
                        value={pass}
                        onChange={(event) => setPass(event.target.value)}
                    />

                    <Button
                        marginTop='50px'
                        padding='0 50px'
                        backgroundColor='#735799'
                        borderRadius='20px'
                        boxShadow='inset 0 0 4px rgba(255, 255, 255, 0.25), 0 0 2px rgba(0, 0, 0, .25)'
                        fontFamily='Istok Web, sans-serif'
                        fontWeight='600'
                        color='#ffffff'
                        _hover={{
                            bg: 'rgba(115, 87, 153, .7)',
                            color:'#735799',
                            fontWeight:'700', 
                            boxShadow: '0 0 5px rgba(115, 87, 153, 1)',
                            transition: '.5s'
                        }}
                        onClick={() => validateUser(email, pass)}
                    >
                        ENTRAR
                    </Button>
                    <Box
                        marginTop='10px'
                    >
                        <Text
                            fontSize='14px'
                            color='#454545'
                            fontFamily='Istok Web, sans-serif'
                        >
                            Não é cadastrado?
                        </Text>
                        <Link
                            _hover={{
                                textDecoration:'underline #249ADD'
                            }}
                        >
                            <Text
                                fontSize='14px'
                                fontFamily='Istok Web, sans-serif'
                                textAlign='center'
                                color='#249ADD'
                            >
                                Criar conta
                            </Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}