console.log("code checking for digital Clock");
setInterval(showClock, 1000);

function showClock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();
    let todayDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(month)
    let format;
    if (h > 12) {
        h -= 12;
        format = "PM";
    }
    else if (h == 0) {
        h = 12;
        format = "PM";
    }
    else {
        format = 'AM'
    }

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentDate = `<div class="weekdays">${weekdays[day]}</div>
                            <div>
                                <div class="ampm">${format}</div>
                                <div class="hoursAndMinutes">${h}:${m}</div>
                                <div class="second">${s}</div>
                            </div>
                        <div class="date">${todayDate}-${months[month]}-${year}</div>
                    </div>`
    let clock = document.querySelector('.clock');
    clock.innerHTML = currentDate;

}
showClock();