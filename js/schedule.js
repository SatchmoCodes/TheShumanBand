import changeMenu from './main.js'

const months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"]; 

const gigs = [
    {
        location: 'Keystone Pub and Patio',
        address: '1081 Gemini Pl, Columbus, OH 43240',
        start: '10:00',
        end: '1:00',
        month: 'March',
        day: '17'
    },
    {
        location: 'Gulf Club of Dublin',
        address: '5805 Eiterman Rd, Dublin, OH 43016',
        start: '6:00',
        end: '9:00',
        month: 'May',
        day: '26'
    },
    {
        location: 'BW3',
        address: '2386 Taylor Square Dr, Reynoldsburg, OH 43068',
        start: '7:00',
        end: '10:00',
        month: 'June',
        day: '1'
    },
    {
        location: 'Keystone Pub and Patio',
        address: '6477 Pullman Dr, Lewis Center, OH 43035',
        start: '7:00',
        end: '10:00',
        month: 'June',
        day: '3'
    },
    {
        location: 'Buckeye Lake Yacht Club',
        address: '5019 N Bank Rd, Buckeye Lake, OH 43008',
        start: '7:00',
        end: '10:00',
        month: 'June',
        day: '9'
    },
    {
        location: 'Private Party',
        month: 'June',
        day: '10'
    },
    {
        location: 'BW3 Mount Vernon',
        address: '907 Coshocton Ave, Mt Vernon, OH 43050',
        start: '7:00',
        end: '10:00',
        month: 'June',
        day: '15'
    },
    {
        location: 'NorthStar Golf Club',
        address: '907 Coshocton Ave, Mt Vernon, OH 43050',
        start: '6:00',
        end: '10:00',
        month: 'June',
        day: '16'
    },
    {
        location: 'The Pub',
        address: '22001 Coshocton Ave, Howard, OH 43028',
        start: '8:30',
        end: '11:30',
        month: 'June',
        day: '17'
    },
    {
        location: 'Private Party',
        month: 'June',
        day: '21'
    },
    {
        location: 'Golf Club of Dublin',
        address: '5805 Eiterman Rd, Dublin, OH 43016',
        start: '6:30',
        end: '9:30',
        month: 'June',
        day: '23'
    },
    {
        location: 'Lick Skillet Festival',
        address: '',
        start: 'TBA',
        end: 'TBA',
        month: 'June',
        day: '24'
    },
    {
        location: 'Barnesville Memorial Amphitheater benefit for State Theater project',
        month: 'June',
        day: '25',
        start: '5:00',
        end: '7:00',
        address: '137 W Main St Barnesville, OH 43713'
    },
    { 
      location: 'BW3 Taylor Square',
      month: 'July',
      day: '6',
      start: 'TBA',
      end: 'TBA',
      address: '2386 Taylor Square Dr, Reynoldsburg, OH 43068'
    },
    { 
      location: 'Epworth Park Chautauqua Festival',
      month: 'July',
      day: '8',
      start: '6:00',
      end: '8:00',
      address: '211 Virginia St, Bethesda, OH 43719'
    },
    { 
      location: 'Orr Park Rehm Gazebo, Orrville Ohio',
      month: 'July',
      day: '12',
      start: '7:00',
      end: '9:00',
      address: '440 N Elm St, Orrville, OH 44667'
    },
    { 
      location: 'NorthStar Golf Club',
      month: 'July',
      day: '21',
      start: 'TBA',
      end: 'TBA',
      address: '1150 Wilson Rd, Sunbury, OH 43074'
    },
    { 
      location: 'Keystone Pub and Patio Lewis Center',
      month: 'July',
      day: '22',
      start: '7:00',
      end: '10:00',
      address: '6477 Pullman Dr, Lewis Center, OH 43035'
    },
    { 
      location: 'BW3 Mount Vernon',
      month: 'July',
      day: '27',
      start: '7:00',
      end: '10:00',
      address: '907 Coshocton Ave, Mt Vernon, OH 43050'
    },
    { 
      location: 'Retirement Party Fish Club',
      month: 'July',
      day: '28',
      start: 'TBA',
      end: 'TBA',
      address: ''
    },
    { 
      location: 'Alzheimers Benefit, Monroe County Country Club',
      month: 'July',
      day: '29',
      start: 'TBA',
      end: 'TBA',
      address: ''
    },
    { 
      location: 'Hold for Peloton at Fredericktown High School',
      month: 'August',
      day: '6',
      start: 'TBA',
      end: 'TBA',
      address: '111 Stadium Dr, Fredericktown, OH 43019'
    },
    { 
      location: 'Seneca Lake Sportsmans Club Poker Float',
      month: 'August',
      day: '12',
      start: 'TBA',
      end: 'TBA',
      address: ''
    },
    { 
      location: 'Holding for Mount Vernon Music and Arts Festival',
      month: 'August',
      day: '13',
      start: 'TBA',
      end: 'TBA',
      address: 'Mt Vernon, OH 43050'
    },
    { 
      location: 'BW3 Mount Vernon',
      month: 'August',
      day: '17',
      start: '7:00',
      end: '10:00',
      address: '907 Coshocton Ave, Mt Vernon, OH 43050'
    },
    { 
      location: 'Chubbys Sports Bar and Grill Columbus Ohio',
      month: 'August',
      day: '19',
      start: 'TBA',
      end: 'TBA',
      address: '1846 Hard Rd, Columbus, OH 43235'
    },
    { 
      location: 'Gulf Club of Dublin',
      month: 'August',
      day: '25',
      start: '6:30',
      end: '9:30',
      address: '5805 Eiterman Rd, Dublin, OH 43016'
    },
    {
        location: 'Bananas Party',
        month: 'September',
        day: '2',
        start: 'TBA',
        end: 'TBA',
        address: ''
      },
      {
        location: 'Keystone Pub and Patio Lewis Center',
        month: 'September',
        day: '9',
        start: '7:00',
        end: '10:00',
        address: '6477 Pullman Dr, Lewis Center, OH 43035'
      },
      {
        location: '3rd Annual Music in the Hills',
        month: 'September',
        day: '16',
        start: 'TBA',
        end: 'TBA',
        address: ''
      },
      {
        location: 'Barnesville Memorial Amphitheater benefit for State Theater project',
        month: 'September',
        day: '17',
        start: 'TBA',
        end: 'TBA',
        address: '137 W Main St Barnesville, OH 43713'
      },
      {
        location: 'Main Street Barrel House',
        month: 'September',
        day: '21',
        start: '8',
        end: '11',
        address: '137 E Main St, Barnesville, OH 43713'
      },
      {
        location: 'Barnesville Pumpkin Festival BIG STAGE',
        month: 'September',
        day: '23',
        start: '8:30',
        end: '11:00',
        address: '113 W Main St, Barnesville, OH 43713'
      },
      {
        location: 'Shuman Party',
        month: 'September',
        day: '24',
        start: 'TBA',
        end: 'TBA',
        address: ''
      },
      {
        location: 'Gulf Club of Dublin',
        month: 'September',
        day: '29',
        start: '6:00',
        end: '9:00',
        address: '5805 Eiterman Rd, Dublin, OH 43016'
      },
      {
        location: 'Historic Monroe Theatre',
        month: 'September',
        day: '30',
        start: '7:00',
        end: '9:00',
        address: '104 North Main Street, Woodsfield, OH, United States, 43793'
      },
      {
        location: 'American Legion Whitehall Ohio',
        month: 'October',
        day: '7',
        start: '6',
        end: '10',
        address: '1117 S Hamilton Rd, Columbus, OH 43227'
      },
      {
        location: 'Private Party',
        month: 'October',
        day: '14',
        start: 'TBA',
        end: 'TBA',
        address: ''
      }
];


