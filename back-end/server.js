const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "Gmail", // Serwis e-mail
    auth: {
        user: "mateusz.wojtas777@gmail.com", //]
        pass: "kccp shgv xfcz yndw", // Hasło aplikacji
    },
});

app.post("/subscribe", (req, res) => {
    const { email } = req.body;

    if (!email) {
        // Sprawdzenie, czy e-mail został podany
        return res.status(400).send({ message: "E-mail is required" });
    }

    const mailOptions = {
        // Konfiguracja wiadomości e-mail
        from: "mateusz.wojtas777@gmail.com",
        to: email,
        subject: "Dodano Cię do newslettera",
        text: "Dziękujemy za zapisanie się do naszego newslettera!",
    };

    transporter.sendMail(mailOptions, (error) => {
        // Wysłanie wiadomości e-mail
        if (error) {
            // Obsługa błędu
            return res
                .status(500)
                .send({ message: "Coś poszło nie tak.", error });
        }
        res.send({ message: "Email sent successfully!" });
    });
});

app.listen(5000);
