import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { createTransport } from "nodemailer";
import { email, password } from "./details.json";

const app = express();

app.use(cors());
app.use(json());

app.listen(3000, () => {
  console.log("The server started on port 3000!");
});

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Welcome</h1>");
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  const user = req.body;

  if (!user.name || !user.email || !user.message) {
    return res.status(400).json({ msg: "Please fill all the fields." });
  }

  sendMail(user)
    .then(() => res.status(200).json({ msg: 'Thank you for contacting Nonkululeko!' }))
    .catch(() => res.status(500).json({ msg: 'There was an error on the server.' }));
});

async function sendMail(user) {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: password
    }
  });

  const mailOptions = {
    from: `"${user.name}" <${user.email}>`,
    to: email,
    subject: "Contact Request",
    html:`
    <h3>Informations<h3/>
    <ul>
        <li>Name: ${user.name}</li>
        <li>Email: ${user.email}</li>
    </ul>
    <h3>Message<h3/>
    <p>${user.message}<p/>
`
  };

  return transporter.sendMail(mailOptions);
}
