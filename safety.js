async function safetyChecker(siteName) {
    console.log("safetyChecker called");

let url = `https://raw.githubusercontent.com/Haseeb-Shahid942/client-control/main/clients/${siteName}.txt?nocache=${new Date().getTime()}`;
    const response = await fetch(url);
    const status = (await response.text()).trim().toLowerCase();

    console.log("Status =", status);

    if (status === "false") {
        document.body.innerHTML = "";
    }
}
