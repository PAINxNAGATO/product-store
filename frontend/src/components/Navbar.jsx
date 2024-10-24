import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { PlusSquareIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW ={"1140px"} px={4}>
        <Flex
        h ={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir ={{
            base: "column",
            sm: "row"
        }}
        >
        <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
                <HStack sapcing ={2} alignItems = {"center"}>
                    <Link to={"/create"} >
                        <Button bg = {useColorModeValue("blue.400","gray.900")} _hover={{
                            bg: useColorModeValue("blue.100", "gray.700")
                        }}>
                            <PlusSquareIcon fontSize={20}/>
                        </Button>
                    </Link>
                    <Button onClick = {toggleColorMode} bg = {useColorModeValue("blue.500","gray.900")} _hover={{
                            bg: useColorModeValue("blue.100", "gray.700")
                        }}>
                        {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                    </Button>
                </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar