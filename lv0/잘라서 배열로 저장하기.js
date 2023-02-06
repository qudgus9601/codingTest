function solution(array) {
  // 모든 글자를 합친다.
  // 한글자씩 떼어놓는다.
  // 7의 갯수를 센다.
  let count = 0;
  array
    .join("")
    .split("")
    .filter((e) => {
      if (e === "7") count += 1;
    });

  return count;
}
