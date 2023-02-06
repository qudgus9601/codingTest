function solution(n) {
  // 문자열로 변환 뒤
  // 각 자릿수를 분해하고
  // 숫자로 바꿔서
  // 다 더한다.
  return String(Math.abs(n))
    .split("")
    .reduce((pre, cur) => {
      return Number(pre) + Number(cur);
    }, 0);
}
