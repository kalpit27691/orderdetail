import React from 'react';
import MyButton from './Button';

const Card5:React.FC=()=>{
return (
<div className="w-1/4 max-h-102 bg-[#956F00] border rounded-xl mt-4 flex items-center">
<div className="flex flex-col w-56 gap-2 p-2 items-start">
<div className="whitespace-normal text-white font-bold">
<p>Some Facts about your order!!!</p>
</div>
<div className="whitespace-normal text-white text-base gap-4 flex flex-col">
<p>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
<p>There are 5 shipments in exception right now</p>
<p>The maximum chargebacks are from Miami.</p>
</div>
<div className="w-40 h-24 mt-4">
    <MyButton text="Check Order page" />
</div>
</div>
</div>
)

}

export default Card5;