import { LoanCard } from '@/components/Card'
import ChatComponent from '@/components/ChatComponent'
import { ServerUrl } from '@/config'
import axios from 'axios'
import React, { useEffect } from 'react'

const Loans = () => {
    const loansFetcher = async () => {
        console.log(localStorage.getItem("apikey"))
        const res = await axios.post(ServerUrl+"/credit_score/gen/", 
        {
            
        }
        ,
        {
            headers: {
                authentication: localStorage.getItem("apikey")
            }
        })
        console.log(res.data)
    }
    useEffect(() => {
        loansFetcher()
    }, [])
  return (
    <ChatComponent>
        <LoanCard />
        <LoanCard />
        <LoanCard />
    </ChatComponent>
  )
}

export default Loans