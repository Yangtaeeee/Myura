window.addEventListener('scroll', () => {
    if(window.screenY < 650){
        document.querySelector('#maintxt a').style.marginTop = `${window.scrollY}px`
    }else return
})