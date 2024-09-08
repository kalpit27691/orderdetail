import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  }

const data={
    labels:['Exception','Intransit','Pending','Delivered','Out for delivery'],
    datasets:[
    {
    data:[12,10,8,6,3],
    backgroundColor:['#5E4200','#956F00','#E5A500','#FFC879','#FFDDB6'],
    }
    ]
    
}

const options={
 responsive:true
}
const PieChart:React.FC=()=>{

return(
<div className="flex flex-col items-center">
<div className="w-64 h-64 mt-4">
 <Pie data={data} options={options} />
</div>

</div>
)
}

export default PieChart;