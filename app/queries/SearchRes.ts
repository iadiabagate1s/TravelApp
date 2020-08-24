import axios from 'axios'
const TICKET_MASTER_KEY = 'OR7t52i81Lw1AsKFuoEiF86z9ASI6hVT'
const BASE_URL ='https://app.ticketmaster.com/discovery/v2/'
const GoogleApi ='AIzaSyCc-_ymQ6Qb3GJoTmwT8yZvK-7y_e7Q9uo'
const YelpKey = 'gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx'
const YelpUrl = 'https://api.yelp.com/v3'
export default async function SearchResli(search, ctx: Record<any, unknown> = {}){

try {
  const res = await axios.get(`https://api.yelp.com/v3/events?categories=${search.term}&location=${search.location}&start_date<=${+ new Date}&sort_on=time_start&radius=40000&limit=25`,{
    headers:{
      Authorization: `Bearer ${YelpKey}`

    }
  })
 
  const resarr= res.data.events
//   const resarr= res.data._embedded.events

  return resarr
}catch(error){
  return {message : error}
}
}