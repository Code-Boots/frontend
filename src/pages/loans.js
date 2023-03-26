import { LoanCard } from '@/components/Card'
import ChatComponent from '@/components/ChatComponent'
import { ServerUrl } from '@/config'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Loans = () => {
    const router = useRouter();
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
        let apikey = localStorage.getItem("apikey");
        console.log("api keyyyyyyyyyyyy", apikey)
        if (!apikey)
            apikey = new URLSearchParams(window.location.search).get("apikey");
        if (!apikey) {
            router.push("/getstarted");
        } else {
            localStorage.setItem("apikey", apikey);
            console.log(localStorage.getItem("apikey"));
        }
        // loansFetcher()
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