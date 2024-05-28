import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Content } from "./HomeHeaderContent"

export const Layout = ( { children }: any) => {
    const content = Content

    return (
        <Box
            minHeight='100vh'
            bgGradient='radial(#C3B4D7, #ECD9EC)'
        >
            <Header/>
            { children }
            <Footer/>
        </Box>
    )
}