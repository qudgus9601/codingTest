function solution(order) {
  // 문자열로 변환
  // 배열로 변환
  // 각 요소를 3으로 mod
  // count 증가 판별
  // 리턴
  let count = 0;
  order
    .toString()
    .split("")
    .map((e) => {
      // 0 생각
      if (e > 0) {
        if (Number(e) % 3 === 0) {
          count++;
        }
      }
    });
  return count;
}
