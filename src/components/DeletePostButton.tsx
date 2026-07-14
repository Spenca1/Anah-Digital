"use client";

import { useRouter } from "next/navigation";


export default function DeletePostButton({
id,
}:{
id:string;
}){


const router = useRouter();



async function handleDelete(){


const confirmed = confirm(
"Are you sure you want to delete this article?"
);



if(!confirmed) return;



const response = await fetch(

`/api/admin/posts/${id}`,

{
method:"DELETE",
}

);



if(response.ok){

router.refresh();

}


}



return (

<button

onClick={handleDelete}

className="
text-red-600
hover:underline
"

>

Delete

</button>

);


}