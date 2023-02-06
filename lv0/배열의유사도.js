function solution(s1, s2) {
  // 첫 배열의 각 요소를 순환한다.
  // 두번째 배열을 첫번째요소의 각 요소로 순환한다.

  return s1.filter((e) => s2.indexOf(e) >= 0).length;
}
