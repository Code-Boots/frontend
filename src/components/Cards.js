import { Box, Card, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Cards() {
  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center" mt={'20'} bg={'white'}>
      <Card w={'sm'} shadow="md" rounded={'lg'}>
          <Stack direction={'row'} >
              <Box>
                  <Image src='https://i.pinimg.com/originals/f8/b0/a2/f8b0a277e663688f577cf09101d1d1fe.gif' w={'100px'} h={'100px'}/>
              </Box>
              <Box p="3">
                  <Heading size='md'>Credit Cards</Heading>
                  <Text py='2'>
                      Check out your credit cards
                  </Text>
              </Box>
          </Stack>
      </Card>
    </Box>

    <Box display="flex" justifyContent="center" alignItems="center" mt={'5'} bg={'white'}>
      <Card w={'sm'} shadow="md" rounded={'lg'}>
          <Stack direction={'row'} >
              <Box>
                  <Image src='https://cdn-images-1.medium.com/max/1200/1*evpRkULzf2s5JYoA3bTDcw.png' w={'100px'} h={'100px'}/>
              </Box>
              <Box p="3">
                  <Heading size='md'>Loans</Heading>
                  <Text py='2'>
                    Check out your loans
                  </Text>
              </Box>
          </Stack>
      </Card>
    </Box>
    
    </>
  )
}