
type ButtonProp = {
    text:string
}
const Button = ({text}:ButtonProp)=>{
   return (
    <button className="bg-gradient-to-r from-lightGreen to-heavyGreen px-3 py-1.5 font-bold text-md border-none rounded-md hover:text-lime-400">
           {text}
    </button>
   )
}
export default Button

export const TransparentButton = ({text}:ButtonProp)=>{
    return(
        <button className=" px-3 py-1.5 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}

export const PrimaryButton = ({text}:ButtonProp)=>{
    return(
        <button className="bg-gradient-to-r from-darkOrange to-heavyGreen px-3 py-2.5 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}

export const SecondaryButton = ({text}:ButtonProp)=>{
    return(
        <button className="bg-gradient-to-r from-lightGreen to-heavyGreen px-3 py-4 font-bold text-md border-none rounded-md hover:text-lime-400">
            {text}
        </button>
    )
}