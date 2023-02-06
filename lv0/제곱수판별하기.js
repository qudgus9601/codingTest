function solution(n) {
  // 제곱근을 구하는 함수를 써서 정수가 아니면
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
