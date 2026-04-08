import { Bounce } from "react-awesome-reveal"

const Banner = () => {
    return (
        <div className="relative">
            <Bounce>
                <img className="w-[600px] h-[600px]" src="/pix1.jpg" />
            </Bounce>

            <div className="absolute top-0 right-28 p-5 bg-[#fff] rounded-[8px]">
                <img src="/floationg.svg"/>
                <p className="">+142%</p>
                <p>Monthly ROI</p>
            </div>
        </div>
    )
}

export default Banner