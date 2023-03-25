import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Getstarted() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("apikey")) router.push("/");
  }, []);
  return (
    <Center>
      <Box
        backgroundColor="gray.100"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow={"lg"}
        backgroundImage={""}
      >
        <Box
          backgroundColor="white"
          padding="8"
          borderRadius="lg"
          boxShadow="lg"
          maxWidth="400px"
          width="100%"
        >
          <Heading
            marginBottom="4"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            color="gray.800"
          >
            Get Started
          </Heading>
          <Button
            leftIcon={<FaGoogle />}
            backgroundColor="red.500"
            color="white"
            onClick={() =>
              window.location.replace(
                "https://credito-backend.onrender.com/auth/login"
              )
            }
            _hover={{ backgroundColor: "red.600" }}
            _focus={{ outline: "none" }}
            _active={{ backgroundColor: "red.700" }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
