import React from  "react";
import MyButton from "./Button";

const Card:React.FC=()=>{
return (
<div className="flex flex-col w-1/3 border-2 gap-4 rounded-xl justify-center">
<div className="p-2 flex flex-col">
<div className="w-80 mt-4 font-bold">
Order Sync Successfully
</div>
<div className="w-80 mt-4 text-base">
Your order details from the past 30 days have been successfully synced.Check them out now
</div>
</div>
<div className="w-60 m-8 pb-3">
<MyButton text="Explore your order" />
</div>
</div>
)

}

export default Card;