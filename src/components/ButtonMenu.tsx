import { Button } from "@chakra-ui/react"

export const ButtonMenu = ({ children }: any) => {
   
    return (
        <Button 
            width='100px'
            fontSize='18px'
            marginRight='10px'
            backgroundColor='#735799'
            color='#FFFFFF'
        >
            { children }
        </Button>
    )
}

export default ButtonMenu