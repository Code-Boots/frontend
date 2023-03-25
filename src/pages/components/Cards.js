import { Box, Card, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Cards() {
  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center" mt={'20'} bg={'white'}>
      <Card w={'sm'} shadow="md" rounded={'lg'}>
          <Stack direction={'row'} >
              <Box>
                  <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' w={'100px'} h={'100px'}/>
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
                  <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' w={'100px'} h={'100px'}/>
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
