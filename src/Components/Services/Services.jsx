import useServices from "../../Hooks/useServices"
import Service from "./Service"

const Services = () =>
{
    const [services, setServices] = useServices()

    return(
        <article className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {
                services?.map(service=><Service key={service?.id} product={service}></Service>)
            }
        </article>
    )
}

export default Services