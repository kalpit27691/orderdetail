import React from 'react';

interface MyButtonProps{
    text:string
}

const MyButton:React.FC<MyButtonProps>=(props)=>{
return (
<div className="bg-black text-white rounded-full text-center p-2">
<button>{props.text}</button>
</div>
)


}

export default MyButton;