"use client";


import { useRouter } from "next/navigation";


export default function DeleteSubscriberButton({

id,

}:{

id:string;

}){


const router = useRouter();



async function removeSubscriber(){


const confirmDelete = confirm(
"Delete this subscriber?"
);


if(!confirmDelete) return;



await fetch(

`/api/admin/subscribers/${id}`,

{

method:"DELETE",

}

);



router.refresh();


}



return (

<button

onClick={removeSubscriber}

className="
rounded-lg
bg-red-600
px-3
py-2
text-white
"

>

Delete

</button>

);

}