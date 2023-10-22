import HomeButton from "@/components/HomeButton";
import { getForecast } from "../utils/getForecast";
import { Metadata } from "next";
  
type Props = {
    params: {
        location : string;
    },
    searchParams:{
        name:string;
    }
}

export function generateMetadata ({params ,searchParams}: Props) {
    return {
        title : `날씨 앱 - ${searchParams.name}`,
        description : "날씨를 알려드립니다."
    }
}

export default async function Detail ({params,searchParams}:Props) {
    const name =searchParams.name;
    const res = await getForecast(params.location);
    console.log(res)
   

    return <>
        <h1>{name}의 3일 예보</h1>
        <ul>
            {res.forecast.forecastday.map(el => <li key={el.date}>
                {el.date} / {el.day.avgtemp_c}
                </li>)}
        </ul>
        <HomeButton/>
    </>
}