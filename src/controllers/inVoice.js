import { findUserAndUpdate, getUserById } from "../service/user.js";
import { inVoice } from "../models/invoice.js";
import { getOrderById } from "../service/order.js"
import { priceCalculate } from "../service/invoice.js";

export const createInVoice = async (req, res) => {
  const { orderId, count, price } = req.body;
  const userId = req.user.id
  const user = await getUserById(userId);
  const order = await getOrderById(orderId);
  const calc = await priceCalculate(count, price, user.wallet)
  const totalPrice = count * price;
  if(!calc.status) {
    return res.status(402).json(calc);
  };
  const userData = await findUserAndUpdate({
    _id: userId
  }, {
    wallet: calc.wallet
  },{new: true});
  // const orderData = await Orders.findOneAndUpdate({
  //   _id: orderId
  // }, {
  //   count: order.count - count
  // }, {new: true})
  // console.log(orderData);

  const inVoiceRes = await inVoice.create({
    custom: userId,
    order: orderId,
    price: totalPrice,
    count,
  });
  return res.json(inVoiceRes);

}
export const getInVoices =async(req,res) =>{

const data= await inVoice.find({}).populate(["custom", {
  path : 'order',
  populate : {
    path : 'author'
  }
}])
res.json(data)
}