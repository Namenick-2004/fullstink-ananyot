function generateTemotd() {
    const rendompart = Math.random().toString(36).substring(2,8);
    return rendompart.toUpperCase();
}
const orderId = generateTemotd();
console.log(`generated order ID: ${orderId}`);