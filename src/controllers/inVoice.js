import { Users } from "../models/users.js";
import { inVoice } from "../models/invoice.js";


export const createInVoice = async (req, res) => {
  const { orderId, count, price } = req.body;
  const userId = req.user.id
  const user = await Users.findById(userId);
  const totalPrice = count * price;
  if(totalPrice > user.wallet) {
    return res.status(402).json({ message: 'no enough money' });
  };
  const userData = await Users.findOneAndUpdate({
    _id: userId
  }, {
    wallet: user.wallet - totalPrice
  },{new: true});

  console.log(userData);
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