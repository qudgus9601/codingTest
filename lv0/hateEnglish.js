function solution(numbers) {
  // one ~ nine 의 배열을 만든다.
  // 이 배열을 순환하며 numbers 배열을 순환한다.
  // regexp로 해당하는 문자열을 숫자로 치환한다.

  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.map((e, idx) => {
    numbers = numbers.replace(new RegExp(e, "gi"), idx);
  });

  return Number(numbers);
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
