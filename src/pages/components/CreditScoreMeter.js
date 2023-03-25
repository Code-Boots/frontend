import { Box, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react';

export default function CreditScoreMeter({ score }) {
  const meterColors = [
    '#e74c3c',
    '#f39c12',
    '#f1c40f',
    '#2ecc71',
    '#27ae60',
    '#3498db'
  ];

  const getMeterColor = (score) => {
    if (score < 300) return meterColors[0];
    if (score < 550) return meterColors[1];
    if (score < 650) return meterColors[2];
    if (score < 750) return meterColors[3];
    if (score < 900) return meterColors[4];
    return meterColors[5];
  };

  return (
    <Box textAlign="center" py={8}>
      <Text fontSize="xl" fontWeight="bold">Your Credit Score</Text>
      <Text fontSize="4xl" fontWeight="bold" color={getMeterColor(score)}>{score}</Text>
      <CircularProgress
        value={score}
        color={getMeterColor(score)}
        size="120px"
        thickness="8px"
        capIsRound
        mt={4}
      >
        <CircularProgressLabel fontSize="xl">{score}</CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
}