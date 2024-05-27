import { Box } from "@chakra-ui/react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = ( { children }: any) => {
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