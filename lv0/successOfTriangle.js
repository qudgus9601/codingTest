function solution(sides) {
  return Math.max(...sides) >=
    sides.reduce((acc, cur) => acc + cur, 0) - Math.max(...sides)
    ? 2
    : 1;
}

console.log(solution([199, 72, 222]));
