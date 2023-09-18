const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { UserModel } = require("../modal/authModal");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await UserModel.findOne({ email });

  if (userExist) {
    return res
      .status(400)
      .json({ message: "User already exists, please log in." });
  }
  const hash = bcrypt.hashSync(password, 3);

  const user = new UserModel({ name, email, password: hash });

  await user.save();
  res.status(200).json({ message: "user registred successfully." });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "user is not exist" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    const token = jwt.sign({ userId: user._id }, "jaishreeram");
    res.status(200).json({ message: "Login successful.", token });
  } else {
    res.status(400).json({ message: "Wrong Password" });
  }
});

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

authRouter.post("/forget", async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "user not exist please register first" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FORGET_EMAIL,
      pass: process.env.FORGET_PASSWORD,
    },
  });
  const otp = generateOTP();
  const html = `
  <html>
  <head>
      <title>Forget Password OTP</title>
  </head>
  <body>
      <div style="background-color: #f2f2f2; padding: 20px;">
          <h2>Forget Password OTP</h2>
          <p>Your OTP for password reset is: <strong>${otp}</strong></p>
          <p>Please use this OTP to reset your password. This OTP is valid for a single use and will expire after use.</p>
          <p>If you did not request a password reset, please ignore this email.</p>
      </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: process.env.FORGET_EMAIL,
    to: email,
    subject: "Forgot Password OTP",
    text: `Your OTP for password reset is: ${otp}`,
    html,
    // html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ message: "Failed to send OTP" });
    } else {
      res.status(200).json({ otp });
    }
  });
});

authRouter.post("/checkout", async (req, res) => {
  const { token, address,total } = req.body;
  const decoded = jwt.verify(token, "jaishreeram");

  const userid = decoded.userId;

  const user = await UserModel.findOne({ _id: userid });

  const email = user.email;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FORGET_EMAIL,
      pass: process.env.FORGET_PASSWORD,
    },
  });
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  const html = `
  <html>
  <head>
      <title>Order Confirmation</title>
  </head>
  <body>
      <div style="background-color: #f2f2f2; padding: 20px;">
          <h2>Order Confirmation</h2>
          <p>Thank you for your order, <strong>${address.name}</strong>!</p>
          <p>Your order number is: <strong>${orderNumber}</strong></p>
          <p>Shipping Address:</p>
          <p>
              <strong>Name:</strong> ${address.name}<br>
              <strong>Mobile Number:</strong> ${address.mobile}<br>

              <strong>Address:</strong> ${address.street} ${address.city} ${address.zip} ${address.state} 
              
          </p>
          <p>We will process your order shortly. You will receive an email with the shipping details once your order is shipped.</p>
          <p>If you have any questions or concerns, please contact our customer support. Ecore@support.com</p>
          <br>
              <p>With Regards,<br>The Ecore Team</p>
      </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: process.env.FORGET_EMAIL,
    to: email,
    subject: "Ecore Shopping Receipt",
    text: `this is your ecore reciept:`,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send({ message: "Failed to send reciept" });
    } else {
      res.send("reciept sent successfully");
    }
  });
});

authRouter.post("/confirm", async (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 3);

  const user = await UserModel.findOneAndUpdate({ email }, { password: hash });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Something went wrong please try again" });
  }

  res.status(200).json({ message: "updated successfully" });
});

module.exports = { authRouter };
