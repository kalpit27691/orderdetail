import React from 'react';
import Card7 from "../components/Card7";
import Card8 from "../components/card8";
import Card9 from '../components/card9';

const Page3:React.FC=()=>{
return (
<div className="p-8 flex flex-col ">
<div className="text-xl text-left font-bold">
    Discover The Heart of Our Functionality
</div>
<div className="flex flex-row mt-8">
<div className="flex gap-2  items-start">
<Card7 />
<Card8 />
<Card9 />
</div>
</div>
</div>
)
}

export default Page3;