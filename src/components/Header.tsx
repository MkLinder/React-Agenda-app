import { Box, Flex, Text } from "@chakra-ui/react"
import '@fontsource/khand'
import '@fontsource/istok-web'


export const Header = () => {
    return (
        <Box
            minWidth='100vw'
            height='200px'
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

                <Box
                    width='100%'
                >
                    <Text
                        fontSize='30px'
                        color='#454545'
                        fontFamily='istok-web, sans-serif'
                        fontWeight='bold'
                        textAlign='center'
                    >
                        Bem vindo(a)!
                    </Text>
                </Box>

                <Box
                    width='100%'
                    marginTop='20px'
                >
                    <Text
                            fontSize='26px'
                            color='#000000'
                            fontFamily='istok-web, sans-serif'
                            fontWeight='regular'
                            textAlign='center'
                        >
                            Faça o login
                        </Text>
                </Box>
            </Flex>
        </Box>
    )
}