import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"

const Reservation = async ({cabin})=>{
    const [settings,bookedDate] =
    await  Promise.all([getSettings(),getBookedDatesByCabinId(cabin.id),])
    return <div>
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">

          <DateSelector settings ={settings} bookedDate={bookedDate} cabin={cabin}/>
          <ReservationForm cabin={cabin}/>
        </div>
    </div>
}
export default Reservation