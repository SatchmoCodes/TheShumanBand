import changeMenu from "./main.js";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const gigs = [
  {
    location: "Buffalo Wild Wings MV",
    address: "",
    start: "7:00",
    end: "10:00",
    month: "May",
    day: "8",
  },
  {
    location: "Buffalo Wild Wings Taylor Sq.",
    address: "",
    start: "7:00",
    end: "10:00",
    month: "May",
    day: "29",
  },
  {
    location: "The Nuce Party",
    address: "",
    start: "6:00",
    end: "Whenever Don Gets Tired",
    month: "June",
    day: "14",
  },
  {
    location: "Alzheimers Benefit Monroe Co. Country",
    address: "",
    start: "",
    end: "",
    month: "July",
    day: "18",
  },
  {
    location: "State Theatre in Barnesville",
    address: "",
    start: "",
    end: "",
    month: "July",
    day: "26",
  },
  {
    location: "Buffalo Wild Wings MV",
    address: "",
    start: "7:00",
    end: "10:00",
    month: "July",
    day: "31",
  },
  {
    location: "National Night Out Fredericktown",
    address: "",
    start: "",
    end: "",
    month: "August",
    day: "5",
  },
  {
    location: "Poker Float at Seneca Lake",
    address: "",
    start: "",
    end: "",
    month: "August",
    day: "9",
  },
  {
    location: "Mount Vernon Music and Arts Festival",
    address: "",
    start: "",
    end: "",
    month: "August",
    day: "10",
  },
  {
    location: "Wedding Reception at Gallagher Center",
    address: "",
    start: "",
    end: "",
    month: "August",
    day: "16",
  },
  {
    location: "Kenyon Inn",
    address: "",
    start: "7:00",
    end: "10:00",
    month: "August",
    day: "22",
  },
  {
    location: "Bananas Party",
    address: "",
    start: "",
    end: "",
    month: "August",
    day: "30",
  },
  {
    location: "Golf Club of Dublin",
    address: "5805 Eiterman Rd, Dublin, OH 43016",
    start: "6:30",
    end: "9:30",
    month: "September",
    day: "12",
  },
  {
    location: "Music in the Hills (Bruce and Cindy)",
    address: "",
    start: "",
    end: "",
    month: "September",
    day: "20",
  },
  {
    location: "The Barrel House",
    address: "",
    start: "8:00",
    end: "11:00",
    month: "September",
    day: "25",
  },
  {
    location: "The Pumpkin Festival",
    address: "",
    start: "8:00",
    end: "11:00",
    month: "September",
    day: "27",
  },
  {
    location: "Annual Shuman Party",
    address: "",
    start: "",
    end: "",
    month: "September",
    day: "28",
  },
  {
    location: "Tiell Party",
    address: "",
    start: "7:00",
    end: "Whenever the Cops Come",
    month: "October",
    day: "11",
  },
  {
    location: "Oakland Nursery",
    address: "",
    start: "1:00",
    end: "4:00",
    month: "October",
    day: "12",
  },
];

