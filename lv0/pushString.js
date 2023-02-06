function solution(A, B) {
  // 같으면 0 리턴
  // 맨 앞 값을 맨뒤로
  // 반복
  let count = 0;

  while (A !== B) {
    if (count === A.length) return -1;
    count += 1;
    const last = A.slice(-1); // o
    A = last.concat(A.slice(0, -1));
    if (A === B) return count;
  }

  return 0;
}

// 다른 분의 답인데 너무 놀라워서 갖고옴
let solution2 = (a, b) => (b + b).indexOf(a);
