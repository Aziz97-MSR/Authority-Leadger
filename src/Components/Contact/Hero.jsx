const Hero = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">Ready to Build your <span className="block text-[#2180FF]">Autohrity</span></h2>
            <p>
                Schedule a discovery call with our architectural lead
                to audit your current performance and map your
                growth path.
            </p>
            <div className="flex items-center gap-[24px]">
                <p><i class="fa-solid fa-envelope"></i></p>
                <p>hello@authorityledger.com</p>
            </div>
            <div className="flex items-center gap-[24px]">
                <p><i class="fa-solid fa-location-dot"></i></p>
                <p>Financial District, New York</p>
            </div>
        </div>
    )
}

export default Hero