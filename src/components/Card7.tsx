import React from 'react';
import Bar from "../components/Bar";
import ButtonGroupDefault from './Buttongroup';

const Card7:React.FC=()=>{
return (
<div className="flex flex-col p-2 gap-2 border rounded-xl w-1/3">
<div className="flex flex-col gap-2 m-2">
<p className="font-bold whitespace-normal">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</p>
<p className="text-base whitespace-normal mt-2">
Immerse your customer in a branded experience by personalizing the color on your tracking page.
</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex flex-col gap-1 ">
<p className="text-small text-left">
Access Control
</p>
<div className="flex gap-2 w-full items-center justify-between">
<Bar text="FF9898"/>
<div className="w-16 h-8 bg-[#FF9898] rounded-xl">
</div>
</div>
</div>
<div className="flex flex-col gap-1 ">
<p className="text-small text-left">
Text colour
</p>
<div className="flex gap-2 items-center justify-between">
<Bar text="571010" />
<div className="w-16 h-8 bg-[#571010] rounded-xl">
</div>
</div>
<div className="flex flex-col gap-1">
<p className="text-small text-left">
Background Colour
</p>
<div className="flex gap-2 items-center justify-between">
<Bar text="FFEAEA" />
<div className="bg-[#FFEAEA] w-16 h-8 rounded-xl">
</div>
</div>
</div>
</div>
</div>
<div className="mt-4">
    <ButtonGroupDefault text1="Previews" text2="Apply Colour" />
</div>
</div>
)

}

export default Card7;