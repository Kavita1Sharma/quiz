let quiz = [
  {
    ques: "What does HTML stand for ____",
    opt1: "Hyperlinks and Text Markup Language",
    opt2: "Home Tool Markup Language",
    opt3: "Hyper Text Markup Language",
    opt4: "High Tag Markup Language",
    corrAns: "opt3",
  },
  {
    ques: "An HTML document can contain ____",
    opt1: "Attributes",
    opt2: "Tags",
    opt3: "Raw text",
    opt4: "All the answers are true",
    corrAns: "opt4",
  },
  {
    ques: "A page designed in HTML is called ____",
    opt1: "Application",
    opt2: "Cover page",
    opt3: "Front-end",
    opt4: "Web Page",
    corrAns: "opt4",
  },
  {
    ques: "An HTML document is saved with the ____ extension?",
    opt1: ".htl",
    opt2: ".html",
    opt3: ".hml",
    opt4: ".htnl",
    corrAns: "opt2",
  },
  {
    ques: "The HTML document contains a root tag called ____",
    opt1: "HEAD",
    opt2: "Title",
    opt3: "Body",
    opt4: "HTML",
    corrAns: "opt4",
  },
];

let ul = document.querySelector("ul");
let ans1 = document.querySelector("#ans1");
let ans2 = document.querySelector("#ans2");
let ans3 = document.querySelector("#ans3");
let ans4 = document.querySelector("#ans4");
let question = document.querySelector("ul h4");
let submitbtn = document.getElementById("submit");
let radio = document.querySelectorAll("input");
let questionnum = 0;
let score = 0;
let scorearea = document.querySelector(".score-area");

const loadquestion = () => {
  let quizlist = quiz[questionnum];
  ans1.innerHTML = quizlist.opt1;
  ans2.innerHTML = quizlist.opt2;
  ans3.innerHTML = quizlist.opt3;
  ans4.innerHTML = quizlist.opt4;
  question.innerHTML = quizlist.ques;
};
loadquestion();

let uanswer;
const checkcorrectans = () => {
  radio.forEach((item) => {
    if (item.checked) {
      uanswer = item.id;
    }
  });
  return uanswer;
};
const deselectAll = () => {
  radio.forEach((currntRadio) => {
    currntRadio.checked = false;
  });
};
submitbtn.addEventListener("click", () => {
  let userans = checkcorrectans();

  if (userans === quiz[questionnum].corrAns) {
    score++;
  }
  questionnum++;
  deselectAll();
  if (questionnum < quiz.length) {
    loadquestion();
  } else {
    document.querySelector(".quiz-area").style.display = "none";
    scorearea.style.display = "block";
    scorearea.innerHTML = `<p>You have scored ${score}/${quiz.length}</p>
    <button class="btn" onclick="location.reload()">Take Again</button>`;
  }
});
