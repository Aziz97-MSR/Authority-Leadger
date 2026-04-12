import { motion } from 'motion/react'
const Banner = () => {
    return (
        <div className="relative">
            <motion.div initial={{ y: -20, x: 10 }} animate={{
                x: [0, 20, 20, 0, 0],
                y: [0, 0, 20, 20, 0],
                rotate: [0, 2, 0, -2, 0], transition: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease:'linear' }
            }}>

                <img className="w-[600px] h-[600px]" src="/pix1.jpg" />
            </motion.div>


            <div className="absolute top-0 right-0 lg:right-28 p-5 bg-[#fff] rounded-[8px]">
                <img className='w-[25px] h-[25px]' src="/floationg.svg" />
                <h3 className="text-[24px] font-bold">+142%</h3>
                <p className='text-[#44474D] text-[12px] font-medium'>Monthly ROI</p>
            </div>
        </div>
    )
}

export default Banner