import { Fade } from "react-awesome-reveal"

const Text = () => {
    return (
        <article className="my-auto ">
            <Fade direction="up">
                <h3 className="text-[#2180FF] mb-5">SCALABLE INTELLIGENCE</h3>
                <h1 className="text-5xl font-bold mt-10 mb-5">Accelerate <span className="block text-[#2180FF]">Your Growth</span></h1>
                <p className="mt-[8px]">
                    We help high-growth companies scale with data-driven
                    marketing strategies that turn authority into measurable
                    revenue.
                </p>
                <div className="flex gap-[16px]">
                    <button className="bg-black text-white px-[16px] py-[32px] rounded-[4px] ">Parner With Us</button>
                    <button className="bg-[#ccc]  px-[16px] py-[32px] rounded-[4px]">View Services</button>
                </div>
            </Fade>

        </article>
    )
}

export default Text