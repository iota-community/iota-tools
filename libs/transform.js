export default (id, data) => {
  return {
    id: id,
    time: data.timestamp,
    quantity: data.qty,
    price: data.price
  }
}
