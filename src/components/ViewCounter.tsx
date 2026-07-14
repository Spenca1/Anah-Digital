"use client";

import { useEffect } from "react";


export default function ViewCounter({

slug,

}:{

slug:string;

}){


useEffect(()=>{


fetch(
`/api/posts/${slug}/view`,
{
method:"POST",
}
);


},[slug]);



return null;


}