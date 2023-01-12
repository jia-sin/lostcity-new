function changeSize() {
    // console.log(window.outerWidth)
    // console.log(window.innerWidth)
    if (window.outerWidth <= 320 || window.innerWidth <= 320) {
        return 1
    }
    if (window.outerWidth <= 768 || window.innerWidth <= 768) {
        return 2
    }
    return 3
}

function changeView() {
    let v1440 = document.getElementById('v1440')
    let v768 = document.getElementById('v768')
    let v320 = document.getElementById('v320')
    switch (changeSize()) {
        case 1:
            v1440.style.display = 'none'
            v768.style.display = 'none'
            v320.style.display = ''
            break;
        case 2:
            v1440.style.display = 'none'
            v768.style.display = ''
            v320.style.display = 'none'
            break;
        case 3:
            v1440.style.display = ''
            v768.style.display = 'none'
            v320.style.display = 'none'
            break;
    }
}

window.onload = () => {
    let v1440 = document.getElementById('v1440')
    let v768 = document.getElementById('v768')
    let v320 = document.getElementById('v320')
    v1440.style.display = 'none'
    v768.style.display = 'none'
    v320.style.display = 'none'
    changeView()
}

window.onresize = () => {
    changeView()
    // console.log('hi')
}