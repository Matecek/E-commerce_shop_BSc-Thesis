export async function subscribeToNewsletter(email) {
    try {
        const response = await fetch("http://localhost:5000/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Coś poszło nie tak.");
        }

        return {
            success: true,
            message: "Dziękujemy za zapisanie się do newslettera!",
        };
    } catch (error) {
        return { success: false, message: error.message };
    }
}
