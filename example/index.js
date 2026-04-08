const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();


const port = 8000;


app.use(cors())
app.use(express.json())


async function run()
{
    app.get("/", async(req, res)=>
    {
        res.send("Hello example")
    })
}


run().catch(console.dir)

app.get('/' , (req , res)=>
{
    res.send("Example server is running")
})

app.listen(port, () => {
    console.log("Example server is runnig in port : ", port);
})