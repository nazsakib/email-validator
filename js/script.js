let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "sakibnshakhawat",
    "email": "sakibnshakhawat@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}


checkBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    let key = "ema_live_cQmTtHYFTyMQWC28FdKmNiwsd78nxzMRbjBz3D9a";
    let email = document.getElementById('email').value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let showStr = ``;

    for ( key of Object.keys(result) ) {
        if ( result[key] !== "" && result[key] !== " ") {
            showStr = showStr + `<div> ${key}: ${result[key]} </div>`;
        }
    };
    
    console.log(showStr);
    showResult.innerHTML = showStr;
});

