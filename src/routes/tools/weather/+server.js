import { WEATHER_API_KEY } from "$env/static/private"
import { json } from "@sveltejs/kit"


export async function GET({ url }){
    const city = url.searchParams.get("city")
    const limit = 5

    const weatherUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=${limit}&appid=${WEATHER_API_KEY}`
    try {
        const response = await fetch(weatherUrl)
        const data = await response.json()
        return json(response)
    } catch(e){
        console.log(e)
        throw Error('Not working' + e)
    }
}