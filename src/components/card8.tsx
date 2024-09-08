import React from 'react';
import { Button } from '@shopify/polaris';
import paypallogo from "../assests/paypal.png";
import googleanalytics from "../assests/googleanalytics.png";
import alireview from "../assests/alireviews.jpeg";
import shopifyflow from "../assests/shopifyflow.jpeg";
import instagram from "../assests/instagram.jpeg";
import MyButton from './Button';


const Card8:React.FC=()=>{

return (
<div className=" w-1/3">
<div className="p-2 border rounded-xl ">
<div className="flex flex-col gap-2">
    <p className="font-bold text-lg whitespace-normal text-left">
        Exclusive Onboarding Support for High-Volume Brand
    </p>
    <p className="text-sm whitespace-normal">
    Unlock personalized guidance!Book a one-on-one 
    onboarding call to stremline your experience
    </p>
</div>
<div className="mt-4">
<MyButton text="Schedule a call" />
</div>
</div>
<div className="p-2 mt-4 border rounded-xl ">
<div className="flex flex-col gap-2">
<p className="font-bold text-lg text-left">
    Explore Our Integrated Ecosystem
</p>
<p className="text-sm whitespace-normal">
Discover a variety of popular integration tailored for your convenience
</p>
</div>
<div className="flex flex-col mt-4 w-48">
<div className="flex gap-4">
<div className="w-12 h-16 flex items-center">
<img src={paypallogo} alt="Paypallogo" />
</div>
<div className="w-12 h-16 flex items-center">
<img src={alireview} alt="alireview" />
</div>
<div className="w-12 h-16 flex items-center">
<img src={googleanalytics} alt="googleanalytics" />
</div>
<div className="w-12 h-16 flex items-center">
    <img src={shopifyflow} alt="shopifyflow" />
</div>
<div className="w-12 h-16 flex items-center">
 <img src={instagram} alt="instagram"  />
</div>
</div>
<div className="mt-4">
    <MyButton text="Explore Integration" />
</div>
</div>
</div>
</div>
)
}


export default Card8;