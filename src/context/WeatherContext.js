import React, { 
    useState,
    useContext,
    createContext,
    useEffect
} from 'react'
import axios from 'axios'

require('dotenv').config()

const apiURL = `api.openweathermap.org/data/2.5/weather?`

const WeatherContext = createContext({
    curWeather: [],
    dailyWeather: [],
})

export const WeatherContextProvider = (props) => {
    const [curWeather, setCurWeather] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const apiRes = await axios.get(apiURL)
                
                //if this doesn't work check axios needs
                const resData = await apiRes.data

                console.log(`This is apiRes: ${apiRes} This is resData: ${resData}`)

                setCurWeather(resData)

            } catch(error){console.log(error)}
        }
        fetchData('curWeather')
    }, [])

    const [dailyWeather, setDailyWeather] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const apiRes = await axios.get(apiURL)
                
                //if this doesn't work check axios needs
                const resData = await apiRes.data

                console.log(`This is apiRes: ${apiRes} This is resData: ${resData}`)

                setDailyWeather(resData)

            } catch(error){console.log(error)}
        }
        fetchData('dailyWeather')
    }, [])

    console.log(`This is the curWeather: ${curWeather}`)
    console.log(curWeather)

    console.log(`This is the dailyWeather: ${dailyWeather}`)
    console.log(dailyWeather)

    return (
        <WeatherContext.Provider value={{ curWeather, dailyWeather }}>
        {props.children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => useContext(WeatherContext)