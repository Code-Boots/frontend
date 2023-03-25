import { Box, CircularProgress, CircularProgressLabel, Tag, Td, Text } from '@chakra-ui/react';

export default function CreditScoreMeter({ score }) {
  const meterColors = [
    '#e74c3c',
    '#f39c12',
    '#f1c40f',
    '#2ecc71',
    '#27ae60',
    '#32de84'
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
    <>
      <Box textAlign="center" py={8}>
        <Text fontSize="xl" fontWeight="bold">Your Credit Score</Text>
        <Box position="relative" display="inline-block">
          <CircularProgress
            value={score}
            color={getMeterColor(score)}
            size="170px"
            thickness="4px"
            capIsRound
            rotation={-90}
            isIndeterminate={false}
          />
          <CircularProgressLabel fontSize="3xl" fontWeight="bold" color={getMeterColor(score)}>{score}</CircularProgressLabel>
        </Box>
      </Box>
    </>
  );
}
