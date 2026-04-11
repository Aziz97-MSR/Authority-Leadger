
import { motion } from 'motion/react'

const Service = (props) => {
    const { product } = props
    const { title, description, icon } = product
    return (
        <motion.div className='relative' initial="initial" whileHover='hover'>

            <motion.span className="absolute left-0 top-0 h-full origin-top w-1 bg-blue-500" variants={{
                initial: { scaleY: 0 },
                hover: { scaleY: 1 }
            }}></motion.span>

            <div className="bg-[#F2F4F6] shadow-md rounded-[8px] p-5 lg:p-10">
                <div className="mb-10 bg-[#D2E0FE] flex justify-center items-center w-[56px] h-[56px]">
                    <img className="" src={icon}></img>
                </div>
                <h2 className="text-[24px] font-bold mb-5">{title}</h2>

                <p className="mb-5 text-[16px] w-[304px]">{description}</p>
                <div className=" flex items-center gap-[8px]">
                    <p className="text-[14px] font-semibold">Learn More</p>
                    <img src="/linkicon.svg" />
                </div>
            </div>
        </motion.div>
    )
}

export default Service