const Service = (props) =>
{
    const { product } = props
    const { title, description, icon } = product
    return(
        <div className="bg-[#F2F4F6] shadow-md rounded-[8px] p-10">
            <div className="">
                <i className={`${icon}`}></i>
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
            
            <p>{description}</p>
        </div>
    )
}

export default Service