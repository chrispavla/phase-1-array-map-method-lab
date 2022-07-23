// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {

//   return tutorials.map(item => {

//     let words = item.split(" ")
//     let capWords = words.map(it => {
//       let firstLetter = it.slice(0, 1).toUpperCase()
//       let theRest = it.slice(1)
//       return `${firstLetter}${theRest}`;
//     })
//     return capWords.join(" ")
//   })

// }

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map((title) => {
    let token = title.split(" ");
    // console.log(token);
    let capitalizedToken = token.map(
      (t) => t.charAt(0).toUpperCase() + t.slice(1)
    );

    let response = capitalizedToken.join(" ");
    return response;
  });
}

console.log(titleCased());
