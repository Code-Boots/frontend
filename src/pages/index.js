import { Card } from "@chakra-ui/react";
import Cards from "./components/Cards";
import CreditScoreMeter from "./components/CreditScoreMeter";
import Speedometer from "./components/SpeedoMeter";

export default function Home() {
  return (
    <>
      {/* <CreditScoreMeter score="900"/> */}
      {/* <Cards/> */}
      <Speedometer speed={'700'} maxSpeed={'900'}/>
    </>
  )
}
