import { Box, Center, Text} from "@chakra-ui/react"
import { LoginBox } from "../components/Login"
import { useContext, useState } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { Login } from "../services/Login"

export const LoginPage = () => {
    const [ email, setEmail ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await Login(email)
    }

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