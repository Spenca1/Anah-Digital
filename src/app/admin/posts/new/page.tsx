"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";


function createSlug(text:string){

return text
.toLowerCase()
.trim()
.replace(/[^a-z0-9]+/g,"-")
.replace(/^-+|-+$/g,"");

}



export default function NewPostPage(){


const router = useRouter();



const [form,setForm] = useState({

title:"",

slug:"",

description:"",

seoTitle:"",

seoDescription:"",

keywords:"",

imageAlt:"",

category:"",

image:"",

content:"",

author:"",

readTime:"",

published:false,

});

function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const { name, value } = e.target;

  if (name === "title") {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: createSlug(value),
    }));
    return;
  }

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
}

async function uploadImage(
  e: React.ChangeEvent<HTMLInputElement>
) {
  const file = e.target.files?.[0];

  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/admin/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  setForm((prev) => ({
    ...prev,
    image: data.url,
  }));
}

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  console.log("FORM BEING SENT:");
  console.log(form);

  const response = await fetch("/api/admin/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const result = await response.json();

  console.log("SERVER RESPONSE:");
  console.log(result);

  if (response.ok) {
    router.push("/admin/posts");
  }
}


return (

<main className="px-8 py-20">


<h1 className="text-4xl font-bold">

Create New Post

</h1>





<form

onSubmit={handleSubmit}

className="mt-10 max-w-3xl space-y-5"

>


<input

name="title"

placeholder="Title"

value={form.title}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





<input

name="slug"

placeholder="Slug"

value={form.slug}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





<input

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>


<input

name="seoTitle"

placeholder="SEO Title"

value={form.seoTitle}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>



<textarea

name="seoDescription"

placeholder="SEO Description"

value={form.seoDescription}

onChange={handleChange}

className="
h-32
w-full
rounded-lg
border
px-4
py-3
"

/>



<input

name="keywords"

placeholder="Keywords (AI, Nigeria, Software)"

value={form.keywords}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>




<input

name="category"

placeholder="Category"

value={form.category}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





{/* IMAGE UPLOAD */}


<div>


<label className="block mb-2 text-sm">



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


<input

name="imageAlt"

placeholder="Image description for SEO"

value={form.imageAlt}

onChange={handleChange}

className="
mt-4
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

placeholder="Author"

value={form.author}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>





<input

name="readTime"

placeholder="Read Time"

value={form.readTime}

onChange={handleChange}

className="
w-full
rounded-lg
border
px-4
py-3
"

/>






<RichTextEditor


value={form.content}


onChange={(value)=>

setForm({

...form,

content:value

})

}

/>







<label className="flex items-center gap-3">


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


Publish immediately


</label>







<button

type="submit"

className="
rounded-lg
bg-black
px-6
py-3
text-white
pointer
"

>


{

form.published

?

"Publish Article"

:

"Save Draft"

}


</button>





</form>


</main>

);


}