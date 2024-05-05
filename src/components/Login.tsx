import {
    Box,
    Button,
    Flex,
    Input,
    Link,
    Text
} from '@chakra-ui/react'
import '@fontsource/istok-web'

export const LoginBox = () => {
    return (
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
    )
}