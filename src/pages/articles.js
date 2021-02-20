import React from 'react';
 const Articles = () => {
     return(
         <div>

         </div>
     );
 };

 export default Articles;

 const res = await fetch('$(process.env.NEXT_PUBLIC_API_BASE_URL)/articles')
 const data = await res.json();
 
 const articles = data.data;

 const paths = articles.map((articles)=>{
     return {params: {}}
 });