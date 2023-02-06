function solution(s) {
  // 배열을 오름차순으로 정렬한다.
  // 현재 인덱스와 다음 인덱스를 비교해서 같으면 한개 건너뛴다.
  // 같지 않으면 반환한다.
  let arr = [];

  [...new Set(s)].map((e) => {
    if (s.indexOf(e) === s.lastIndexOf(e)) {
      arr.push(e);
    }
  });

  return [...arr].sort().join("");
}
