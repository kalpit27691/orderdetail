import React from 'react';

interface Barprops{
text:string
}


const Bar:React.FC<Barprops>=(props)=>{
return (
<div className="flex  justify-between border rounded-xl gap-2 w-96">
<p className="p-2 text-left">
    {props.text}
</p>
</div>
)
}
export default Bar;