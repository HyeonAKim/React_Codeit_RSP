import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import Score from "./Score";
import { compareHand, generateRandomHand } from "./utils";
import './App.css'; 
import './Box.css';

const INITIAL_VALUE = 'rock' ; 

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부'; 
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]); 
  const [score, setScore]  = useState(0); 
  const [otherScore, setOtherScore] = useState(0); 
  const [bet, setBet] = useState(1); 
  const [winClass, setWinClass] = useState('Hand');
  const [winOtherClass, setOtherWinClass] = useState('Hand');

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand(); 
    const nextHistoryItem = getResult(nextHand, nextOtherHand); 
    const comparison = compareHand(nextHand, nextOtherHand); 

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    
    if (comparison > 0) {
      setScore(score + bet); 
      setWinClass('Hand winner'); 
      setOtherWinClass('Hand'); 
    }
    else if (comparison < 0) {
      setOtherScore(otherScore + bet)
      setOtherWinClass('Hand winner'); 
      setWinClass('Hand'); 
    }
    else {
      setOtherWinClass('Hand'); 
      setWinClass('Hand'); 
    };
    

    
  };
  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE); 
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1); 
    setWinClass('Hand');
    setOtherWinClass('Hand');
  }

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9 ) num %= 10 ; 
    if (num < 1) num = 1; 
    num = Math.floor(num);
    setBet(num);       
  }


  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button className="App-reset" onClick={handleClearClick}></Button>
      <div className="App-scores">
        <Score score={score}>나</Score>
        <div className="App-versus">:</div>
        <Score score={otherScore}>상대</Score>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className={winClass}>
            <HandIcon value={hand} className='Hand-icon'/>
            </div>
            <div className="App-versus" >VS</div>
            <div className={winOtherClass}>
            <HandIcon value={otherHand} className='Hand-icon'/>
            </div>
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
            <span>배</span>
          </div>
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} className='HandButton-icon'/>
        <HandButton value="scissor" onClick={handleButtonClick} className='HandButton-icon'/>
        <HandButton value="paper" onClick={handleButtonClick} className='HandButton-icon'/>
      </div>
    </div>
  );
}

export default App; 