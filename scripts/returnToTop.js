const btn_returnTop = document.getElementById('returnTop');

btn_returnTop.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, 200);
});