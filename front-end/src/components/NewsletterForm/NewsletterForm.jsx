import { Form } from "react-router-dom";
import { CenterContent } from "../CenterContent/CenterContent";

import style from "./NewsletterForm.module.css";

export function NewsletterForm() {
    return (
        <CenterContent>
            <div className={style.newsletterForm}>
                <h1>Zapisz się do newslettera</h1>
                {/* Formularz zapisu do newslettera */}
                <Form>
                    <label>
                        <input
                            type="text"
                            placeholder="Podaj swój adres e-mail"
                        />
                    </label>
                    <button type="submit">Zapisz się</button>
                </Form>
            </div>
            DOKOŃCZYĆ STRONĘ
        </CenterContent>
    );
}
