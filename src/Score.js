import './Score.css';

function Score({children, score=0}) {
  return (
    <div className="Score">
      <div className="Score-num">{score}</div>
      <div className="Score-name">{children}</div>
    </div>
  )
}

export default Score ; 