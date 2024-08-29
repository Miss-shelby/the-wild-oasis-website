import React, { Suspense } from 'react'
import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';
import CabinList from '../_components/CabinList';
import Spinner from '../_components/Spinner';
import Filter from '../_components/filter';
import ReservationReminder from '../_components/ReservationReminder';

//to force it to render dynamically
export const revalidate=15;
//the revalidate no longer work because the page is now rendered dynamically because of search params
export const metadata={
  title:'Cabins',
}
const Page= ({searchParams})=> {

const filter = searchParams?.capacity ?? "all";

console.log(filter,'filter');


// The nullish coalescing operator (??) checks if the result of searchParams?.capacity is null or undefined. 
// If it is, "all" is used as a default value.
//search paarms is used to get the search params atached to a url  e.g http://localhost:3001/cabins?capacity=all,searc params here is capacity = small
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className='flex justify-end mb-8'>
      <Filter/>
      </div >
      <Suspense fallback={<Spinner/>} key={filter}>
     <CabinList filter={filter}/>
      <ReservationReminder/>
      </Suspense>
    </div>
  );
}
export default Page;
//we added key so that the suspense works for the children of the cabinlist taht we are suspending
