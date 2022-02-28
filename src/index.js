import dayjs from 'dayjs';

let monthContainer = document.querySelector('#month');
let months = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
let daysArray = [];
//Recupere le jour en parcourant le mois
function getDaysInMonth(month, year) {
    let hallydate = new Date(year, month, 1);
    let day = [];
    while (hallydate.getMonth() == month) {
        day.push(new Date(hallydate));
        hallydate.setDate(hallydate.getDate() + 1);
    }
    return day;
}


// monthContainer.appendChild(date);

//dÃ©claration des variables
let hallyday = dayjs();
let getInputValue = document.getElementById('input-date');
let getCalendar = document.getElementById('dayContainer');
let getFormAdd = document.getElementById('events');
let monthname = document.getElementById('month');
    getInputValue.setAttribute('value', hallyday.$y + '-' + 0+(hallyday.$M+1) + '-' + hallyday.$D);
    let newDate = dayjs(getInputValue.value);
    daysArray.push(getDaysInMonth(newDate.$M, newDate.$y));
    monthname.textContent = months[newDate.$M] + " " + newDate.$y;
    daysArray[0].map(day => {
        let thedate = dayjs(day);
        let div = document.createElement('div');
        let createContent = document.createElement('p');
        div.setAttribute('class', 'daysBox');
        createContent.textContent = thedate.$D;
        createContent.setAttribute('class', 'daysbutton');
        createContent.setAttribute('href', 'https://youtube.com');
        div.appendChild(createContent);
        getCalendar.appendChild(div);
    });

//affiche le calendrier au chargement
getInputValue.addEventListener('change', () => {
    console.log(daysArray);
    let newDate = dayjs(getInputValue.value);
    getCalendar.innerHTML = '';
    daysArray = [];
    console.log(daysArray);
    daysArray.push(getDaysInMonth(newDate.$M, newDate.$y));
    console.log(daysArray);
    monthname.textContent = months[newDate.$M] + " " + newDate.$y;
    daysArray[0].map(day => {
        let thedate = dayjs(day);
        let div = document.createElement('div');
        let createContent = document.createElement('p');
        div.setAttribute('class', 'daysBox');
        createContent.textContent = thedate.$D;
        createContent.setAttribute('class', 'daysbutton');
        createContent.setAttribute('href', 'https://youtube.com');
        div.appendChild(createContent);
        getCalendar.appendChild(div);
    });
})