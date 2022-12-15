//  cookie.ts : 내부 쿠키값 사용을 위한 함수

// 1. 저장
export function setCookie(name: string, days: number, val: any): void {
  const currentDate = new Date();
  const expires = new Date(currentDate.setDate(currentDate.getDate() + days));
  document.cookie = `${name}=${val}; expires=${expires.toUTCString()};`;
}

// 2. 로드
export function getCookieValue(name?: string): string | undefined {
  if (!name) {
    return undefined;
  }

  const b = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return b ? b.pop() : '';
}
