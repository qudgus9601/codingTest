function solution(lines) {
  // 선분의 끝과 끝이 있으니
  // 시작값과 끝값사이의 정수를 가지는 배열을 만들고
  // 배열을 전부 이어 붙인다.
  // 그 배열에서 갯수를 뽑아내고
  // 2개 이상인 수들의 갯수를 센다.
  let arr = [];

  lines.map((e) => {
    for (let i = e[0]; i <= e[1] - 1; i++) {
      arr.push(i);
    }
  });

  console.log(arr);
  return [...new Set(arr)].filter((e) => {
    return (
      arr.filter((el) => {
        return el === e;
      }).length >= 2
    );
  }).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);

console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);

console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
