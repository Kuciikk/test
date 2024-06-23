
let randomNumber = null;
let computerMove = '';
let result = '';




function EnterKeyDown(event )
{
  
          if(event.key === 'Enter')
          {
            calculateTotal();
          }
}


function calculateTotal()
{
  const input = document.querySelector('.js-cost-input');
  let cena = Number(input.value);

  if(cena < 2000)
  {
      cena += 69;

  }
  document.querySelector('.js-cena').innerHTML = `${cena} Kč`;
}


let score = JSON.parse(localStorage.getItem('score')) || {
wins:0 , 
losses:0, 
ties: 0
};

uptadeScore();



/*
if(score === null)
{
score = {
wins:0 , 
losses:0, 
ties: 0
};
}
  */




function uptadeScore()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  document.querySelector('.js-result').innerHTML = result;
  
}

function reset()
{
score.wins = score.losses = score.ties =  0;
localStorage.removeItem('score');
document.querySelector('.js-score').innerHTML = 'Score reset';
document.querySelector('.js-result').innerHTML = '';
document.querySelector('.js-moves').innerHTML = '';
uptadeScore();
}

function ComputerPick()
{
 randomNumber = Math.random();

      
       

      if(randomNumber >= 0  && randomNumber <1/3)
      {
        computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber <2/3)
      {
        computerMove = 'paper';
      }
      else
      {
        computerMove = 'scissors';
      }

      
}

function Vysledek(volba, rock, paper, scissors)
{

ComputerPick();



        if(computerMove === 'rock')
        {
         result = rock;
        }
        else if (computerMove==='paper')
        {
          result = paper;
        }
        else
        {
          result = scissors;
        }

        if(result==='You win')
        {
          score.wins++;
        }
        else if(result=='You lose')
        {
          score.losses++;
        }
        else 
        {
          score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        uptadeScore();

        document.querySelector('.js-moves').innerHTML = ` 
        <div class="computer">
<img  class="moves-icon" src="pic/${computerMove}-emoji.png" alt="">
<p>PC</p>
</div>`;

       



        
}




function subscribe()
{
  const buttonSubscribe =  document.querySelector('.subsButton');

  console.log(buttonSubscribe);
  if(buttonSubscribe.innerHTML ==='Subscribe')
  {
  buttonSubscribe.innerText = 'Subscribed';
  buttonSubscribe.classList.add('subscribed-press');
  
  }

  else
  {
  buttonSubscribe.innerText = 'Subscribe';
  buttonSubscribe.classList.remove('subscribed-press');
  }
    }
    
    const todolist =[];
    renderToDoList();

    function renderToDoList()
    {

    


   

let todoListHTML = '';

  for(let i = 0;i<todolist.length;i++)
    {
const todo = todolist[i];
const html = `<p>${todo}</p>`;
todoListHTML += html;
    }



    console.log(todoListHTML);

    document.querySelector('.js-todo').innerHTML = todoListHTML;

  }







function addToDo()
{
  const inputElement =  document.querySelector('.js-name-input');

 const name =  inputElement.value;

todolist.push(name);

console.log(todolist);
renderToDoList();


}




