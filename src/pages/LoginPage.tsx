import { Box, Center, Text} from "@chakra-ui/react"
import { LoginBox } from "../components/Login"

export const LoginPage = () => {
    return (
        <>
            <Box
                width='100%'
            >
                <Text
                    fontSize='30px'
                    color='#454545'
                    fontFamily='Istok Web, sans-serif'
                    fontWeight='bold'
                    textAlign='center'
                >
                    Bem vindo(a)!
                </Text>
            </Box>

            <Box
                width='100%'
                marginTop='10px'
            >
                <Text
                        fontSize='26px'
                        color='#454545'
                        fontFamily='Istok Web, sans-serif'
                        textAlign='center'
                    >
                        Faça o login
                    </Text>
            </Box>

            <LoginBox/>
        </>
    )
}