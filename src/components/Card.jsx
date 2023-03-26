import { Box, Button, Flex, FormControl, FormLabel, IconButton, Switch, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {BiBell} from "react-icons/bi"
import {BsCash} from "react-icons/bs"
import cardSvg from "../assets/card.webp"
import loanSvg from "../assets/loan.png"
import style from "../styles/Dashboard.module.css"

const Card = ({ind}) => {
  return (
    <Flex mt="200px" margin={"auto"} w={{base: "90vw", md: "580px"}} direction={{base: "column", md: "row"}} alignItems="center" justifyContent="space-between" border="1px solid #444" backdropFilter="blur(10px)"  mb='20px' color="white"
        p="15px" pr="30px" borderRadius="10px" bg="#00000064" >
        <Image src={cardSvg} style={style.cardImg} width={100} height={40} />
        <Box w="370px">
            <Flex justifyContent="space-between" mb="15px">
                <Box>********0000</Box>
                <Box>
                    Due Date :
                    25/03/2023
                </Box>
            </Flex>
            <Flex justifyContent="space-between" mb="15px">
                <FormControl display='flex' alignItems='center' w="fit-content">
                    <FormLabel htmlFor={`secured${ind}`} mb='0'>
                        CRED Secured
                    </FormLabel>
                    <Switch id={`secured${ind}`} />
                </FormControl>
                <FormControl display='flex' alignItems='center' w="fit-content">
                    <FormLabel htmlFor={`protected${ind}`} mb='0'>
                        CRED Protected
                    </FormLabel>
                    <Switch id={`protected${ind}`} />
                </FormControl>
            </Flex>
            <Flex justifyContent="space-between">
                <Button p="0px 15px" borderRadius="5px" h="32px" bg={"linear-gradient(90deg, rgba(0,190,12,1) 0%, rgba(0,130,41,1) 100%)"} 
                    bgSize="200%" bgPosition="0" transition="all 0.3s" color="white" __css={{
                        "&:hover" : {
                            bgPosition: "100% 0%"
                        }
                    }}>
                    <Flex alignItems="center">
                        <BsCash style={{marginRight: "6px", position: "relative", top: "1px"}} /> 
                        Pay Now
                    </Flex>
                </Button>
                <Button aria-label={"Set Reminder"} p="0px 15px" borderRadius="5px" h="32px" bg={"linear-gradient(90deg, rgba(227,114,0,1) 0%, rgba(255,171,0,1) 100%)"} 
                    bgSize="200%" bgPosition="0" transition="all 0.3s" color="white" __css={{
                        "&:hover" : {
                            bgPosition: "100% 0%"
                        }
                    }} >
                    <Flex alignItems="center">
                        <BiBell style={{marginRight: "6px", position: "relative", top: "1px"}} /> 
                        Set Reminder
                    </Flex>
                </Button>
            </Flex>
        </Box>
    </Flex>
  )
}

export const LoanCard = ({ind}) => {
    return (
        <Flex margin={"auto"} alignItems="center" w="580px" justifyContent="space-between" border="1px solid #444" backdropFilter="blur(10px)"  mb='20px' color="white"
            p="15px" pr="30px" borderRadius="10px" bg="#222">
            <Image src={loanSvg} style={style.cardImg} width={100} height="100%" />
            <Box w="370px">
                <Flex justifyContent="space-between" mb="15px">
                    <Box>
                        <Text fontSize={20}>
                            Manipal Bank
                        </Text>
                        <Text fontSize={14} color="aqua">Personal Loan</Text>
                    </Box>
                    <Box>
                        Due Date :
                        25/03/2023
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" mb="15px">
                    <FormControl display='flex' alignItems='center' w="fit-content">
                        <FormLabel htmlFor={`secured${ind}`} mb='0'>
                            CRED Secured
                        </FormLabel>
                        <Switch id={`secured${ind}`} />
                    </FormControl>
                    <FormControl display='flex' alignItems='center' w="fit-content">
                        <FormLabel htmlFor={`protected${ind}`} mb='0'>
                            CRED Protected
                        </FormLabel>
                        <Switch id={`protected${ind}`} />
                    </FormControl>
                </Flex>
                <Flex justifyContent="space-between">
                    <Button p="0px 15px" borderRadius="5px" h="32px" bg={"linear-gradient(90deg, rgba(0,190,12,1) 0%, rgba(0,130,41,1) 100%)"} 
                        bgSize="200%" bgPosition="0" transition="all 0.3s" color="white" __css={{
                            "&:hover" : {
                                bgPosition: "100% 0%"
                            }
                        }}>
                        <Flex alignItems="center">
                            <BsCash style={{marginRight: "6px", position: "relative", top: "1px"}} /> 
                            Pay Now
                        </Flex>
                    </Button>
                    <Button aria-label={"Set Reminder"} p="0px 15px" borderRadius="5px" h="32px" bg={"linear-gradient(90deg, rgba(227,114,0,1) 0%, rgba(255,171,0,1) 100%)"} 
                        bgSize="200%" bgPosition="0" transition="all 0.3s" color="white" __css={{
                            "&:hover" : {
                                bgPosition: "100% 0%"
                            }
                        }} >
                        <Flex alignItems="center">
                            <BiBell style={{marginRight: "6px", position: "relative", top: "1px"}} /> 
                            Set Reminder
                        </Flex>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Card