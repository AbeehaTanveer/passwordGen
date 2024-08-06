const Overlay = document.querySelector('.overlay');
const Password = document.querySelector("#password");
const SignUp = document.querySelector("#signUp");
const para = document.querySelector('#para');

Password.addEventListener('input', (e) => {
    console.log(e.target.value);
    const Strength = () => {
        const password = e.target.value;
        const passwordLength = password.length;
        const containsSpecialChars = /[@#./%*&]+/.test(password);
        const containsUppercase = /[A-Z]/.test(password);

        if (passwordLength > 0 && passwordLength < 4) {
            const blur_val = 20 - (passwordLength * 4);
            para.style.color = "red";
            Overlay.style.filter = `blur(${blur_val}px)`;
            para.textContent = "Your Password is Weak";
        } else if ((passwordLength >= 4 && passwordLength < 10) && containsSpecialChars) {
            para.textContent = "Your Password is medium";
            para.style.color = "orange";
            const blur_val = 30 - (passwordLength * 4);
            Overlay.style.filter = `blur(${blur_val}px)`;
        } else if (passwordLength >= 10  && containsUppercase) {
            para.textContent = "Your Password is strong";
            para.style.color = "green";
            const blur_val = 40 - (passwordLength * 4);
            Overlay.style.filter = `blur(${blur_val}px)`;
        } else {
            para.textContent = ""; 
        }
    }

    Strength();
});
