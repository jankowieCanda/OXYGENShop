const bodyHeight = document.body.offsetHeight;
const windowHeight = window.innerHeight;
const totalToScroll = bodyHeight - windowHeight;

window.addEventListener('scroll', myPercentageScroll);


function myPercentageScroll() {
    let pageScroll = document.getElementById('pageScroll');
    let scroll = (window.scrollY / totalToScroll) * 100;
    let scrollPercent = scroll.toFixed(0);

    if(scrollPercent == 0) {
        pageScroll.style.display = 'none';
    } else {
        pageScroll.style.display = 'block';
        pageScroll.style.width = `${scrollPercent}%`;
    }
}