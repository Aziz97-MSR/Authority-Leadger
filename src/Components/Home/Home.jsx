import Banner from "./Banner"
import Text from "./Text"

const Home = () =>
{
    return(
        <section className="my-[220px] grid grid-cols-1 md:grid-cols-2 gap-[24px] px-[32px]">
            <Text></Text>
            <Banner></Banner>
        </section>
    )
}

export default Home