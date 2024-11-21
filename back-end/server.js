require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
app.post("/subscribe", (req, res) => {
    const { email, phone } = req.body;

    if (!email && !phone) {
        return res
            .status(400)
            .send({ message: "E-mail lub telefon jest wymagany." });
    }

    if (email) {
        const mailOptions = {
            from: `MATT.com <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Dodano cię do naszego Newslettera!",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px;">
                <h1 style="color: #ffa319; text-align: center;">Witamy w naszym Newsletterze!</h1>
                <p style="font-size: 16px; line-height: 1.5; color: #333;">
                    Cieszymy się, że do nas dołączyłeś! Od teraz będziesz na bieżąco z naszymi najnowszymi wiadomościami, promocjami i ofertami specjalnymi.
                </p>
                <p style="font-size: 16px; line-height: 1.5; color: #333;">
                    Jeśli masz jakiekolwiek pytania, nie wahaj się <a href="mailto:mateusz.wojtas777@gmail.com" style="color: #ffa319; text-decoration: none;">skontaktować się z nami</a>.
                </p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                <p style="font-size: 14px; color: #777; text-align: center;">
                    © 2024 Mateusz Wojtas. Wszelkie prawa zastrzeżone.<br />
                    <a href="#" style="color: #ffa319; text-decoration: none;">Zarządzaj subskrypcjami</a> | 
                    <a href="#" style="color: #ffa319; text-decoration: none;">Zrezygnuj z subskrypcji</a>
                </p>
            </div>
        `,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return res.status(500).send({
                    message:
                        "Nie udało się wysłać wiadomości e-mail. Spróbuj ponownie.",
                    error,
                });
            }
            res.send({ message: "Email wysłany pomyślnie!" });
        });
    }

    if (phone) {
        twilioClient.messages
            .create({
                body: "Dziękujemy za zapisanie się do newslettera!",
                from: twilioPhoneNumber,
                to: phone,
            })
            .then(() => {
                res.send({ message: "SMS wysłany pomyślnie!" });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Nie udało się wysłać SMS-a.",
                    error,
                });
            });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
