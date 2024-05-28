import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import '@fontsource/khand'
import '@fontsource/istok-web'
import { useContext } from "react"
import { AppContext, UserContext, UserContextProvider } from "./AppContext"
import { useNavigate } from "react-router-dom"
import { Content } from "./HomeHeaderContent"


export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Flex
            minWidth='100%'
            padding='20px'
            backgroundColor='transparent'
            justifyContent='end'
        >
            { isLoggedIn && (
                <Box width='60%'>
                    <Content/>
                </Box>
            ) }
            <Box width='40%'>
                <Flex
                    flexDirection='column'
                >
                        <Text 
                            fontSize='50px'
                            color='#A296B3'
                            fontFamily='khand, sans-serif'
                            fontWeight='700'
                            textAlign='right'
                            alignItems='center'
                        >
                            Agenda.me
                        </Text>
                </Flex>
            </Box>
        </Flex>
    )
}