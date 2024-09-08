import React from 'react';

interface Barprops{
text:string
}


const Bar:React.FC<Barprops>=(props)=>{
const t=props.text;
return (
<div className="flex relative justify-between border rounded-xl gap-2 w-96">
<p className="p-2 text-left">
    {props.text}
</p>
<p className="absolute bottom-0 right-0 p-2 bg-[${#t}]">
</p>
</div>
)
}
export default Bar;