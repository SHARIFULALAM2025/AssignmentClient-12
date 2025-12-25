import { getService, getSingleProduct } from '@/action/server/service'
import BookingForm from '@/Components/BookingForm/BookingForm'
import { authOptions } from '@/lib/authOption'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const BookingPage = async ({ params }) => {
   const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  } 

  const cleanServiceData = await getSingleProduct(id)
  const ServiceData = {
    ...cleanServiceData,
    _id: cleanServiceData._id.toString(),
  }
  const CleanLocationData = await getService()
  const LocationData = CleanLocationData.map((item)=>({...item,_id:item._id?.toString()}))
  console.log(LocationData, ServiceData)
  return (
    <div>
      <BookingForm
        ServiceData={ServiceData}
        LocationData={LocationData}
        // session={session}
      ></BookingForm>
    </div>
  )
}

export default BookingPage
