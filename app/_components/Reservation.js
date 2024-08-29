import { auth } from "../_lib/auth"
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"
import LoginMessage from "./LoginMessage"

const Reservation = async ({cabin})=>{
    const [settings,bookedDate] =
    await  Promise.all([getSettings(),getBookedDatesByCabinId(cabin.id),])
    const session = await auth()
    return <div>
    <div className="grid grid-cols-2 space-x-10 w-full border border-primary-800 min-h-[400px]">
          <DateSelector settings ={settings} bookedDate={bookedDate} cabin={cabin}/>
         { session?.user ?  <ReservationForm user={session.user} cabin={cabin}/> : <LoginMessage/>}
        </div>
    </div>
}
export default Reservation