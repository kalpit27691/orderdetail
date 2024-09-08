import React from 'react';
import {ChevronDownIcon} from '@shopify/polaris-icons'
import {SearchIcon} from '@shopify/polaris-icons';
import { SettingsIcon } from '@shopify/polaris-icons';
import {PersonFilledIcon} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';


const Navbar:React.FC=()=>{
 return(
<div className="flex justify-around items-center w-full">
 <div className="w-[525] flex justify-start m-4 gap-8">
   <div className="p-2 text-center">
   Home
   </div>
    <div className="p-2 text-center">
    Orders
    </div>
    <div className="p-2 text-center">
    Integration
    </div>
    <div className="p-2 flex justify-center text-center items-center gap-2">
    <p className="text-center">
     Tracking Page
    </p>
     <div className="w-4 h-4">
        <ChevronDownIcon />
     </div>
   </div>
    <div className="p-2 text-center">
    Partner with us
    </div> 
 </div>

<div className="w- flex justify-start items-center gap-8">
<div className="flex w-60 items-center">
<div className="w-4 h-4">
<SearchIcon />
</div>
<input type="text" placeholder="Search" className='w-40 border-b-2' />
</div>
</div>
<div className="w-20 flex gap-1 items-center">
<div className='w-4 h-4'>
<Icon
source={PersonFilledIcon}
tone="base"
/>
</div>
<div>
    Account
</div>
</div>
<div className="flex gap-1 w-40 items-center">
<div className='w-4 h-4'>
<Icon source={SettingsIcon}
  tone="base"
/>
</div>
<div className="w-10">
    Setting
</div>
</div>
</div>
 )
}

export default Navbar;