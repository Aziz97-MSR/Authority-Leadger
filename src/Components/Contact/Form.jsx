const Form = () => {
    return (
        <div className="bg-[#fff] px-[40px] pt-[40px] pt-[56px]">
            <form>
                <div className="my-[16px]">
                    <label className="font-semibold mb-5 text-[#44474D]">FULL NAME</label>
                    <input className="contactInput block  w-[478px]" placeholder="Jone Doe"/>
                </div>
                <div className="my-[16px]">
                    <label className="font-semibold mb-5 text-[#44474D]">COMPANY NAME</label>
                    <input className="contactInput block w-[478px]" placeholder="jone@company.com"/>
                </div>
                <div className="my-[16px]">
                    <label className="font-semibold mb-5 text-[#44474D]">Projects Goal</label>
                    <textarea className="contactInput block w-[478px] h-[100px]" placeholder="Tell us about your growth targets..."></textarea>
                </div>

            </form>
        </div>
    )
}

export default Form