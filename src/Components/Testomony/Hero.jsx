import { Fade } from "react-awesome-reveal"

const Hero = () => {
    return (
        <Fade direction="up">
            <article className="flex items-center gap-[16px] mb-10">
                <div className="w-[48px] h-[1px] bg-[#2180FF]"></div>
                <h2 className="font-bold text-[30px]">
                    Trusted by Industry Leaders
                </h2>
            </article>
        </Fade>
    )
}


export default Hero