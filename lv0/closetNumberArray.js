function solution(numlist, n) {
  // n과 차이를 abs로 정리
  if (numlist.length === 1) return numlist;

  const arr = numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
  for (let i = 0; i < arr.length - 2; i++) {
    if (Math.abs(arr[i] - n) === Math.abs(arr[i + 1] - n)) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11], 6));
