import React from 'react';
import ButtonGroupDefault from './Buttongroup';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

const Card3:React.FC=()=>{
return (
<div className="flex flex-col w-1/3 border-2 rounded-xl bg-[#EAF4FF] ">
<div className="p-2 flex flex-col ml-4">
<div className="w-80 mt-4 font-bold">
Order Sync Successfully
</div>
<div className="w-80 mt-4 text-base">
Your order details from the past 30 days have been successfully synced.Check them out now
</div>
</div>
<div className="flex justify-start">
<AppProvider i18n={enTranslations}>
<div className="mt-8 ml-4">
<ButtonGroupDefault text1="copy link" text2="Go to navigation menu"/>
</div>
</AppProvider>
</div>
</div>
)
}

export default Card3;