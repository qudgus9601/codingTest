function solution(array, n) {
  // 현재 배열을 전부 돈다.
  // 모든 요소와 차이의 절대값을 가진 배열을 새로 만든다.
  // 그 중 Min 값을 고른다.
  // Min 값과 같은 인덱스 모두를 찾는다.
  // Min 값들중 가장 작은 수를 뽑는다.
  const sameArr = [];
  array
    .map((e) => {
      return Math.abs(e - n);
    })
    .map((e, idx) => {
      if (
        e ===
        Math.min(
          ...array.map((e) => {
            return Math.abs(e - n);
          })
        )
      ) {
        return sameArr.push(idx);
      }
    });

  return Math.min(
    ...sameArr.map((e) => {
      return array[e];
    })
  );
}

console.log(solution([13, 10, 11], 12));
