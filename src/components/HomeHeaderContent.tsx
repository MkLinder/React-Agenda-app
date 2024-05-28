import {  
            Flex, 
            Img, 
            Link, 
            SimpleGrid, 
            Text 
        } from "@chakra-ui/react"
import { ButtonMenu } from "./ButtonMenu"

export const Content = () => {

    return (
        <Flex justifyContent='space-between' height='100%'>
            <>
                <Flex alignItems='baseline'>
                    <Link>
                        <Img src="./src/utils/settings-icon-128px.png"/>
                    </Link>
                </Flex>

                <Flex alignItems='center'>
                    <Text>
                        `Olá, ${}`
                    </Text>
                </Flex>

                <SimpleGrid
                    columns={3}
                    alignItems='end'
                >
                    <ButtonMenu>Botão 1</ButtonMenu>
                    <ButtonMenu>Botão 2</ButtonMenu>
                    <ButtonMenu>Botão 3</ButtonMenu>
                </SimpleGrid>
            </>
        </Flex>
    )
}