// 라이브러리 묙표퍼센트 변환 헬퍼
export const getGoalPercentage = (dataTotalWalks: number): string =>
  `${((dataTotalWalks / 10000000) * 100).toFixed(1)}%`;
