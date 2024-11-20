import { useEffect, useState } from "react";
import { subscribeToNewsletter } from "../../api/sendNewsletter";

import styles from "./NewsletterPopUp.module.css";

export function NewsletterPopUp({ isVisible, onClose }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {
        //wyświetlanie okna modalnego z newsletterem
        const hasVisited = localStorage.getItem("hasVisitedHome");
        if (!hasVisited && isVisible) {
            setIsModalVisible(true);
            localStorage.setItem("hasVisitedHome", "true");
        }
    }, [isVisible]);

    if (!isModalVisible) return null;

    const handleSubmit = async (e) => {
        //obsługa przycisku zapisz się
        e.preventDefault();
        const { success, message } = await subscribeToNewsletter(email);
        setMessage(message);
        setMessageType(success ? "success" : "error");
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button
                    onClick={() => {
                        setIsModalVisible(false);
                        onClose();
                    }}
                >
                    X
                </button>
                <div className={styles.form}>
                    <h2>Zapisz się do naszego newslettera!</h2>
                    <p>
                        Nie przegap najnowszych informacji i ofert specjalnych.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="text"
                            placeholder="Podaj swój adres e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Zapisz się</button>
                    </form>
                    {message && (
                        <p
                            className={`${styles.message} ${styles[messageType]}`}
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
