import React from 'react';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Card2 from '../components/card2';
import Card3 from '../components/Card3';

const Page1:React.FC=()=>{
return (
<div className="w-full flex flex-col gap-2">
<div className="border-b-2">
<Navbar />
</div>
<div className="flex gap-2 justify-start m-12 p-16">
<Card />
<Card2 />
<Card3 />
</div>
</div>
)

}

export default Page1;