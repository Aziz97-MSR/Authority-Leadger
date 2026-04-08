import Form from "./Form"
import Hero from "./Hero"

const Fourth = () =>
{
    return(
        <section className="my-[128px] px-[32px] grid grid-cols-1 md:grid-cols-2 gap-[96px]">
            <Hero></Hero>
            <Form></Form>
        </section>
    )
}


export default Fourth