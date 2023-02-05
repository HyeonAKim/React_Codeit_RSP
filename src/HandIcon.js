import rock from './assets/rock.svg'; 
import scissor from './assets/scissor.svg'; 
import paper from './assets/paper.svg'; 
import './Hand.css';

const GAME_IMAGE = {
  'rock' : rock, 
  'scissor' : scissor,
  'paper'  : paper
}; 

function HandIcon({value, className}) {
  return (
      <img className={className}src={GAME_IMAGE[value]} alt={value} />
    )
} ;

export default HandIcon; 

