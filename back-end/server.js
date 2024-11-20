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
        user: "mateusz.wojtas777@gmail.com", // E-mail nadawcy
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
        from: "MATT.com <mateusz.wojtas777@gmail.com>",
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
                    © 2024 Twoja Firma. Wszelkie prawa zastrzeżone.<br />
                    <a href="#" style="color: #ffa319; text-decoration: none;">Zarządzaj subskrypcjami</a> | 
                    <a href="#" style="color: #ffa319; text-decoration: none;">Zrezygnuj z subskrypcji</a>
                </p>
            </div>
        `,
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

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
