import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const ChatComponent = ({children}) => {
    const [isMessageBlockOpen, setIsMessageBlockOpen] = useState(false)
  return (
    <>
        {children}
        <Flex pos="fixed" bottom={0} left="50%" transform="translateX(-50%)" zIndex={3} onClick={() => setIsMessageBlockOpen(true)}>
            <Input borderColor={"#aaa"} w="500px" placeholder='Ask your question...' bg="white" maxW="calc(100vw-30px)" />
            <Button h="40px"><AiOutlineSend /></Button>
        </Flex>
        <Box w="100vw" h="100vh" bg="#00000099" pos="fixed" top="0" left="0" display={isMessageBlockOpen ? 'block' : 'none'} onClick={() => setIsMessageBlockOpen(false)}>
        </Box>
        <Box pos="fixed" transition="all 0.3s" bottom={isMessageBlockOpen ? "0" : "-80vh"}left="0" w="100vw" h="80vh" bg="#222" zIndex={2} color="white" pt="20px" pb="43px">
            <Box h="100%" w="calc(100vw-20px)" maxW="550px" margin="auto" overflowY={"scroll"}>
                <Box bg="#111" maxW="400px" p="10px" borderRadius={"10px"} mb="20px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit reprehenderit, odio voluptatem ut sunt aspernatur delectus illo vel unde voluptate facilis repellendus, quas pariatur! Eius molestiae blanditiis fuga doloremque.
                </Box>
                <Box bg="#333" pos="relative" left={"100%"} transform="translateX(-100%)" mb="20px" maxW="400px" p="10px" borderRadius={"10px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit reprehenderit, odio voluptatem ut sunt aspernatur delectus illo vel unde voluptate facilis repellendus, quas pariatur! Eius molestiae blanditiis fuga doloremque.
                </Box>
                <Box bg="#111" maxW="400px" p="10px" borderRadius={"10px"} mb="20px">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, earum.
                </Box>
                <Box bg="#333" pos="relative" left={"100%"} transform="translateX(-100%)" mb="20px" maxW="400px" p="10px" borderRadius={"10px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit reprehenderit, odio voluptatem ut sunt aspernatur delectus illo vel unde voluptate facilis repellendus, quas pariatur! Eius molestiae blanditiis fuga doloremque.
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default ChatComponent