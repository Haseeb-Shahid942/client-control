async function safetyChecker(siteName) {
    try {
        let url = `https://raw.githubusercontent.com/Haseeb-Shahid942/client-control/main/clients/${siteName}.txt?nocache=${Date.now()}`;

        const response = await fetch(url);

        if (!response.ok) return;

        let status = (await response.text()).trim().toLowerCase();

        if (status === "false") {
            document.body.innerHTML = "";
        }
    } catch (error) {}
}
