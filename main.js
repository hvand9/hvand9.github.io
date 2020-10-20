function quizFunction(){

let quiz = [
    {
          prompt: "Do you know what a smarphone is?\n(a) No\n\ (b) Yes\n(c) Maybe",
          answer: "b"
    },
    {
          prompt: "What was the worlds first Android-smartphone?\n(a) HTC Dream\n\ (b) Iphone 3GS\n(c) Sony Ericsson c902",
          answer: "a"
    },
    {
          prompt: "What is the software ran by most phone developers?\n(a) IOS\n\ (b) Android\n(c) Windows ",
          answer: "b"
    },
    {   
          prompt: "How many Iphones has there been released?\n(a) 19\n\ (b) 25\n(c) 30  ",
          answer: "a"

    }
];
let results = 0;

for(let i = 0; i < quiz.length; i++){
    let game = window.prompt(quiz[i].prompt);
    if(game == quiz[i].answer){
         results++;
         alert("Correct answer");
    } else {
         alert("Wrong answer");   
    }
}
alert("you got " + results + "/" + quiz.length);



}