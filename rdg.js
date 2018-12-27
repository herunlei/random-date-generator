//Must have filled variables
const times = 981;
const start_date_month = 12;
const start_date_day = 20;
const end_date_day = 28;
const start_date_hour = 12;
const end_date_hour = 23;
const start_date_minute = 30;
const end_date_minute = 59;

//You don't need to touch any code below!!!

var result = display(generate(times));

function random_date_day() {

    return Math.floor((Math.random() * (end_date_day - start_date_day + 1)) + start_date_day);

}

function random_date_hour() {

    return Math.floor(Math.random() * 24);

}

function random_date_minute() {

    return Math.floor(Math.random() * 60);

}

function doubleDigtal(number) {
    if (number < 10) {
        return "0" + number.toString(10);
    } else {
        return number.toString(10);
    }
}

function generate(times) {

    let results = [];
    let tempStartHour = doubleDigtal(start_date_hour);
    let tempStartMinute = doubleDigtal(start_date_minute);
    let tempEndHour = doubleDigtal(end_date_hour);
    let tempEndMinute = doubleDigtal(end_date_minute);

    const tempdate1 = start_date_month.toString(10) + start_date_day.toString(10) + tempStartHour + tempStartMinute;
    const tempdate2 = start_date_month.toString(10) + end_date_day.toString(10) + tempEndHour + tempEndMinute;
    const start_date = parseInt(tempdate1, 10);
    const end_date = parseInt(tempdate2, 10);

    // console.log("Start:", start_date)
    // console.log("End  :", end_date);

    for (let i = 0; i < times; i++) {

        let temp = "";

        do {
            let result_day = random_date_day();
            let result_hour = doubleDigtal(random_date_hour());
            let result_minute = doubleDigtal(random_date_minute());

            temp = parseInt(start_date_month.toString(10) +
                result_day.toString(10) + result_hour + result_minute, 10);
        } while (temp > end_date && temp < start_date && results.includes(temp));

        results[i] = temp;
    }

    return results;
}

function display(results) {

    results.sort();

    results.forEach(date => {
        console.log("      ", date);
    });
}