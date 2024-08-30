import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export const middleware=(request)=>{
//     console.log(request);
//     return NextResponse.redirect(new URL ("/about", request.url))

// }

//using next middleware that comes from nextauth,we use our auth function that we used to get user session previously as it also serves as middleware
//next we add a callback to our auth config function in the auth.js file
export const middleware = auth;
export const config ={
    matcher:["/account"]
}

//middleware gets acces to incoming request
//middleware runs on every route,so we use matcher to specify the route it should only run 
//we use the redirect to redirect the user back to the route we specify if they try to access the route in matcher array
//so basically the route in matcher array is protected