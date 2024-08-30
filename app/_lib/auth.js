import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers:[
        Google({
            clientId:process.env.AUTH_GOOGLE_ID,
            clientSecret:process.env.AUTH_GOOGLE_SECRET
        }),
    ],
    //we authorize user  to access the protected route in our matcher array
    // user by checking if the user exists then we return true else we return  false if theres not 
    callbacks:{
        authorized({auth,request}){
            return !!auth?.user;
        },


         //we create a function that connects our authentication to database,checks if the user exists in our base and  So, basically, what we need to do here 
    //is that whenever a user signs in, we need to check if there is already a guest here with that ID ie email  in the table.And if so, we just store the information,
  //like, for example, the guest ID on the session,and then from there on, our application knows the guest that has been logged in. and if user  dosent exists  ,
    //creates a new user with their details from google auth,this step comes after succesfull login 


        async signIn({user,account,profile}){
            try{
                const existingUser = await getGuest(user.email)
    
                if(!existingUser) await createGuest({
                    email:user.email,
                    fullName:user.name
                })
                return true
            } catch{
                return false
            }
        },
        //next step we update/add to  the session object with user/guest id from database after login
        async session ({session,user}){
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest.id;
            return session;
        }
    },

   

    



    //we add the pages because  we want the user to be directed to custom login page instaed of the google default login page when they acces the protected route 

    pages:{
        signIn:'/login'
    }
}

//we also export signin and signout from the nextauth inorder to connect our login and logout btn to google authentication flow
export const {auth,
    signIn,
    signOut,
    handlers:{GET,POST}, }=NextAuth(authConfig)

//  return !! auth?.user this stands for if user exists return true else return false
// which means if auth.user exists authorize them else dont authorize them