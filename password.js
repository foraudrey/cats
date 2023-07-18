async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }



async function checkPassword() {
    const hashedCorrectPassword = 'fc578ceac57ad70893018b0a02c66afd56f1114e7f2d45640a73280561f26229';
    const passwordInput = document.getElementById('passwordInput');
    const userPassword = passwordInput.value.trim();
    const hashedUserPassword = await sha256(userPassword)

    if (hashedUserPassword === hashedCorrectPassword) {
    } else {
        alert('Incorrect password. Please try again.');
        window.location.reload();
    }
}