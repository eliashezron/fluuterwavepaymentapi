import express from "express";
import { ug_mobile_money, getPaymentLink} from "./controller.js";

const router = express.Router()

router.post('/', getPaymentLink)
router.post('/mm', ug_mobile_money)

export default router