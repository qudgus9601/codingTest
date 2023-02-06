function solution(cipher, code) {
  // 평문을 배열로 바꾸고
  // 인덱스가 아닌 인덱스 + 1로 가야한다.
  return cipher
    .split("")
    .map((e, idx) => ((idx + 1) % code === 0 ? e : ""))
    .join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