class Entry {
    constructor(date, gig) {
        this.date = date
        this.gig = gig
    }
    findIndexToday(today) {
        if (this.date.getMonth() == today.getMonth()) {
            if (this.date.getDate() == today.getDate()) {
                return this
            }
        }
    }
    findGigs() {
        if (this.gig != null) {
            return this
        }
    }
    currentEventListBuilder(startingIndex) {
        let gigArr = []
        for (let x = startingIndex; x < entryArr.length && gigArr.length < 3; x++) {
            if (entryArr[x].findGigs()) {
                gigArr.push(entryArr[x].findGigs())
            }
        }
        console.log(gigArr)
        gigArr.forEach((gig, index) => {
            console.log(gig.gig)
            if (months.indexOf(gig.gig.month) == today.getMonth() && gig.gig.day == today.getDate()) {
                when[index].textContent = 'Today'
            }
            else if (months.indexOf(gig.gig.month) == today.getMonth() && gig.gig.day == (today.getDate() + 1)) {
                when[index].textContent = 'Tomorrow'
            }
            else {
                when[index].textContent = gig.gig.month + ' ' + gig.gig.day
            }
            
            where[index].textContent = gig.gig.location
            time[index].textContent = gig.gig.start
        })
        completed = true
    }
    calendarBuilder(startIndex, finalIndex, currentMonth) {
        while (calendarBody.firstChild) {
            calendarBody.removeChild(calendarBody.firstChild)
        }
        let increment = 0 //tracks to make sure entire row is filled with squares
        while (startIndex <= finalIndex || increment % 7 != 0) {
            let day = document.createElement('div')
            let dayNumber = document.createElement('h3')
            let gigInfo = document.createElement('h3')
            let gigTime = document.createElement('h3')
            entryArr[startIndex] ? dayNumber.innerText = entryArr[startIndex].date.getDate() : dayNumber.innerText = ''
            if (entryArr[startIndex]) {
                if (entryArr[startIndex].date.getMonth() != currentMonth) {
                    dayNumber.classList.add('grayed')
                }
                if (entryArr[startIndex].date.getMonth() == today.getMonth() && entryArr[startIndex].date.getDate() == today.getDate()) {
                    console.log(entryArr[startIndex].date)
                    day.classList.add('today')
                }
                if (entryArr[startIndex].gig != null) {
                    day.classList.add('eventToday')
                    gigInfo.innerText = entryArr[startIndex].gig.location
                    if (entryArr[startIndex].gig.start == 'TBA') {
                        gigTime.innerText = 'TBA'
                    }
                    else {
                        entryArr[startIndex].gig.location != 'Private Party' ? gigTime.innerText = entryArr[startIndex].gig.start + ' - ' + entryArr[startIndex].gig.end : gigTime.innerText = ''
                    }
                }
            }
            day.append(dayNumber)
            day.append(gigInfo)
            day.append(gigTime)
            calendarBody.append(day)
            startIndex++
            increment++
        }
    }
    fullEventListBuilder() {
        let location = document.createElement('h2')
        let date = document.createElement('h2')
        let time = document.createElement('h2')
        let address = document.createElement('h2')
        let div = document.createElement('div')
        div.classList.add('listEvent')
        location.innerText = this.gig.location
        date.innerText = this.gig.month + ' ' + this.gig.day
        if (this.gig.location == 'Private Party') {
            time.innerText = ''
            address.innerText = ''
        }
        else {
            this.gig.start != 'TBA' ? time.innerText = this.gig.start + ' - ' + this.gig.end : time.innerText = 'TBA'
            address.innerText = this.gig.address
        }
        
        div.append(location)
        div.append(date)
        div.append(time)
        div.append(address)
        listEventHolder.append(div)
    }
}

