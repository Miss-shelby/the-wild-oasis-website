'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = ()=>{
    //to get searchparams which is the url search parameter on a webapage that contains url and search query on client component we use useSearchParams hook
    const searchParams = useSearchParams()
    //Get the current search parameters from the URL using the useSearchParams hook

    const router = useRouter()
    // The useRouter hook provides the router object, which is used to navigate programmatically.

    const pathname = usePathname()
    //Get the current pathname (URL path) using the usePathname hook

    const activeFilter = searchParams.get("capacity") ?? "all";
   //Get the cuurent filter that is active,if it dosent exist,give it a fall back value of all

   
    console.log(searchParams,'searchparams')
    console.log(pathname,'pathname')
    const handleFilter=(filter)=>{
        const params = new URLSearchParams(searchParams)
        //Create a new URLSearchParams object with the current search parameters


        params.set("capacity",filter)

        //Set the "capacity" parameter in the URL search parameters to the selected filter value

console.log(params ,'new url');
        router.replace(`${pathname}?${params.toString()}`,{scroll:false});
        // Use the router object to replace the current URL with the new one, including the updated search parameters

    }
    return (
        <div className="border border-primary-800 flex">
            <Button handleFilter={handleFilter} filter="all" activeFilter={activeFilter}>All Cabins</Button>
            <Button handleFilter={handleFilter} filter="small" activeFilter={activeFilter}>1&mdash; 3 guests</Button>
            <Button handleFilter={handleFilter} filter="medium" activeFilter={activeFilter}>4&mdash; 7 guests</Button>
            <Button handleFilter={handleFilter} filter="large" activeFilter={activeFilter}>8&mdash; 12 guests</Button>
            {/* <button onClick={()=>handleFilter("all")} className="px-5 py-2 hover:bg-primary-700">All Cabins</button> */}
       
        </div>
    )
}
export default Filter


const Button = ({filter,handleFilter,activeFilter,children})=>{
    return (
        <button  onClick={()=>handleFilter(filter)}
         className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" :" "}`}>{children}</button>
    )
}

// Explanations

//useSearchParams is used to get the search parameters (also known as query parameters) from the URL.
//This hook allows you to read and manipulate the key-value pairs present in the URL's query string.
//Example: For a URL like https://example.com/page?filter=small&sort=asc, useSearchParams helps you access filter=small and sort=asc.

// usePathname is used to get the pathname part of the URL.
// This hook allows you to read the current path of the URL, excluding the query string and hash fragment.
//https://example.com/page?filter=small&sort=asc, usePathname helps you access /page