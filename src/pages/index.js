import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Cards from "./components/Cards";
import Creditometer from "./components/CreditoMeter";
import { Router, useRouter } from "next/router";
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
    }
  }, []);
  return <></>;
}
