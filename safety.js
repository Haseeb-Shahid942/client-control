async function safetyChecker(siteName) {
    try {
        let url = `https://raw.githubusercontent.com/Haseeb-Shahid942/client-control/main/clients/${siteName}.txt?t=${Date.now()}`;

        const response = await fetch(url);

        if (!response.ok) {
            console.log("File not found");
            return;
        }

        let status = (await response.text()).trim().toLowerCase();

        if (status !== "true") {
            document.body.innerHTML = "";
        }
    } catch (error) {
        console.error(error);
    }
}