export function buildCalendar() {
    entryArr = new Array(365).fill(0)
    let m = 0
    let d = 1
    for (let i = 0; i < 366; i++) {
        let newDay = new Date(`${months[m]} ${d}, ${year}`)
        let gig = null
        if (newDay.getMonth() != m && m + 1 != null) { //check if month is changing
            m++
            d = 1
            newDay = new Date(`${months[m]} ${d}, ${year}`)
        }
        if (newDay != 'Invalid Date') { //check if day is valid (mostly for leap year checking)
            gigs.forEach(g => { //check if particular day has a gig or not
                if (newDay.getMonth() == months.indexOf(g.month)) {
                    if (newDay.getDate() == g.day) {
                        gig = g
                    }
                }
            })
            if (gig != null) {
                let entry = new Entry(newDay, gig)
                entry.fullEventListBuilder()
                entryArr.splice(i, 1, entry)
            }
            else {
                let entry = new Entry(newDay, null)
                entryArr.splice(i, 1, entry)
            }
            d++
        }
    }
}

export function findMonthLength(startPoint) {
    entryArr.forEach((entry, index) => {
        let x = entry.findIndexToday(startPoint)
        if (x != null) {
            let firstDayOfMonth = index - (entry.date.getDate() - 1)
            let currentMonth = entry.date.getMonth()
            console.log(currentMonth)
            calendarMonth.innerText = months[currentMonth]
            let firstDayOfRow = firstDayOfMonth - entryArr[firstDayOfMonth].date.getDay()
            if (!completed) {
                entry.currentEventListBuilder(index)
            }
            for (let y = firstDayOfMonth; y <= entryArr.length; y++) {
                if (y == entryArr.length) {
                    entryArr[firstDayOfRow].calendarBuilder(firstDayOfRow, y, currentMonth)
                    return
                }
                if (entryArr[y].date.getMonth() != currentMonth && entryArr[y].date.getDate() >= 1) {
                    if (entryArr[y - 1].date.getDay() == 6) { //checks to see if current month ends on a saturday
                        console.log(entryArr[y - 1])
                        entryArr[firstDayOfRow].calendarBuilder(firstDayOfRow, y - 1, currentMonth)
                        return
                    }
                    else if (entryArr[y].date.getDay() == 6) {
                        if (entryArr[firstDayOfRow] != null) {
                            entryArr[firstDayOfRow].calendarBuilder(firstDayOfRow, y, currentMonth)
                            return
                        }
                        else {
                            entryArr[firstDayOfMonth].calendarBuilder(firstDayOfRow, y, currentMonth)
                            return
                        }
                    }
                }
            } 
        }
    })
}

