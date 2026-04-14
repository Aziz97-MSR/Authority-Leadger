import { useEffect, useState } from "react"
import Banner from "./Banner"
import Text from "./Text"

const Home = () =>
{

    const [section, setSection ] = useState([])
    useEffect(()=>
        {
            fetch('http://localhost:8000/hero').then(res=>res.json()).then(data=>setSection(data))
        },[section])
    return(
        <section className="my-[220px] grid grid-cols-1 md:grid-cols-2 gap-[24px] px-[32px]">
            <Text section={section[0]}></Text>
            <Banner section={section}></Banner>
        </section>
    )
}

export default Home