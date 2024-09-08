import React from 'react';
import PieChart from './chart';

const Card4:React.FC=()=>{
return(
<div className='flex flex-col w-1/3 max-h-96 border rounded-xl py-1 mt-4'>
<div className="flex flex-col">
<div className="flex justify-between ml-4">
<p className="text-lg">
    Shipment Updates
</p>
<p className="text-base">
    Total Order:394
</p>
</div>
<div className="flex gap-2 mt-4 ml-4">
<div className="bg-[#FFF1E3] items-center p-1 border rounded-xl">
    Delieverd
</div>
<div className="bg-[#F1F1F1] p-1 items-cener border rounded-xl">
    Out for Delievery
</div>
<div className="bg-[#F1F1F1] p-1 items-center border rounded-xl">
    Intransit
</div>
<div className="bg-[#F1F1F1] p-1 items-center border rounded-xl">
    Pending
</div>
</div>
<div className="w-48 h-48 ml-8">
    <PieChart />
</div>
</div>

</div>
)

}

export default Card4;