"use client";


import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from "recharts";



export default function CategoryChart({

data,

}:{

data:{
name:string;
views:number;
}[];

}){


return (

<div className="
h-[350px]
w-full
rounded-2xl
border
bg-white
p-6
">


<h2 className="
mb-6
text-2xl
font-bold
text-black
">

Category Performance

</h2>



<ResponsiveContainer
width="100%"
height="100%"
>


<BarChart data={data}>


<CartesianGrid strokeDasharray="3 3"/>



<XAxis
dataKey="name"
/>



<YAxis />



<Tooltip />



<Bar

dataKey="views"

fill="#111827"

/>



</BarChart>


</ResponsiveContainer>


</div>

);

}