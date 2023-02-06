function solution(array) {
  // 얕은 복사를 잘 활용해보자
  return [
    [...array].sort((x, y) => x - y).pop(),
    array.indexOf([...array].sort((x, y) => x - y).pop()),
  ];
}
