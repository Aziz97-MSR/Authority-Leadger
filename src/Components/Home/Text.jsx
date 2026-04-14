import { useState } from "react"

const Text = (props) => 
{
    const { section } = props
    const [ status, setStatus ] = useState({}) 
    const changeInDatabase = () =>
    {
        const temp = " "
        const newBtn1 = "Parner With Us"
        const newBtn2 = "View Services"

        const updateDoc = {button1: newBtn1, button2: newBtn2}


        fetch(`http://localhost:8000/hero/${section?._id}`, {
            method : 'PUT',
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        }).then(res=>res.json()).then(data=>setStatus(data))
    }

    return (
        <article className="">
            <div initial={{opacity : 0}} animate={{opacity: 1, transition: {duration: 5}}}>
                <h3 className="text-[#2180FF] text-[12px] mb-5">{section?.subtitle}</h3>
                <h1 className=" text-[50px] lg:text-[80px]  font-bold mt-10 mb-5">{section?.title?.span1} <span className="block text-[#2180FF]">{section?.title?.span2}</span></h1>
                <p className="mt-[8px] max-w-[576px] text-[20px] text-[#44474D]">
                    {section?.paragraph?.span1}
                    <span className="block">{section?.paragraph?.span2}</span>
                    <span className="block">{section?.paragraph?.span3}</span>
                </p>
                <div className="mt-[16px]  flex gap-[16px]">
                    <button onClick={changeInDatabase} className="w-[200px] bg-black text-white py-[16px] px-[32px] rounded-[4px]">{section?.button1} <i class={`${section?.icon}`}></i></button>
                    <button className="w-[200px] bg-[#ccc]  py-[16px] px-[32px] rounded-[4px]">{section?.button2}</button>
                </div>
            </div>

        </article>
    )
}

export default Text