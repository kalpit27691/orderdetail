import React from 'react';
import {CalendarIcon} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

const Frame:React.FC=()=>{
return (

<div className="flex gap-2">
<div className="p-2 border rounded-xl">
    Lifetime
</div>
<div className="p-2 border rounded-xl">
    Last Week
</div>
<div className="p-2 border rounded-xl">
    Last Month
</div>
<div className="p-2 border rounded-xl flex gap-2 items-center">
<p>
Customize Time Line
</p>
<div className="w-6 h-6">
<Icon
  source={CalendarIcon}
  tone="base"
/>
</div>
</div>
</div>
)
}

export default Frame;