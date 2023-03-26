import Card from '@/components/Card'
import Cards from '@/components/Cards'
import ChatComponent from '@/components/ChatComponent'
import React from 'react'

const CreditCards = () => {
  return (
    <ChatComponent>
        <Card ind={1} />
        <Card ind={2} />
        <Card ind={3} />
    </ChatComponent>
  )
}

export default CreditCards