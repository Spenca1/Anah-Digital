"use client";

import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";


export default function RichTextEditor({

value,

onChange,

}:{

value:string;

onChange:(value:string)=>void;

}) {



const editor = useEditor({


extensions:[


StarterKit.configure({

heading:{

levels:[2,3],

},

}),



Link.configure({

openOnClick:false,

}),


],



content:"",



onUpdate({editor}){

onChange(editor.getHTML());

},



editorProps:{


attributes:{


class:
"min-h-[300px] rounded-lg border p-4 outline-none prose prose-lg max-w-none prose-a:text-blue-600"

}


},


});




useEffect(() => {
  if (!editor) return;

  if (editor.getHTML() !== value) {
    editor.commands.setContent(value || "", false);
  }
}, [editor]);


if(!editor){

return null;

}




function addLink(){


const previousUrl = editor.getAttributes("link").href;



const url = window.prompt(

"Enter URL",

previousUrl

);



if(url === null){

return;

}




if(url === ""){


editor

.chain()

.focus()

.unsetLink()

.run();



return;

}





editor

.chain()

.focus()

.extendMarkRange("link")

.setLink({

href:url,

})

.run();


}





return (


<div className="space-y-4">



<div className="flex flex-wrap gap-2 border rounded-lg p-2">



<button

type="button"

onClick={()=>editor.chain().focus().toggleBold().run()}

className="rounded border px-3 py-1"

>

Bold

</button>





<button

type="button"

onClick={()=>editor.chain().focus().toggleItalic().run()}

className="rounded border px-3 py-1"

>

Italic

</button>





<button

type="button"

onClick={()=>editor.chain().focus().toggleHeading({

level:2

}).run()}

className="rounded border px-3 py-1"

>

H2

</button>





<button

type="button"

onClick={()=>editor.chain().focus().toggleBulletList().run()}

className="rounded border px-3 py-1"

>

List

</button>





<button

type="button"

onClick={addLink}

className="rounded border px-3 py-1"

>

Link 🔗

</button>



</div>




<EditorContent editor={editor}/>



</div>


);


}