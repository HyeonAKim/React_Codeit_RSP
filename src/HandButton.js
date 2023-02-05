import HandIcon from "./HandIcon";
import './HandButton.css';


function HandButton({value, onClick, className}) {
  const handleClick = () => onClick(value); 
  
  return (
    <button className='HandButton' onClick={handleClick}> 
      <HandIcon className={className} value={value}></HandIcon>
    </button>
  )
}

export default HandButton ; 