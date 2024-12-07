let userName = prompt("Hi, who are you?");

  function shakeMagic8Ball (){
        const randomNumber = Math.floor(Math.random() * 8);
        let eightBall = '';
        let responseImg;
    
    let userQuestion = prompt('What is your question for the mighty 8 Ball?');
    
      switch (randomNumber)
      {
        case 0:
          eightBall = 'You may rely on it';
          responseImg = "imgs/You may rely on it.png";
        break;
        case 1:
          eightBall = 'It is certain';
          responseImg = "imgs/It is certain (2).png";
        break;
        case 2: 
          eightBall = 'My sources say no';
          responseImg = "imgs/My sources say no.png";
        break;
        case 3:
          eightBall = 'Yes';
          responseImg = "imgs/Yes.png";
        break;
        case 5:
          eightBall = 'Reply hazy, try again later';
          responseImg = "imgs/Reply hazy.png";
        break;
        case 6:
          eightBall = 'Without a doubt';
          responseImg = "imgs/Without a doubt.png";
        break;
        case 7:
          eightBall = 'Dont count on it';
          responseImg = "imgs/Don't count on it.png";
        break;
      }
document.getElementById('response-image').src = responseImg;
}