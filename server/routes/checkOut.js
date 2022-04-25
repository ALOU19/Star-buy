
const stripe = require("stripe")(process.env.STRIPE_API_SECRET_KEY);

router.post("/pay", async (req, res) => {
  const { title, quantity,image, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'], 
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: title,
            images:[image]
          },
          unit_amount: price * 100,
        },
        quantity: quantity,
      },
    ],
    mode: "payment",
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })
  res.send(session.url)
});

module.exports = router;