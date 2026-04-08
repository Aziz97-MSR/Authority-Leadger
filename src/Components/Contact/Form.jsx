const Form = () => {
    return (
        <div className="bg-[#fff] px-[40px] pt-[40px] pb-[56px] w-[560px]">
            <form>
                <div className="my-[16px]">
                    <label className="font-semibold text-[12px] mb-5 text-[#44474D]">FULL NAME</label>
                    <input className="contactInput block  w-[478px]" value="Jone Doe"/>
                </div>
                <div className="my-[16px]">
                    <label className="font-semibold text-[12px] mb-5 text-[#44474D]">COMPANY NAME</label>
                    <input className="contactInput block w-[478px]" value="john@company.com"/>
                </div>
                <div className="my-[16px]">
                    <label className="font-semibold text-[12px] mb-5 text-[#44474D]">Projects Goal</label>
                    <textarea className="contactInput block w-[478px] h-[100px]" value="Tell us about your growth targets..."></textarea>
                </div>
                <button className="bg-[#000] my-[12px] py-[20px] text-[#fff] w-[478px]">Submit Inquiry</button>
            </form>
        </div>
    )
}

export default Form