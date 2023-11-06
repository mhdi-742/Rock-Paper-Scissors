const ss=document.querySelector('.score');
            const chc=document.querySelector('.option1');
            const chh=document.querySelector('.option2');
            const result=document.querySelector('.winner');
      const score={
        wins:0,
        looses:0,
        ties:0
      }
        function show()
        {
          alert("Wins: "+score.wins+"\nLooses: "+score.looses+"\n Ties: "+score.ties)
        }
        function reset()
        {
          score.wins=0;
          score.ties=0;
          score.looses=0;
          ss.innerHTML="You: "+score.wins+" , Computer: "+score.looses+" , Tie: "+score.ties;
        }
        function play(playerMove)
        {
            if(playerMove==='rock') chh.innerHTML="<img src='rock-emoji.png'> :YOU"; 
            else if(playerMove==='paper') chh.innerHTML="<img src='paper-emoji.png'> :YOU"; 
            else chh.innerHTML="<img src='scissors-emoji.png'> :YOU"; 
            
            const computerMove=comp();
            if(playerMove===computerMove)
              { result.innerHTML='<h2>ITS A TIE :|</h2>';
              score.ties++;}
        else if (playerMove === 'sc') {
          if (computerMove === 'rock') {
            result.innerHTML='<h2>YOU LOOSE :(</h2>';
            score.looses++;
          } else if (computerMove === 'paper') {
            result.innerHTML='<h2>YOU WIN !!</h2>';
             score.wins++;
          } else if (computerMove === 'scissors') {
            result.innerHTML='<h2>ITS A TIE :|</h2>';
           score.ties++;
          }

        }
         
        else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result.innerHTML='<h2>YOU WIN !!</h2>';
       score.wins++;
          } else if (computerMove === 'paper') {
            result.innerHTML='<h2>ITS A TIE :|</h2>';
       score.ties++;
          } else if (computerMove === 'sc') {
            result.innerHTML='<h2>YOU LOOSE :(</h2>';
            score.looses++;
         }
        }
  

        else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result.innerHTML='<h2>ITS A TIE :|</h2>';
            score.ties++;//
          } else if (computerMove === 'paper') {
            result.innerHTML='<h2>YOU LOOSE :(</h2>';
            score.looses++;
          } else if (computerMove === 'sc') {
            result.innerHTML='<h2>YOU WIN !!</h2>';
            score.wins++;
          }
        }
        
          ss.innerHTML=`<h1>You: ${score.wins} , Computer: ${score.looses} , Tie: ${score.ties}</h1>`;
        
        function comp()
        {
            let i=Math.random();
            if(i<1/3)
              {chc.innerHTML="COMPUTER:<br><br><img src='rock-emoji.png'>"; 
              return "rock";}
            else if(i<2/3)
              {chc.innerHTML="COMPUTER:<br><br><img src='paper-emoji.png'>";
                return "paper";}
            else 
               {chc.innerHTML="COMPUTER:<br><br><img src='scissors-emoji.png'>"
                return "sc";}
            return;
        }
       localStorage.setItem('score',JSON.stringify(score));
    }