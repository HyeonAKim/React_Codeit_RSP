import resetImage from './assets/ic-reset.svg'

function Button({onClick, className=''}) {
  return <img className={className} src={resetImage} alt='초기화' onClick={onClick}/>;
}

export default Button;