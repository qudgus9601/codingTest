function solution(score) {
  // 배열을 한바퀴 돈다.
  // 평균 점수를 구한다.
  // 평균 점수 목록을 만든다.
  // [점수, 인덱스]
  let arr = score
    .map((e, idx) => {
      return [(e[0] + e[1]) / 2, idx];
    })
    .sort((a, b) => b[0] - a[0])
    .map((e, idx) => {
      return [...e, idx + 1];
    });

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] === arr[i - 1][0]) {
      arr[i][2] = arr[i - 1][2];
    }
  }

  return arr
    .sort((a, b) => a[1] - b[1])
    .map((e) => {
      return e[2];
    });
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
