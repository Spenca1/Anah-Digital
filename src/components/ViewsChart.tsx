"use client";


import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from "recharts";



export default function ViewsChart({

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
p-6
">

<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart data={data}>


<CartesianGrid strokeDasharray="3 3"/>



<XAxis
dataKey="name"
/>



<YAxis />



<Tooltip />



<Line

type="monotone"

dataKey="views"

stroke="#000"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>


</div>

);

}