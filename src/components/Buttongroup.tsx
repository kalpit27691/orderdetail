import React from 'react';


interface Buttongroupprops{
text1:string,
text2:string

}

const ButtonGroupDefault:React.FC<Buttongroupprops>=(props)=>{
return (
<div className="flex flex-row gap-4">
<button className="bg-white px-4 py-2 text-center border rounded-full">
    {props.text1}
</button>
<button className="bg-black px-8 py-2 rounded-full text-white">
    {props.text2}
</button>
</div>
)
}

export default ButtonGroupDefault