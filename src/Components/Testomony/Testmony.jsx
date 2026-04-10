import Ratings from "./Ratings"

const Testmony = () => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="bg-[#fff] p-[16px] lg:p-[48px] rounded-[8px]">
                <div className="mb-10">
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                </div>
                <div>
                    <p className="font-medium text-[24px] mb-10">
                        "The Authority Ledger didn't just give us a
                        strategy; they rebuilt our entire digital
                        presence. Our lead volume has tripled in
                        under six months."
                    </p>
                </div>

                <div className="flex gap-x-[16px]">
                    <div className="">
                        <img className="w-[48px] h-[48px] rounded-[12px]" src="/pix2.jpg"/>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[16px]">Marcus Sterling</h4>
                        <p className="font-medium text-[14px] text-[#44474D]">CEO, Quantico System</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff] p-[16px] lg:p-[48px] rounded-[8px]">
                <div className="mb-10">
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                </div>
                <div>
                    <p className="font-medium text-[24px] mb-10">
                        "Their data-driven approach removed
                        the guesswork from our marketing
                        budget. ROI transparency is finally a
                        reality for us."
                    </p>
                </div>

                <div className="flex gap-x-[16px]">
                    <div>
                        <img className="w-[48px] h-[48px] rounded-[12px]" src="/pix3.jpg"/>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[16px]">Sarah Chen</h4>
                        <p className="font-medium text-[14px] text-[#44474D]">Markting Director, Nova Retail</p>
                    </div>
                </div>

            </div>

        </article>)
}

export default Testmony