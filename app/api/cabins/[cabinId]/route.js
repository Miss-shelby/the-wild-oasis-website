import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export const GET= async (request,{params}) =>{
   const {cabinId} = params;
   try{
    const [cabin,bookedDate]= await Promise.all([getCabin(cabinId),getBookedDatesByCabinId(cabinId)])
    return Response.json({cabin,bookedDate})
   }
   catch{
    return Response.json({message:"cabin not found"})
   }
   
}