export const priceCalculate = async (count, price, availablePrice) => {
  const totalPrice = count * price;
  if(totalPrice > availablePrice) {
    return {
      status: 0,
      message: 'no enough money'
    }
  };
  return {
    status: 1,
    wallet: availablePrice - totalPrice
  }
}