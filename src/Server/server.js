let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let Razorpay = require('razorpay')
let shortid = require('shortid')

let app = express()
const razorpay = new Razorpay(
    {
        key_id: "rzp_test_h9T9QKqqcisLVg",
        key_secret: "ydaO8ZVXkLXf4mooKEBGpPFj"
    }
)
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.text())

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send("msg data received")
})

app.post('/razorpay',async (req,res)=>{
    console.log("hii");
    const payment_capture = 1
    const amount = req.body.totalPrice
    const currency = 'INR'
    const options={
        amount:amount*100,
        currency:currency,
        receipt:shortid.generate(),
        payment_capture:payment_capture
    }
    try{
        const response  = await razorpay.orders.create(options)
        console.log(response);
        res.json(
            response
        )
    }
    catch(error){
        console.log(error);
    }
})



app.listen(8000||process.env, () => {
    console.log("server is running at port 8000")
})