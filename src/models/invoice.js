import mongoose, { Schema } from "mongoose";

const inVoiceSchema = new Schema({
  custom: {type: Schema.Types.ObjectId, ref: "users" },
  price: {type: Number, require: true},
  count: {type: Number},
  order: {type: Schema.Types.ObjectId, ref: "orders" }
})

export const inVoice = mongoose.model("invoice", inVoiceSchema)