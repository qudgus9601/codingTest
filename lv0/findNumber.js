function solution(num, k) {
  // 숫자를 문자열로 바꾼다.
  // 문자열 각 자리를 배열로 나눈다.
  // 인덱스 번호를 찾아낸다.
  // 반환한다.

  return num.toString().split("").indexOf(k.toString()) >= 0
    ? num.toString().split("").indexOf(k.toString()) + 1
    : -1;
}

function solution2(num, k) {
  // -의 경우의 수가 없고
  // 없을 경우에 -1 에 1을 더해 0이 되니
  // 0 || -1 하면 -1을 반환한다.
  return num.toString().split("").indexOf(k.toString()) + 1 || -1;
}
