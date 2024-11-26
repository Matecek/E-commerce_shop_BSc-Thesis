import { useState, useEffect } from "react";
import { subscribeToNewsletter } from "../../api/sendNewsletter";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./NewsletterPopUp.module.css";

export function NewsletterPopUp({ onClose }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [hasSeenPopup, setHasSeenPopup] = useLocalStorage(
        "hasSeenPopup",
        false
    );
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Ustaw modal na widoczny tylko przy pierwszym wejściu
    useEffect(() => {
        if (!hasSeenPopup) {
            setIsModalVisible(true);
        }
    }, [hasSeenPopup]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Wysłano e-mail: ${email}`);
        const { success, message } = await subscribeToNewsletter(email);
        setMessage(message);
        setMessageType(success ? "success" : "error");

        if (success) {
            setTimeout(() => {
                closeModal();
            }, 2000);
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setHasSeenPopup(true); // Zapisujemy w localStorage informację, że popup był widoczny
        onClose();
    };

    if (!isModalVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button onClick={closeModal}>X</button>
                <div className={styles.form}>
                    <h2>Zapisz się do naszego newslettera!</h2>
                    <p>
                        Nie przegap najnowszych informacji i ofert specjalnych.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="email"
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
