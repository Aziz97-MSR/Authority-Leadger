const Nav = () =>
{
    return(
        <section>
            <nav className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Authority Ledger</h2>
                </div>
                <div className="flex justify-between items-center">
                    <p>Home</p>
                    <p>Service</p>
                    <p>Case Studies</p>
                </div>
                <div>
                    <button>Get Started</button>
                </div>
            </nav>
        </section>
    )
}

export default Nav