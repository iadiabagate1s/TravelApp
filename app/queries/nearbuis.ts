import axios from 'axios'
const TICKET_MASTER_KEY = 'OR7t52i81Lw1AsKFuoEiF86z9ASI6hVT'
const BASE_URL ='https://app.ticketmaster.com/discovery/v2/'
const GoogleApi ='AIzaSyCc-_ymQ6Qb3GJoTmwT8yZvK-7y_e7Q9uo'
const YelpKey = 'gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx'
const YelpUrl = 'https://api.yelp.com/v3'
export default async function nearBuis(coords, ctx: Record<any, unknown> = {}){


  const res = await axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${coords.lat}&longitude=${coords.lon}&radius=40000&attributes=hot_and_new&limit=15`,{
    headers:{
      Authorization: `Bearer ${YelpKey}`

    }
  })
 
  const resarr= res.data.businesses
//   const resarr= res.data._embedded.events

  return resarr
}
