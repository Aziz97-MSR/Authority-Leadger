import Ratings from "./Ratings"

const Testmony = () => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px]">
            <div>
                <div>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                </div>
                <div>
                    <p>
                        "The Authority Ledger didn't just give us a
                        strategy; they rebuilt our entire digital
                        presence. Our lead volume has tripled in
                        under six months."
                    </p>
                </div>

                <div className="flex gap-x-[16px]">
                    <div>
                        <img src="/pix2.jpg"/>
                    </div>
                    <div>
                        <h4>Marcus Sterling</h4>
                        <p>CEO, Quantico System</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                    <Ratings></Ratings>
                </div>
                <div>
                    <p>
                        "Their data-driven approach removed
                        the guesswork from our marketing
                        budget. ROI transparency is finally a
                        reality for us."
                    </p>
                </div>

                <div className="flex gap-x-[16px]">
                    <div>
                        <img src="/pix3.jpg"/>
                    </div>
                    <div>
                        <h4>Sarah Chen</h4>
                        <p>Markting Director, Nova Retail</p>
                    </div>
                </div>

            </div>

        </article>)
}

export default Testmony