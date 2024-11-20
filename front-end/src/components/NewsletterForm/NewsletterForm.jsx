import { Form } from "react-router-dom";
import { useState } from "react";
import { CenterContent } from "../CenterContent/CenterContent";

import style from "./NewsletterForm.module.css";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // Typ komunikatu (sukces/błąd)

    const handleSubmit = async (e) => {
        // Funkcja obsługująca wysłanie formularza
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Dziękujemy za zapisanie się do newslettera!");
                setMessageType("success"); // Typ komunikatu - sukces
            } else {
                setMessage(data.message || "Coś poszło nie tak.");
                setMessageType("error"); // Typ komunikatu - błąd
            }
        } catch {
            setMessage("Nie udało się wysłać wiadomości.");
            setMessageType("error"); // Typ komunikatu - błąd
        }
    };

    return (
        <CenterContent>
            <div className={style.newsletterForm}>
                <h1>Zapisz się do newslettera</h1>
                <Form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            placeholder="Podaj swój adres e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <button type="submit">Zapisz się</button>
                </Form>
                {/* Jeśli istnieje komunikat, wyświetl go z odpowiednią klasą */}
                {message && (
                    <p className={`${style.message} ${style[messageType]}`}>
                        {message}
                    </p>
                )}
            </div>
        </CenterContent>
    );
}
