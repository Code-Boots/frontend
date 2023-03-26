import Cards from "@/components/Cards";
import Creditometer from "@/components/CreditoMeter";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let apikey = localStorage.getItem("apikey");
    if (!apikey)
      apikey = new URLSearchParams(window.location.search).get("apikey");
    if (!apikey) {
      router.push("/getstarted");
    } else {
      localStorage.setItem("apikey", apikey);
      console.log(localStorage.getItem("apikey"));
      router.push("/");
    }
  }, []);
  
  return (
    <>
      <Flex justifyContent="center" alignItems="center" mt="10">
        <Creditometer value={'700'} maxValue={'900'}/>
      </Flex>
      <Cards/>
    </>
  );
}