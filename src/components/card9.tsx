import React from 'react';
import ButtonGroupDefault from './Buttongroup';

const Card9:React.FC=()=>{
return <div className="p-2 border rounded-xl w-1/3">
<div className="flex flex-col gap-2">
<p className="font-bold text-lg whitespace-normal">
    Seamlessly Integrate Custom HTML Elements
</p>
<p className="text-base whitespace-normal mt-2">
Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
</p>
</div>
<div className="flex flex-col gap-2">
<p className="text-left text-base">
    HTML link
</p>
<div className=" p-2 h-40 w-full border rounded-xl text-left">
Value
</div>
<div className="mt-4">
    <ButtonGroupDefault text1="Preview" text2="Apply Changes" />
</div>
</div>
</div>


}

export default Card9;