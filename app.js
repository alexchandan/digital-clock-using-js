console.log("code checking for digital Clock");
setInterval(showClock, 1000);

function showClock() {
    let date = new Date();
    // date = new Date(12, 23, 4)
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();
    let todayDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
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
    switch (day) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            break;
    }
    // let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // for (let days in weeks) {
    //     day = days;
    // }

    switch (month) {
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
        case 2:
            month = 'Mar'
            break;
        case 3:
            month = 'Apr'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'Jun'
            break;
        case 6:
            month = 'Jul'
            break;
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sep'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        case 11:
            month = 'Dec'
            break;
        default:
            break;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentDate = `<div class="weekdays">${day}</div>
                            <div>
                                <div class="ampm">${format}</div>
                                <div class="hoursAndMinutes">${h}:${m}</div>
                                <div class="second">${s}</div>
                            </div>
                        <div class="date">${todayDate}-${month}-${year}</div>
                    </div>`
    let clock = document.querySelector('.clock');
    clock.innerHTML = currentDate;
    // console.log(currentDate)

}
showClock();