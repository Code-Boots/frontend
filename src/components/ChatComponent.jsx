import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const ChatComponent = ({children}) => {
  return (
    <>
        {children}
        <Box pos="fixed" bottom={0} left="50%" transform="translateX(-50%)">
            <Input borderColor={"#aaa"} w="400px" placeholder='Ask your question...' bg="white" maxW="calc(100vw-30px)" />
            <Button h="40px"><AiOutlineSend /></Button>
        </Box>
    </>
  )
}

export default ChatComponent