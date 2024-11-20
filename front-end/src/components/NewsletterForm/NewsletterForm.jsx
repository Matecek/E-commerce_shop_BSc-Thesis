import { Form } from "react-router-dom";
import { useState } from "react";
import { CenterContent } from "../CenterContent/CenterContent";
import { subscribeToNewsletter } from "../../api/sendNewsletter";

import styles from "./NewsletterForm.module.css";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // Typ komunikatu (sukces/błąd)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { success, message } = await subscribeToNewsletter(email);
        setMessage(message);
        setMessageType(success ? "success" : "error");
    };

    return (
        <CenterContent>
            <div className={styles.newsletterForm}>
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
                    <p className={`${styles.message} ${styles[messageType]}`}>
                        {message}
                    </p>
                )}
            </div>
        </CenterContent>
    );
}
