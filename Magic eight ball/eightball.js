let userName = "nonso";
 userName ? console.log(`Hello ${userName}!`):
 console.log('Hello!');

let userQuestion = 'Will i update a new puppy ?';
console.log(`${userName} has asked - ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8 );

let eigthBall = "";

switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eigthBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it ';
  break;
  case 5:
  eigthBall = 'My sources say no';
  break;
  case 6:
  eightBall = "Outlook not so good";
  break;
  case 7:
  eigthBall = 'Signs point to yes';
  break;
}
console.log(`The Magic 8 ball says,${eightBall}`);