class Entry {
  constructor(date, gig) {
    this.date = date;
    this.gig = gig;
  }
  findIndexToday(today) {
    if (this.date.getMonth() == today.getMonth()) {
      if (this.date.getDate() == today.getDate()) {
        return this;
      }
    }
  }
  findGigs() {
    if (this.gig != null) {
      return this;
    }
  }
  currentEventListBuilder(startingIndex) {
    let gigArr = [];
    for (let x = startingIndex; x < entryArr.length && gigArr.length < 3; x++) {
      if (entryArr[x].findGigs()) {
        gigArr.push(entryArr[x].findGigs());
      }
    }
    console.log(gigArr);
    gigArr.forEach((gig, index) => {
      console.log(gig.gig);
      if (
        months.indexOf(gig.gig.month) == today.getMonth() &&
        gig.gig.day == today.getDate()
      ) {
        when[index].textContent = "Today";
      } else if (
        months.indexOf(gig.gig.month) == today.getMonth() &&
        gig.gig.day == today.getDate() + 1
      ) {
        when[index].textContent = "Tomorrow";
      } else {
        when[index].textContent = gig.gig.month + " " + gig.gig.day;
      }

      where[index].textContent = gig.gig.location;
      time[index].textContent = gig.gig.start;
    });
    completed = true;
  }
  calendarBuilder(startIndex, finalIndex, currentMonth) {
    while (calendarBody.firstChild) {
      calendarBody.removeChild(calendarBody.firstChild);
    }
    let increment = 0; //tracks to make sure entire row is filled with squares
    while (startIndex <= finalIndex || increment % 7 != 0) {
      let day = document.createElement("div");
      let dayNumber = document.createElement("h3");
      let gigInfo = document.createElement("h3");
      let gigTime = document.createElement("h3");
      entryArr[startIndex]
        ? (dayNumber.innerText = entryArr[startIndex].date.getDate())
        : (dayNumber.innerText = "");
      if (entryArr[startIndex]) {
        day.dataset.month = months[entryArr[startIndex].date.getMonth()];
        if (entryArr[startIndex].date.getMonth() != currentMonth) {
          dayNumber.classList.add("grayed");
        }
        if (
          entryArr[startIndex].date.getMonth() == today.getMonth() &&
          entryArr[startIndex].date.getDate() == today.getDate()
        ) {
          console.log(entryArr[startIndex].date);
          day.classList.add("today");
        }
        if (entryArr[startIndex].gig != null) {
          day.classList.add("eventToday");
          day.addEventListener("click", listInfo);
          day.dataset.address = entryArr[startIndex].gig.address;
          gigInfo.innerText = entryArr[startIndex].gig.location;
          if (entryArr[startIndex].gig.start == "TBA") {
            gigTime.innerText = "TBA";
          } else {
            entryArr[startIndex].gig.location != "Private Party"
              ? (gigTime.innerText =
                  entryArr[startIndex].gig.start +
                  " - " +
                  entryArr[startIndex].gig.end)
              : (gigTime.innerText = "");
          }
        }
      }
      day.append(dayNumber);
      day.append(gigInfo);
      day.append(gigTime);
      calendarBody.append(day);
      startIndex++;
      increment++;
    }
    let days = document.querySelectorAll(".days div");
    days.forEach((day) => {
      day.classList.add("fadeFast");
    });
  }
  fullEventListBuilder() {
    let location = document.createElement("h2");
    let date = document.createElement("h2");
    let time = document.createElement("h2");
    let address = document.createElement("h2");
    let div = document.createElement("div");
    div.classList.add("listEvent");
    location.innerText = this.gig.location;
    date.innerText = this.gig.month + " " + this.gig.day;
    if (this.gig.location == "Private Party") {
      time.innerText = "";
      address.innerText = "";
    } else {
      this.gig.start != "TBA"
        ? (time.innerText = this.gig.start + " - " + this.gig.end)
        : (time.innerText = "TBA");
      address.innerText = this.gig.address;
    }

    div.append(location);
    div.append(date);
    div.append(time);
    div.append(address);
    listEventHolder.append(div);
  }
}

export function buildCalendar() {
  entryArr = new Array();
  let m = 0;
  let d = 1;
  for (let i = 0; i < 366; i++) {
    let newDay = new Date(`${months[m]} ${d}, ${year}`);
    let gig = null;
    if (newDay.getMonth() != m && m + 1 != null) {
      //check if month is changing
      m++;
      d = 1;
      newDay = new Date(`${months[m]} ${d}, ${year}`);
    }
    if (newDay != "Invalid Date") {
      //check if day is valid (mostly for leap year checking)
      gigs.forEach((g) => {
        //check if particular day has a gig or not
        if (newDay.getMonth() == months.indexOf(g.month)) {
          if (newDay.getDate() == g.day) {
            gig = g;
          }
        }
      });
      if (gig != null) {
        let entry = new Entry(newDay, gig);
        entry.fullEventListBuilder();
        entryArr.splice(i, 1, entry);
      } else {
        let entry = new Entry(newDay, null);
        entryArr.splice(i, 1, entry);
      }
      d++;
    }
  }
}

