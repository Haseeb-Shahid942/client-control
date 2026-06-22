async function safetyChecker(siteName) {
    try {
        let security_key = "true";
        let url = `https://raw.githubusercontent.com/Haseeb-Shahid942/client-control/main/clients/${siteName}.txt?t=${Date.now()}`;

        const response = await fetch(url);

        if (!response.ok) return;

        let customer_security_key = (await response.text()).trim().toLowerCase();

        if (security_key === customer_security_key) {
            console.log("YES");
        } else {
            document.body.innerHTML = '';
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}
