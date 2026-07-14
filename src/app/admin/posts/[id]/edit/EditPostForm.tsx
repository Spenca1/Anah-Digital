"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";


export default function EditPostForm({
post,
}:{
post:any;
}){


const router = useRouter();



const [form,setForm]=useState({

title:post.title,

slug:post.slug,

description:post.description,

category:post.category,

image:post.image,

content:post.content,

author:post.author,

readTime:post.readTime,

published:post.published,

});




function handleChange(
e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
){

setForm({

...form,

[e.target.name]:
e.target.value

});

}


async function uploadImage(
e:React.ChangeEvent<HTMLInputElement>
){

const file = e.target.files?.[0];


if(!file) return;



const formData = new FormData();


formData.append(
"file",
file
);



const response = await fetch(
"/api/admin/upload",
{
method:"POST",
body:formData,
}
);



const data = await response.json();



setForm({

...form,

image:data.url,

});


}


async function handleSubmit(
e:React.FormEvent
){

e.preventDefault();



const response = await fetch(

`/api/admin/posts/${post.id}`,

{

method:"PUT",

headers:{
"Content-Type":"application/json",
},

body:JSON.stringify(form),

}

);



if(response.ok){

router.push("/admin/posts");

router.refresh();

}


}




return (

<form
onSubmit={handleSubmit}
className="max-w-3xl space-y-5"
>


<input

name="title"

value={form.title}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<input

name="slug"

value={form.slug}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<input

name="description"

value={form.description}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<input

name="category"

value={form.category}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<div>

<label className="block mb-2 text-sm">

Cover Image

</label>



<input

type="file"

accept="image/*"

onChange={uploadImage}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>



{
form.image && (

<img

src={form.image}

alt="Preview"

className="
mt-4
h-48
rounded-lg
object-cover
"

/>

)

}


</div>



<input

name="author"

value={form.author}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<input

name="readTime"

value={form.readTime}

onChange={handleChange}

className="w-full rounded-lg border px-4 py-3"

/>



<RichTextEditor

value={form.content}

onChange={(content)=>

setForm({

...form,

content,

})

}

/>



<label className="flex gap-3 items-center">


<input

type="checkbox"

checked={form.published}

onChange={(e)=>

setForm({

...form,

published:e.target.checked

})

}

/>


Published


</label>




<button

className="
rounded-lg
bg-black
px-6
py-3
text-white
"

>

Save Changes

</button>



</form>

);

}