import { Box, Flex, Text } from "@chakra-ui/react"
import '@fontsource/khand'
import '@fontsource/istok-web'
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useNavigate } from "react-router-dom"


export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext) 
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Box
            minWidth='100vw'
            backgroundColor='transparent'
        >
            <Flex
                flexDirection='column'
            >
                <Box
                    width='100%'
                    padding='20px 60px 0 0'
                >
                    <Text 
                        fontSize='50px'
                        color='#A296B3'
                        fontFamily='khand, sans-serif'
                        fontWeight='700'
                        textAlign='right'
                    >
                        Agenda.me
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}