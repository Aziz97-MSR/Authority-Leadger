const Nav = () => {
    return (
        <section className="">
            <div className="px-[32px] py-[16px] max-lg:collapse bg-[#fff] lg:mb-48  w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-center md:navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <button className="btn btn-ghost text-xl"> <h2 className="text-xl font-bold">Authority Ledger</h2></button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="text-[16px] semibold"><button>Home</button></li>
                            <li className="text-[16px] semibold"><button>Service</button></li>
                            <li className="text-[16px] semibold"><button>Case Studies</button></li>
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <button className="text-[#fff] bg-[#000] py-[10px] px-[24px] rounded-[4px]">Get Started</button>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <li className="text-[16px] semibold"><button>Home</button></li>
                        <li className="text-[16px] semibold"><button>Service</button></li>
                        <li className="text-[16px] semibold"><button>Case Studies</button></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Nav