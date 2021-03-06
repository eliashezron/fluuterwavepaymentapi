import path from 'path'
import Flutterwave from 'flutterwave-node-v3'
import got from 'got'
import dotenv from 'dotenv'

const __dirname = path.resolve(path.dirname(''));
 dotenv.config({path:__dirname + '/.env'})

const flw = new Flutterwave("FLWPUBK_TEST-e058a54268fee6f2fce4586e2a3c9a01-X", process.env.SECRET_KEY);

const ug_mobile_money =  async (req, res) =>{

    const {amount} = req.body
 
    try {

        const payload = {
            "tx_ref": "MC-1585230950508",
            amount,
            "email": "olufemi@flw.com",
            "phone_number": "256772799708",
            "currency":"UGX",
            "fullname": "Olufemi Obafunmiso",
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            "voucher": "128373", //This is the voucher code generated by the customer. It is meant to be passed in the initial charge request. (only for Vodafone cash)
            "network": "MTN"
        }

       const response =  await flw.MobileMoney.uganda(payload)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}
 
 



const getPaymentLink = async(req, res)=>{

try {
    const {amount, currency} = req.body
    
    const response = await got.post("https://api.flutterwave.com/v3/payments", {
        headers: {
            Authorization: `Bearer ${process.env.SECRET_KEY}`
        },
        json: {
            tx_ref: "hooli-tx-1920bbtytty",
            amount,
            currency,
            redirect_url: "https://funamu.com",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a"
            },
            customer: {
                email: "user@gmail.com",
                phonenumber: "080****4528",
                name: "Yemi Desola"
            },
            customizations: {
                title: "Pied Piper Payments",
                logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
            }
        }
    }).json();
} catch (err) {
    console.log(err.code);
    console.log(err.response.body);
}
}

export {getPaymentLink, ug_mobile_money}