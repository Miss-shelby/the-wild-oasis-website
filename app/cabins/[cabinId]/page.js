import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

//generating dynamic metadata for our cabins

export const generateMetadata = async ({params})=>{
    const  { name } = await getCabin(params.cabinId);
    return {title: `Cabin ${name}` };
}

//function to let know nextjs know the possible url of dynamic segment
// inorder to export/render them as static pages

export const generateStaticParams= async ()=>{
  const cabins = await getCabins()
  const ids = cabins.map((cabin)=>({cabinId:String(cabin.id)}))
  return ids;
}


const  Page = async ({params}) =>{
    const cabin = await getCabin(params.cabinId);
// const settings = await getSettings()
// const bookedDates = await getBookedDatesByCabinId(params.cabinId)
    //we are fetching this data here becasause we dont want to fetch data  client component
    //we use promse.all when we have multiple fetch fequest on a page that dosent depend on each others,
  // so it fetches data in parrel so the fetch request dosent block each other from happening but thats not the best we can create component for each fecth request
  // and stream them in when theyre ready with suspense


 


  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

    
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image   src={image} fill className="object-cover" alt={`Cabin ${name}`} />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{String(description)}</TextExpander>
           </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-0 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
       <Suspense fallback={<Spinner/>}>
       <Reservation cabin={cabin}/>
       </Suspense>
      </div>
    </div>
  );
}
export default Page;

// To fully leverage ISR, ensure that revalidate is used if you need periodic updates to your static 
// pages without a full rebuild. This is particularly useful for content that changes occasionally
//  but doesn't need to be fetched on every request.