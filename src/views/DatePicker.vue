<template>
  <div class="date-picker">
    <div class="dates">
      <div class="month-wrapper">
        <div class="arrow-wrapper-left arrow-wrapper">
          <div class="arrow-left"></div>
        </div>
        <div class="mth"></div>
        <div id="mth" class="mth"></div>
        <div class="arrow-wrapper-right arrow-wrapper">
          <div class="arrow-right"></div>
        </div>
      </div>
      <div class="contetn-wrapper">
        <div class="weekdays">
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div class="days"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const mth_element = document.querySelector('.date-picker .dates .month-wrapper .mth');
    const dates_element = document.querySelector('.dates-here');
    const next_mth_element = document.querySelector('.date-picker .dates .month-wrapper .arrow-wrapper-right');
    const prev_mth_element = document.querySelector('.date-picker .dates .month-wrapper .arrow-wrapper-left');
    const days_element = document.querySelector('.date-picker .dates .days');
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date();

    let day = date.getDate(); // gets current day
    let month = date.getMonth(); // gets current month
    let year = date.getFullYear(); // gets current year

    let selectedDate = date;
    let selectedDay = day;
    let selectedMonth = month;
    let selectedYear = year;

    // Storing dates here
    const dates = [];

        // First Render Month and year
    mth_element.textContent = months[month] + ' ' + year;
    //#######################################
//#######################################
//#######################################
    // Helper Functions
     const formatDate = (d) => {
      let day = d.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      let month = d.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      let year = d.getFullYear();
      return day + '/' + month + '/' + year;
    }
    
//#####################################
//#######################################
//#######################################
    const populateDates = (mth_element) => {
        console.log(mth_element)
      console.log(date);
      const day_elements = document.getElementsByClassName('day');
      // Number of the last day of the current month
      const lastDayCurrentMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      // Number of the last day of the previous month
      const lastDayPrevMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDate();
      //This variable is responsible for filing the first days in the first row for the current month
      //  from the previous month
      const firstDayIndex = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
      ).getDay();
      const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();

      //This variable is responsible for filing the last days in the last row for the current month from the next month
      const nextDays = 7 - lastDayIndex;

      let days = '';
      // Show dates from previous month
      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="pre-date day">${lastDayPrevMonth - x + 1}</div>`;
      }
      // populates dates for the current month
      for (let i = 1; i <= lastDayCurrentMonth; i++) {
        const isCurrentDay = i === new Date().getDate();
        const isCurrentMonth = date.getMonth() === new Date().getMonth();
        const isCurrentYear = date.getFullYear() === new Date().getFullYear();

        if (isCurrentDay && isCurrentMonth && isCurrentYear) {
          days += `<div class="today-day day">${i}</div>`;
        } else {
          days += `<div class="day current-month-days">${i}</div>`;
        }
      }
      // populates dates from the next month
      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date day">${j}</div>`;
        days_element.innerHTML = days;
      }

      for (const el of day_elements) {
        el.addEventListener('click', function () {
          // Inner value of
          selectedDay = el.innerHTML;
          if (selectedDay < 10) {
            selectedDay = '0' + selectedDay;
          }
          selectedYear = year;
          // Month Selecting
          selectedMonth = month + 1;
          if (el.classList.contains('next-date')) {
            selectedMonth += 1;
            if (selectedMonth >= 13) {
              selectedYear = year + 1;
              selectedMonth = 1;
            }
          }

          if (el.classList.contains('pre-date')) {
            selectedMonth -= 1;
            if (selectedMonth <= 0) {
              selectedYear = year - 1;
              selectedMonth = 12;
            }
          }
          // If statment resposnible for fixing the year change in December and in January
          if (el.classList.contains('current-month-days')) {
            if (selectedYear > year) {
              selectedYear = year;
            } else if (selectedYear < year) {
              selectedYear = year;
            }
          }
          //Month formating
          if (selectedMonth < 10) {
            selectedMonth = '0' + selectedMonth;
          }
          selectedDate = selectedDay + '/' + selectedMonth + '/' + selectedYear;
          console.log(selectedDate);

          // Multiple date selector
          if (el.classList.contains('highlight-day')) {
            el.classList.remove('highlight-day');
            let datesIndex = dates.indexOf(selectedDate);
            dates.splice(datesIndex, 1);
          } else if (el.classList.contains('day')) {
            el.classList.add('highlight-day');
            dates.push(selectedDate);
          }
          dates_element.textContent = dates;
        });
      }

      //This for loop checks if there are any records in the dates array if so. add to them highlight class
      for (const el of day_elements) {
        selectedDay = el.innerHTML;
        if (selectedDay < 10) {
          selectedDay = '0' + selectedDay;
        }
        selectedYear = year;
        // Month Selecting
        selectedMonth = month + 1;
        if (el.classList.contains('next-date')) {
          selectedMonth += 1;
          if (selectedMonth >= 13) {
            selectedYear = year + 1;
            selectedMonth = 1;
          }
        }

        if (el.classList.contains('pre-date')) {
          selectedMonth -= 1;
          if (selectedMonth <= 0) {
            selectedYear = year - 1;
            selectedMonth = 12;
          }
        }
        // If statment resposnible for fixing the year change in December and in January
        if (el.classList.contains('current-month-days')) {
          if (selectedYear > year) {
            selectedYear = year;
          } else if (selectedYear < year) {
            selectedYear = year;
          }
        }
        //Month formating
        if (selectedMonth < 10) {
          selectedMonth = '0' + selectedMonth;
        }
        selectedDate = selectedDay + '/' + selectedMonth + '/' + selectedYear;
        if (dates.includes(selectedDate)) {
          el.classList.add('highlight-day');
        }
      }
    }

    //shift between
    const goToNextMonth = (e) => {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      mth_element.textContent = months[month] + ' ' + year;
    }

    const goToPrevMonth = (e) => {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      mth_element.textContent = months[month] + ' ' + year;
    }

    // EVENT LISTENERS
    //  Update Month name along with year
    next_mth_element.addEventListener('click', goToNextMonth);
    prev_mth_element.addEventListener('click', goToPrevMonth);

    //Populate dates for new months on arrow click
    prev_mth_element.addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1, 1);
      populateDates();
    });
    next_mth_element.addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1, 1);
      populateDates();
    });

    populateDates(mth_element);
  },
};
</script>

