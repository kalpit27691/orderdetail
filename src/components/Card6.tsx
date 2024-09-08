import React from 'react';
import { ViewIcon } from '@shopify/polaris-icons';
import { OrderIcon } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

const Card6:React.FC=()=>{
return (
<div className="flex flex-col gap-2 w-1/3 p-4  border rounded-xl mt-4 ">
<div className="flex flex-col gap-2 ">
<p className="font-bold text-md">Tracking Page Views Vs Orders</p>
<p className="whitespace-normal">
Understand user engagement patternsand optimiize your tracking page
for enhanced customer experiences.
</p>
</div>
<div className="flex flex-col gap-2 border rounded-xl">
<div className="bg-[#FFEBD5] flex flex-col gap-2 p-2">
<p className="text-base">
    Orders
</p>
<div className="flex justify-between">
    <div className="text-xl font-bold">
        80
    </div>
    <div className="w-16 h-16">
    <Icon source={OrderIcon}
     tone="base"/>
    </div>
</div>
</div>
<div className="bg-[#FFC879] flex flex-col gap-2 p-2">
<p className="text-base">
 Tracking Page Views
</p>
<div className="flex justify-between">
    <div className="text-xl font-bold">
        80
    </div>
    <div className="w-16 h-16">
    <Icon source={ViewIcon}
     tone="base"/>
    </div>
</div>

</div>
</div>
</div>
)
}

export default Card6;