let calendarBody = document.querySelector('.days')
let calendarMonth = document.querySelector('.monthName')
let monthChange = document.querySelectorAll('.monthChange')
let xButton = document.querySelector('.xButton')
let monthSelect = document.querySelector('.monthSelect')
let monthName = document.querySelector('.monthName')
let monthList = document.querySelectorAll('.monthSelect h3')
let when = document.querySelectorAll('.when')
let where = document.querySelectorAll('.where')
let time = document.querySelectorAll('.time')
let listEventHolder = document.querySelector('.listEventHolder')

let entryArr = []
let year = 2023
let today = new Date()
let completed = false //boolean to check if event list should be set

monthChange.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let value = parseInt(event.target.dataset.val)
        let currentMonth = months.indexOf(calendarMonth.innerText)
        console.log(currentMonth)
        let newMonth = months[currentMonth + value]
        console.log(newMonth)
        let newDay = new Date(`${newMonth} 1, ${year}`)
        findMonthLength(newDay)
    })
})

monthName.addEventListener('click', () => {
    monthSelect.classList.remove('hidden')
})

xButton.addEventListener('click', () => {
    monthSelect.classList.add('hidden')
})

monthList.forEach(month => {
    month.addEventListener('click', (event) => {
        let value = parseInt(event.target.dataset.month)
        let newDay = new Date(`${months[value]} 1, ${year}`)
        monthSelect.classList.add('hidden')
        findMonthLength(newDay)
    })
})

document.querySelector('.hamButton').addEventListener('click', () => {
    changeMenu()
})

window.onload = () => {
    buildCalendar()
    findMonthLength(today)
}

