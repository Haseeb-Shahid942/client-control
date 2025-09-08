async function safetyChecker(siteName) {
    try {
        let security_key = "True";
        let url = `https://raw.githack.com/Haseeb-Shahid942/client-control/main/clients/${siteName}.txt`;

        const response = await fetch(url);

        if (!response.ok) {
            console.log("YES"); // Allow if file not found
            return;
        }

        let customer_security_key = (await response.text()).trim();

        if (security_key === customer_security_key) {
            console.log("YES");
        } else {
            document.querySelector('body').innerHTML = '';
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}
