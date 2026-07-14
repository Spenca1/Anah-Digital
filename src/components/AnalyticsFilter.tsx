"use client";


import { useRouter, useSearchParams } from "next/navigation";


export default function AnalyticsFilter(){


const router = useRouter();

const searchParams = useSearchParams();



function changePeriod(period:string){


const params = new URLSearchParams(
searchParams.toString()
);


params.set(
"period",
period
);


router.push(
`/admin/analytics?${params.toString()}`
);


}



const periods=[

{
label:"Today",
value:"today"
},

{
label:"7 Days",
value:"week"
},

{
label:"30 Days",
value:"month"
},

{
label:"All Time",
value:"all"
}

];



return (

<div className="
mt-6
flex
gap-3
flex-wrap
">


{
periods.map((period)=>(


<button

key={period.value}

onClick={()=>changePeriod(period.value)}

className="
rounded-lg
border
px-4
py-2
hover:bg-black
hover:text-white
transition
"

>

{period.label}

</button>


))

}



</div>

);

}