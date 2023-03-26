import { Box, CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react";

const Creditometer = ({ value, maxValue }) => {
  const creditPercent = (value / maxValue) * 100;

  let color;
  if (creditPercent < 50) {
    color = "red.400";
  } else if (creditPercent < 75) {
    color = "yellow.400";
  } else if (creditPercent <= 100) {
    color = "green.400";
  }

  return (
    <Box position="relative" width="200px" color="white">
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="2">
        Your Credit Score
      </Text>
      <CircularProgress
        value={creditPercent}
        size="200px"
        thickness="12px"
        color={color}
        trackColor="gray.100"
        capIsRound={true}
      >
        <CircularProgressLabel>
          <Text fontSize="3xl" fontWeight="bold">
            {value}
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default Creditometer;