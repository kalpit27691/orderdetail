import React from 'react';
import { AlertTriangleIcon } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
import MyButton from './Button';

const Card2:React.FC=()=>{
return (
<div className="flex flex-col w-1/3 border-2 rounded-xl bg-[#FFF8DB] gap-2 justify-center ">
<div className="p-2 flex flex-col ">
<div className="w-80 font-bold flex ">
<Icon
source={AlertTriangleIcon}
tone="base"
/>
<div className="w-80 font-bold">
Customize Customer Notification
</div>
</div>
<div className="mt-4 text-base">
Tailor your Email Experience:Set the Sender Email 
and Choose Notification Triggers
</div>
</div>
<div className="w-60 m-8 pb-3">
    <MyButton text="Configure Notification" />
</div>
</div>
)
}

export default Card2;