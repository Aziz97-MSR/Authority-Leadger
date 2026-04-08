const Service = (props) =>
{
    const { product } = props
    const { title, description, icon } = product
    return(
        <div className="bg-[#F2F4F6] shadow-md rounded-[8px] p-10">
            <div className="mb-10 bg-[#D2E0FE]  w-[56px] h-[56px]">
                <img className="mx-auto " src={icon}></img>
            </div>
            <h2 className="text-[24px] font-bold mb-5">{title}</h2>
            
            <p className="mb-5 text-[16px] w-[304px]">{description}</p>
            <div className=" flex items-center gap-[8px]">
                <p className="text-[14px] font-semibold">Learn More</p>
                <img src="/linkicon.svg"/>
            </div>
        </div>
    )
}

export default Service