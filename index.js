let homeScr = 0
let guestScr = 0
let scrHome = document.getElementById("home-score")
let scrGuest = document.getElementById("guest-score")

function addOneH(){
    homeScr += 1
    scrHome.textContent = homeScr
}
function addTwoH(){
    homeScr += 2
    scrHome.textContent = homeScr
}
function addThreeH(){
    homeScr += 3
    scrHome.textContent = homeScr
}
function addOneG(){
    guestScr += 1
    scrGuest.textContent = guestScr
}
function addTwoG(){
    guestScr += 2
    scrGuest.textContent = guestScr
}
function addThreeG(){
    guestScr += 3
    scrGuest.textContent = guestScr
}