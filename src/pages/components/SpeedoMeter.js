import { Box, CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react";

const Speedometer = ({ speed, maxSpeed }) => {
  const speedPercent = (speed / maxSpeed) * 100;

  let color;
  if (speedPercent < 50) {
    color = "green.400";
  } else if (speedPercent < 75) {
    color = "yellow.400";
  } else if (speedPercent <= 100) {
    color = "red.400";
  }

  return (
    <Box position="relative" width="200px" height="200px">
      <CircularProgress
        value={speedPercent}
        size="200px"
        thickness="12px"
        color={color}
        trackColor="gray.100"
        capIsRound={true}
      >
        <CircularProgressLabel>
          <Text fontSize="3xl" fontWeight="bold">{speed}</Text>
          <Text fontSize="sm" color="gray.500">km/h</Text>
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default Speedometer;
