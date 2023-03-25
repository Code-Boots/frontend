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
    setAllChats([...allChats, 
      {
        type: "client",
        message: textMessage
      }
    ])
    setTextMessage("")
    const res = await axios.post("https://credito-backend.onrender.com/chat/message/", 
      {
        "credit_score": 0,
        "num_cards": 0,
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

  const serverSideTextFetcher = async () => {
    setTextMessage("")
    const res = await axios.post("https://credito-backend.onrender.com/chat/message/", 
      {
        "credit_score": 0,
        "num_cards": 0,
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
        <Flex pos="fixed" bottom={0} left="50%" transform="translateX(-50%)" zIndex={3} onClick={() => setIsMessageBlockOpen(true)}>
            <Input value={textMessage} onChange={(e) => setTextMessage(e.target.value)} borderColor={"#aaa"} w="500px" placeholder='Ask your question...' bg="white" maxW="calc(100vw-30px)" />
            <Button h="40px" onClick={messageSubmit}><AiOutlineSend /></Button>
        </Flex>
        </form>
        <Box w="100vw" h="100vh" bg="#00000099" pos="fixed" top="0" left="0" display={isMessageBlockOpen ? 'block' : 'none'} onClick={() => setIsMessageBlockOpen(false)}>
        </Box>
        <Box pos="fixed" transition="all 0.3s" bottom={isMessageBlockOpen ? "0" : "-80vh"}left="0" w="100vw" h="80vh" bg="#222" zIndex={2} color="white" pt="20px" pb="43px">
            <Box ref={ref} h="100%" w="calc(100vw-20px)" maxW="550px" margin="auto" overflowY={"scroll"}>
              {allChats?.map((message, index) => {
                if (message.type === "server") {
                  return (
                    <Box bg="#111" maxW="400px" p="10px" borderRadius={"10px"} mb="20px" key={index}>
                      {message.message}
                    </Box>
                  )
                }
                return (
                <Box key={index} bg="#333" pos="relative" left={"100%"} transform="translateX(-100%)" mb="20px" maxW="400px" p="10px" borderRadius={"10px"}>
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