<style scoped>
/* Date picker wrapper styling  */
.date-picker {
  height: 100%;
  font-family: "Open sans", sans-serif;
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 100%;
  max-height: 350px;
  cursor: pointer;
  user-select: none;
}

.date-picker .dates {
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  right: 0;
}

/* Header Month/Year and Arrows */
.date-picker .dates .month-wrapper {
  display: flex;
  justify-content: space-between;
}

.date-picker .dates .month-wrapper .mth {
  font-size: 14px;
  padding-top: 25px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Arrrows (Right & Left) */
.arrow-wrapper-right {
  position: relative;
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  margin-top: 20px;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.arrow-wrapper-left {
  position: relative;
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  margin-top: 20px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.arrow-right {
  left: 8px;
  top: 10px;
  position: absolute;
  border-right: 3px solid;
  border-bottom: 3px solid;
  height: 11px;
  width: 11px;
  transform: rotate(-45deg);
}

.arrow-left {
  left: 11px;
  top: 10px;
  position: absolute;
  border-right: 3px solid;
  border-bottom: 3px solid;
  height: 11px;
  width: 11px;
  transform: rotate(135deg);
}

.date-picker .dates .month-wrapper .arrow-wrapper:hover {
  background-color: black;
  color: white;
}

/* Weekdays  */
.date-picker .dates .weekdays {
  color: #a3a6b4;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-around;
}

.contetn-wrapper {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 320px;
  background-color: #ffffff;
  height: auto;
  border: 1px solid #e8e9ec;
  border-collapse: collapse;
}

.date-picker .dates .contetn-wrapper .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: auto;
  font-size: 13px;
  justify-content: space-around;
  text-align: center;
  color: #43425d;
  border-bottom-right-radius: 3%;
  border-bottom-left-radius: 3%;
}

.date-picker .dates .contetn-wrapper .days div {
  border: 1px solid #e8e9ec;
  padding: 10px;
  border-collapse: collapse;
}

.date-picker .dates .contetn-wrapper .days div:hover {
  color: #ffffff;
  background-color: #212121;
  transition: 0.4s;
}
/* These classes are added when dates are getting populated on the calendar along with highlights etc.  */
.pre-date {
  color: #9ea5a5;
}

.next-date {
  color: #9ea5a5;
}

.today-day {
  background-color: pink;
  color: #ffffff;
}

.highlight-day {
  color: #ffffff;
  background-color: #212121;
}
</style>