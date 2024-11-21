import { useEffect, useState } from "react";
import { subscribeToNewsletter } from "../../api/sendNewsletter";
import styles from "./NewsletterPopUp.module.css";

export function NewsletterPopUp({ isVisible, onClose }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [regionCode, setRegionCode] = useState("+48");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {
        // Wyświetlanie okna modalnego z newsletterem
        const hasVisited = localStorage.getItem("hasVisitedHome");
        if (!hasVisited && isVisible) {
            setIsModalVisible(true);
            localStorage.setItem("hasVisitedHome", "true");
        }
    }, [isVisible]);

    if (!isModalVisible) return null;

    const handleSubmit = async (e) => {
        // Obsługa przycisku "Zapisz się"
        e.preventDefault();
        // const fullPhoneNumber = phone ? `${regionCode}${phone}` : "";
        const { success, message } = await subscribeToNewsletter(
            email
            // fullPhoneNumber
        );
        setMessage(message);
        setMessageType(success ? "success" : "error");

        if (success) {
            setTimeout(() => {
                setIsModalVisible(false);
                onClose();
            }, 2000);
        }
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
                            type="email"
                            placeholder="Podaj swój adres e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <div className={styles.phoneInput}>
                            <select
                                value={regionCode}
                                onChange={(e) => setRegionCode(e.target.value)}
                                className={styles.regionCode}
                            >
                                <option value="+48">🇵🇱 +48</option>
                                <option value="+1">🇺🇸 +1</option>
                                <option value="+44">🇬🇧 +44</option>
                                <option value="+49">🇩🇪 +49</option>
                                <option value="+33">🇫🇷 +33</option>
                                <option value="+39">🇮🇹 +39</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Podaj swój numer telefonu"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div> */}
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
