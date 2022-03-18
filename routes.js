import express from "express";
import { getPaymentLink } from "./controller";

const router = express.Router()

router.post('/getpaymentlink', getPaymentLink)

export default router