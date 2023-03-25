import { Box } from "@chakra-ui/react"
import ChatComponent from "@/components/ChatComponent"
import Card, {LoanCard} from "../components/Card"

export default function Home() {
  return (
    <ChatComponent>
      <Card key={1} ind={1} />
      <Card key={2} ind={2} />
      <Card key={3} ind={3} />
      <LoanCard ind={4} />
    </ChatComponent>
  )
}
