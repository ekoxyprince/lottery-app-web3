import PropTypes from 'prop-types'



const Button = ({text})=>{
   return (
    <button className="bg-gradient-to-r from-lightGreen to-heavyGreen px-3 py-1.5 font-bold text-md border-none rounded-md hover:text-lime-400">
           {text}
    </button>
   )
}
export default Button

export const TransparentButton = ({text})=>{
    return(
        <button className=" px-3 py-1.5 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}

export const PrimaryButton = ({text,onClick})=>{
    return(
        <button onClick={onClick} className="bg-gradient-to-r from-darkOrange to-heavyGreen px-3 py-2.5 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}

export const SecondaryButton = ({text})=>{
    return(
        <button className="bg-gradient-to-r from-lightGreen to-heavyGreen px-3 py-4 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}
Button.propTypes = {
    text:PropTypes.any,
    onClick:PropTypes.func
  }
  PrimaryButton.propTypes = {
      text:PropTypes.any,
      onClick:PropTypes.func
  }
  TransparentButton.propTypes = {
      text:PropTypes.any,
      onClick:PropTypes.func
  }
  SecondaryButton.propTypes = {
      text:PropTypes.any,
      onClick:PropTypes.func
  }