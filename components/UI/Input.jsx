import React from 'react'

const Input = (props) => {

  const {type, errorMessage, touched, placeholder, name, ...inputProps} = props;

  

  return (
    <div className='w-full'>
        <label className='relative block cursor-text'>
            <input type={type} name={name} className={`h-12 w-full border-2 border-primary outline-none px-4 peer 
            ${props.type !== "datetime-local" && "pt-2"}
            ${touched && errorMessage ? "border-red-500" : "border-primary"}`}
            required {...inputProps}/>
            
            {type !== "datetime-local" && <span className='absolute top-0 left-0 px-4 text-sm h-full flex items-center 
            duration-300 peer-focus:h-6 peer-focus:text-xs peer-focus:text-black/50 font-semibold
            peer-valid:h-7 peer-valid:text-xs peer-valid:text-black/50'>{placeholder}</span> }

        </label>
        
        { touched && <span className='text-xs text-red-600 font-bold'>{errorMessage}</span>}
    </div>
  )
}

export default Input