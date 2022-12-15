export const getGoalPercentage = (dataTotalWalks: number): string =>
  `${((dataTotalWalks / 10000000) * 100).toFixed(1)}%`;
