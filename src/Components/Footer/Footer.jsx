const Footer = () => {
    return (
        <footer className="mx-[64px] px-[32px]">
            <article className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[48px]">
                <div>
                    <h2 className="text-xl font-bold mb-5">Authority Ledger</h2>
                    <p>
                        The premier choice for high-growth
                        enterprise marketing and digital
                        architecture.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-5">Company</h2>

                    <p className="mb-5">About Us</p>
                    <p className="mb-5">Case Studies</p>
                    <p>Careers</p>
                </div>

                <div>
                    
                    <h2 className="text-xl font-bold mb-5">Services</h2>

                    <p className="mb-5">Performance SEO</p>
                    <p className="mb-5">Paid Media</p>
                    <p>Brand Identity</p>
                </div>

                <div>
                    
                    <h2 className="text-xl font-bold mb-5">Connect</h2>

                    <p className="mb-5">LinkedIn</p>
                    <p className="mb-5">Instagram</p>
                    <p>Twitter (X)</p>
                </div>
            </article>

            <article className="flex justify-between items-center">
                <div>
                    <p>&copy; 2024Authority Ledger. All Right Reserved</p>
                </div>
                <div className="flex justify-between items-center gap-[32px]">
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                </div>
            </article>
        </footer>
    )
}

export default Footer