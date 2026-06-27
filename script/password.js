
document.querySelector('.js-pass-generate').addEventListener('click', ()=>{
    generatePass();

});

function generatePass(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passLength=14;
    let password='';
    
    for(let i=0;i<14;i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password+=chars[randomIndex];

    }
    document.querySelector('.js-password-input').value = password;
}
