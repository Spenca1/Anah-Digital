"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage(){


const router = useRouter();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");




async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


const response = await fetch(
"/api/admin/login",
{

method:"POST",

headers:{
"Content-Type":"application/json",
},

body:JSON.stringify({

email,

password,

}),

}
);



const data = await response.json();



if(!response.ok){

setError(
data.error || "Login failed"
);

return;

}



router.push("/admin");


}





return (

<main className="
min-h-screen
flex
items-center
justify-center
px-6
">


<form

onSubmit={handleSubmit}

className="
w-full
max-w-md
space-y-5
rounded-xl
border
p-8
shadow
"

>


<h1 className="
text-3xl
font-bold
">

Anah Digital CMS

</h1>



{
error && (

<p className="text-red-600">

{error}

</p>

)

}




<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





<button

className="
w-full
rounded-lg
bg-blue-600
py-3
text-white
"

>

Login

</button>



</form>


</main>

);

}