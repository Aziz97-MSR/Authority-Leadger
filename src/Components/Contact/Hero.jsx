const Hero = () => {
    return (
        <div>
            <h2 className="text-[48px] font-bold mb-10">Ready to Build your <span className="block text-[#2180FF]">Autohrity</span></h2>
            <p className="text-[18px] max-w-[448px] mb-10">
                Schedule a discovery call with our architectural lead
                to audit your current performance and map your
                growth path.
            </p>
            <div className="flex items-center gap-[24px] mb-[24px] ">
                <div className="bg-[#D2E0FE] flex items-center justify-center w-[40px] h-[40px] rounded-[12px]">
                    <i class="fa-regular fa-envelope text-[#2180FF]"></i>
                </div>
                <p>hello@authorityledger.com</p>
            </div>
            <div className="flex items-center gap-[24px] ">
                <div className="bg-[#D2E0FE] flex items-center justify-center w-[40px] h-[40px] rounded-[12px]">
                    <i class="fa-solid fa-location-dot text-[#2180FF]"></i>
                </div>
                <p>Financial District, New York</p>
            </div>
        </div>
    )
}

export default Hero