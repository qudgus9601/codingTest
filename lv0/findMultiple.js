function solution(n, numlist) {
  // 정수 배열 요소들을 순환한다.
  // filter로 걸러낸다.
  return numlist.filter((e) => {
    if (e % n === 0) {
      return e;
    }
  });
}
