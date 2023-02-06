function solution(before, after) {
  // 순서를 바꾸기만 하면 되니까
  // 결국엔 모든 요소만 가지고 있으면 된다.
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

console.log(solution("olleh", "hello"));
