const Nav = () => {
    return (
        <section className="bg-[#fff] px-[32px] py-[16px]">
            <nav className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Authority Ledger</h2>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Home</button></li>
                        <li><button>Service</button></li>
                        <li><button>Case Studies</button></li>
                    </ul>
                </div>
                <div>
                    <button className="text-[#fff] bg-[#000] py-[10px] px-[24px] rounded-[4px]">Get Started</button>
                </div>
            </nav>
        </section>
    )
}

export default Nav