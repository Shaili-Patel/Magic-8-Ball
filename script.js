let userName = prompt("Hi, who are you?")

userName ? document.getElementById('greeting').innerText = `Hello ${userName}!`:
document.getElementById('greeting').innerText = 'Hello!'

function shakeMagicEightBall (){
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    
    let userQuestion = prompt('What is your question for the mighty 8 Ball?')
    
    switch (randomNumber) {
      case 0:
      eightBall = 'It is certain';
      break;
      case 1:
      eightBall = 'It is decidedly so';
      break;
      case 2: eightBall = 'Reply hazy try again';
      break;
      case 3: eightBall = 'Cannot predict right now';
      break;
      case 5: eightBall = 'My sources say no';
    break;
    case 6: eightBall='Outlook not so good';
    break;
    case 7: eightBall ='Signs point to yes';
    break;
    case 8: eightBall = 'Do not count on it';
    break;
    }


console.log(eightBall);

document.getElementById=('response-text').innerText = `${userName} has asked the magic 8 ball ${userQuestion}. The wise and wonderous
8 ball has replied ${eightBall}`
}