import { motion } from 'motion/react'
const Banner = () => {
    return (
        <div className="relative">
            <motion.div>

                <img className="w-[600px] h-[600px]" src="/pix1.jpg" />
            </motion.div>


            <div className="absolute top-0 right-0 lg:right-28 p-5 bg-[#fff] rounded-[8px]">
                <img src="/floationg.svg" />
                <p className="">+142%</p>
                <p>Monthly ROI</p>
            </div>
        </div>
    )
}

export default Banner