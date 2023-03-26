import { ServerUrl } from '@/config'
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const ChatComponent = ({children}) => {
  const [textMessage, setTextMessage] = useState("")
  const [isMessageBlockOpen, setIsMessageBlockOpen] = useState(false)
  const [allChats, setAllChats] = useState([])
  const ref = React.useRef();


  const messageSubmit = async (e) => {
    e.preventDefault()
    if (!textMessage) return
    setAllChats([...allChats, 
      {
        type: "client",
        message: textMessage
      }
    ])
    setTextMessage("")
    const res = await axios.post(`${ServerUrl}/chat/message/`, 
      {
        "credit_score": 700,
        "num_cards": 3,
        "question": textMessage
      },
      {
        headers: {
          authentication: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2F5YW4gc2FtYW50YSIsInVpZCI6ImRlZmF1bHQ9UHlkYW50aWNVbmRlZmluZWQgZGVmYXVsdF9mYWN0b3J5PTxjbGFzcyAnY3JlZGl0by5kYXRhYmFzZS5QeU9iamVjdElkJz4gYWxpYXM9J19pZCcgYWxpYXNfcHJpb3JpdHk9MiBleGNsdWRlPVRydWUgZXh0cmE9e30iLCJlbWFpbCI6InNheWFuc2FtYW50YS5jc2UyMDIwQG5zZWMuYWMuaW4iLCJleHAiOjE2ODAzODc2NTF9.U8bgLqXge774OkJ7LiCzgG6iQ-DuAGkY-PKes0qALic`
        }
      }
    )
    let newAllChats = [...allChats, 
      {
        type: "client",
        message: textMessage
      },
      {
        type: "server",
        message: res.data
      },
    ]
    setAllChats(newAllChats)
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [allChats])

  return (
    <>
        {children}
        <form onSubmit={(e) => messageSubmit(e)}>
        <Flex pos="fixed" bottom={2} left="50%" transform="translateX(-50%)" zIndex={3} onClick={() => setIsMessageBlockOpen(true)}>
            <Input color="white" value={textMessage} bg="#000" onChange={(e) => setTextMessage(e.target.value)} borderColor={"#777"} w="80vw" maxW="500px" placeholder='Ask your question...' />
            <Button bg="#000" p="10px" borderRadius={"10px"} color="white" border="1px solid #999" h="40px" onClick={messageSubmit} __css={{
              "&:hover": {
                bg: "#000"
              }
            }}>
              <AiOutlineSend />
            </Button>
        </Flex>
        </form>
        <Box w="100vw" h="100vh" bg="#00000099" pos="fixed" top="0" left="0" display={isMessageBlockOpen ? 'block' : 'none'} onClick={() => setIsMessageBlockOpen(false)}>
        </Box>
        <Box pos="fixed" transition="all 0.3s" bottom={isMessageBlockOpen ? "0" : "-80vh"}left="0" w="100vw" h="80vh" bg="#dddddd22" backdropFilter="blur(10px)" zIndex={2} color="white" pt="20px" pb="43px">
            <Box transition="all 0.3s" ref={ref} h="100%" w="calc(100vw-20px)" maxW="550px" margin="auto" overflowY={"auto"}>
              {allChats?.map((message, index) => {
                if (message.type === "server") {
                  return (
                    <Box bg="#888" maxW="400px" p="10px" borderRadius={"10px"} mb="20px" key={index}>
                      {message.message}
                    </Box>
                  )
                }
                return (
                <Box key={index} bg="#111" pos="relative" left={"100%"} transform="translateX(-100%)" mb="20px" maxW="400px" p="10px" borderRadius={"10px"}>
                  {message.message}
                </Box>
                )
              })}
            </Box>
        </Box>
    </>
  )
}

export default ChatComponent