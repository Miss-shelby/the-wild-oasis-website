//contains our server actions,we need the server actions inorder to implement the auth flow on the server
//we create a signin action that will call the signin function from the next 
//auth config because we cant call the function directly on the signIn button component as it is a server component 

'use server'

import { signIn, signOut } from "./auth"

export const signInAction = async ()=>{
    await signIn("google",{redirectTo:"/account"})
}

export const signOutAction = async ()=>{
    await signOut({redirectTo:"/"})
}

//the signin function takes two argument,the first is the provider,nb:if we have more than
//one provider we have to loop through them
//second argument is the route/page we want to redirect to on succesfull login