function sendNotification(email) {
     if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
     let parts = email.split('@');
const userName = parts[0];
    const domain = parts[1];
     return `${userName} sent you an email from ${domain}`;
}

