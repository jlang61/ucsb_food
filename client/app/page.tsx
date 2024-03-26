/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pkf07PxlqUC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Search from "@/components/search";
 
 export default function Component() {
   return (
     <div className="flex justify-center items-center" style={{ marginTop: "35vh" }}>
       <div className="flex flex-col items-center gap-4 px-4 md:px-6">
         <div className="space-y-2">
           <h1 className="text-2xl font-semibold tracking-tight">
             What food are you looking for?
           </h1>
         </div>
         <Search></Search>
       </div>
     </div>
   );
 }
 