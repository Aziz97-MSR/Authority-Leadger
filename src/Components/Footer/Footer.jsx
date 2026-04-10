const Footer = () => {
    return (
        <footer className="bg-[#fff] py-[16px] py-[64px] px-[16px] md:px-[32px]">
            <article className="my-[20px] lg:my-[48px] grid grid-cols-1 lg:grid-cols-4 gap-[20px] lg:gap-[48px]">
                <div>
                    <h2 className="text-[18px] font-semibold mb-5">Authority Ledger</h2>
                    <p className="text-[#64748B] text-[14px] w-[268px] text-[14px]">
                        The premier choice for high-growth
                        enterprise marketing and digital
                        architecture.
                    </p>
                </div>

                <div>
                    <h2 className="text-[16px] font-semibold mb-5">Company</h2>

                    <p className="text-[#64748B] text-[14px] mb-5">About Us</p>
                    <p className="text-[#64748B] text-[14px] mb-5">Case Studies</p>
                    <p className="text-[#64748B] text-[14px]">Careers</p>
                </div>

                <div>
                    
                    <h2 className="text-[16px] font-semibold mb-5">Services</h2>

                    <p className="text-[#64748B] text-[14px] mb-5">Performance SEO</p>
                    <p className="text-[#64748B] text-[14px] mb-5">Paid Media</p>
                    <p className="text-[#64748B] text-[14px]">Brand Identity</p>
                </div>

                <div>
                    
                    <h2 className="text-[16px] font-semibold mb-5">Connect</h2>

                    <p className="text-[#64748B] text-[14px] mb-5">LinkedIn</p>
                    <p className="text-[#64748B] text-[14px] mb-5">Instagram</p>
                    <p className="text-[#64748B] text-[14px]">Twitter (X)</p>
                </div>
            </article>

            <article className="mt-[48px] flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <p className="text-[#64748B] text-[14px]">&copy; 2024 Authority Ledger. All Right Reserved</p>
                </div>
                <div className="flex justify-between items-center gap-[32px]">
                    <p className="text-[#64748B] text-[14px]">Privacy Policy</p>
                    <p className="text-[#64748B] text-[14px]">Terms of Services</p>
                </div>
            </article>
        </footer>
    )
}

export default Footer