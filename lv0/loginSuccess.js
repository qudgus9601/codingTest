function solution(id_pw, db) {
  [id, password] = id_pw;
  let message = "fail";

  db.map((e) => {
    if (e[0] === id) {
      if (e[1] === password) {
        message = "login";
      } else {
        message = "wrong pw";
      }
    }
  });

  return message;
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
