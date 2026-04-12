
const Text = () => {
    return (
        <article className="">
            <div initial={{opacity : 0}} animate={{opacity: 1, transition: {duration: 5}}}>
                <h3 className="text-[#2180FF] text-[12px] mb-5">SCALABLE INTELLIGENCE</h3>
                <h1 className=" text-[50px] lg:text-[80px]  font-bold mt-10 mb-5">Accelerate <span className="block text-[#2180FF]">Your Growth</span></h1>
                <p className="mt-[8px] max-w-[576px] text-[20px] text-[#44474D]">
                    We help high-growth companies scale with data-driven
                    <span className="block">marketing strategies that turn authority into measurable</span>
                    <span className="block">revenue.</span>
                </p>
                <div className="mt-[16px]  flex gap-[16px]">
                    <button className="w-[200px] bg-black text-white py-[16px] px-[32px] rounded-[4px]">Parner With Us <i class="fa-solid fa-arrow-right"></i></button>
                    <button className="w-[200px] bg-[#ccc]  py-[16px] px-[32px] rounded-[4px]">View Services</button>
                </div>
            </div>

        </article>
    )
}

export default Text