export function findMonthLength(startPoint) {
  entryArr.forEach((entry, index) => {
    let x = entry.findIndexToday(startPoint);
    if (x != null) {
      let firstDayOfMonth = index - (entry.date.getDate() - 1);
      let currentMonth = entry.date.getMonth();
      console.log(currentMonth);
      calendarMonth.innerText = months[currentMonth];
      let firstDayOfRow =
        firstDayOfMonth - entryArr[firstDayOfMonth].date.getDay();
      if (!completed) {
        entry.currentEventListBuilder(index);
      }
      for (let y = firstDayOfMonth; y <= entryArr.length; y++) {
        if (y == entryArr.length) {
          entryArr[firstDayOfRow].calendarBuilder(
            firstDayOfRow,
            y,
            currentMonth
          );
          return;
        }
        if (
          entryArr[y].date.getMonth() != currentMonth &&
          entryArr[y].date.getDate() >= 1
        ) {
          if (entryArr[y - 1].date.getDay() == 6) {
            //checks to see if current month ends on a saturday
            console.log(entryArr[y - 1]);
            entryArr[firstDayOfRow].calendarBuilder(
              firstDayOfRow,
              y - 1,
              currentMonth
            );
            return;
          } else if (entryArr[y].date.getDay() == 6) {
            if (entryArr[firstDayOfRow] != null) {
              entryArr[firstDayOfRow].calendarBuilder(
                firstDayOfRow,
                y,
                currentMonth
              );
              return;
            } else {
              entryArr[firstDayOfMonth].calendarBuilder(
                firstDayOfRow,
                y,
                currentMonth
              );
              return;
            }
          }
        }
      }
    }
  });
}

let calendarBody = document.querySelector(".days");
let calendarMonth = document.querySelector(".monthName");
let monthChange = document.querySelectorAll(".monthChange");
let xButton = document.querySelectorAll(".xButton");
let monthSelect = document.querySelector(".monthSelect");
let monthName = document.querySelector(".monthName");
let monthList = document.querySelectorAll(".monthSelect h3");
let when = document.querySelectorAll(".when");
let where = document.querySelectorAll(".where");
let time = document.querySelectorAll(".time");
let listEventHolder = document.querySelector(".listEventHolder");
let eventModal = document.querySelector(".eventModal");

let entryArr = [];
let year = 2024;
let today = new Date();
let completed = false; //boolean to check if event list should be set

monthChange.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let value = parseInt(event.target.dataset.val);
    let currentMonth = months.indexOf(calendarMonth.innerText);
    console.log(currentMonth);
    let newMonth = months[currentMonth + value];
    console.log(newMonth);
    let newDay = new Date(`${newMonth} 1, ${year}`);
    findMonthLength(newDay);
  });
});

monthName.addEventListener("click", () => {
  monthSelect.classList.remove("hidden");
});
xButton.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.classList.contains("monthSelect")
      ? monthSelect.classList.add("hidden")
      : eventModal.close();
  });
});
// xButton.addEventListener('click', () => {

// })

monthList.forEach((month) => {
  month.addEventListener("click", (event) => {
    let value = parseInt(event.target.dataset.month);
    let newDay = new Date(`${months[value]} 1, ${year}`);
    monthSelect.classList.add("hidden");
    findMonthLength(newDay);
  });
});

document.querySelector(".hamButton").addEventListener("click", () => {
  changeMenu();
});

window.onload = () => {
  buildCalendar();
  findMonthLength(today);
};

function listInfo(e) {
  let event;
  console.log(e.target.tagName);
  e.target.tagName == "H3"
    ? (event = e.target.parentElement)
    : (event = e.target);
  let eventDate =
    event.dataset.month + " " + event.querySelectorAll("h3")[0].innerText;
  let date = new Date(eventDate + " " + year);
  console.log(date);
  let day = days[date.getDay()];
  console.log(event);
  eventModal.querySelectorAll("h2")[0].innerText = day + ", " + eventDate;
  eventModal.querySelectorAll("h2")[1].innerText =
    event.querySelectorAll("h3")[1].innerText;
  eventModal.querySelectorAll("h2")[2].innerText =
    event.querySelectorAll("h3")[2].innerText;
  eventModal.querySelectorAll("h2")[1].innerText != "Private Party"
    ? (eventModal.querySelectorAll("h2")[3].innerText = event.dataset.address)
    : (eventModal.querySelectorAll("h2")[3].innerText = "");
  eventModal.classList.add("expand");
  eventModal.showModal();
}
