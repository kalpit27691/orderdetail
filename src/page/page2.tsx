import React from 'react'
import Chart4 from '../components/card4';
import Frame from "../components/frame";
import Chart5 from '../components/card5';
import Chart6 from "../components/Card6";

const Page2:React.FC=()=>{

return (
<div className="bg-[#FFF7EE] flex flex-col p-12 justify-start">
<div className="mt-4">
    <p className="fold-bold text-xl">
        Instant Dive into Your Performance Metrics
    </p>
</div>
<div className="mt-4">
<Frame />
</div>
<div className="mt-8  flex flex-row item-center justify-start gap-x-1">
<Chart4 />
<Chart5 />
<Chart6 />
</div>
</div>
)



}

export default Page2;
