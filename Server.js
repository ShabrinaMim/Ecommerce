//const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const path = require("path");
const PORT = process.env.PORT || 4040;
const STRIPE_SECRET_KEY =
  "sk_test_51Jh096JEG44a6VQqc6pJQ9PZZLqYjsmNnnEI21M08LfRg5wsKb1Kn5VIralSytZFnQN7p1VKJWvnNpWizB8oYNfy00qyTv89GE";
const stripe = require("stripe")(STRIPE_SECRET_KEY);

//API

//App config
const app = express();

//Serve static files from the react app
app.use(express.static(path.join(__dirname, "build")));

//Middleware
app.use(cors()); //we are using cors for security reason
app.use(express.json());

//API routes
/*
app.get("/", function (req, res) {
  res.status(200).send("This is server");
});
*/

//Listen command

//exports.api = functions.https.onRequest(app); // it is needed for backend express running in cloud function
app.post("/payments/create", cors(), async function (req, res) {
  const total = req.query.total;
  const id = req.body.id;
  console.log("Payment Request Received for this amount", total);

  //Stripe codes
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, //subunits of the currency
      currency: "USD",
      description: "E-commerce Company",
      confirm: true,
      payment_method: id,
    });
    console.log("Payment", paymentIntent);
    //ok-created
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "build/index.html"));
});

app.listen(PORT, function () {
  console.log(`Example app listening at http://localhost:${PORT}`);
  console.log(path.join(__dirname));
});

//Example Endpoint
//   http://localhost:5001/clone-e6f51/us-central1/api
