import { Fade } from "react-awesome-reveal"
import Hero from "./Hero"
import Services from "./Services"

const Second = () => {
    return (
        <section className="px-[32px] mt-20 mb-10">
            <Fade direction="up">
                <Hero></Hero>
                <Services></Services>
            </Fade>
        </section>
    )
}

export default Second