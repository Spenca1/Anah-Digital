import { prisma } from "@/lib/prisma";

import DeleteSubscriberButton from "@/components/DeleteSubscriberButton";


export default async function SubscribersPage(){


const subscribers = await prisma.subscriber.findMany({

orderBy:{
createdAt:"desc",
},

});


const totalSubscribers = await prisma.subscriber.count();



return (

<main>


<div className="mb-8">

<h1 className="
text-4xl
font-bold
">

Subscribers

</h1>


<p className="
mt-2
text-gray-500
">

Total Subscribers: {totalSubscribers}

</p>


</div>


<div className="
rounded-xl
border
overflow-hidden
">


<table className="
w-full
">


<thead>

<tr className="border-b">

<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Date
</th>

<th className="p-4 text-left">
Action
</th>

</tr>

</thead>



<tbody>


{
subscribers.map((subscriber)=>(


<tr
key={subscriber.id}
className="border-b"
>


<td className="p-4">

{subscriber.email}

</td>



<td className="p-4 text-gray-500">

{
new Date(
subscriber.createdAt
).toLocaleDateString()
}

</td>

<td className="p-4">

<DeleteSubscriberButton

id={subscriber.id}

/>

</td>


</tr>


))

}


</tbody>


</table>


</div>


</main>

);

}