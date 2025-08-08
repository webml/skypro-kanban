<template>
  <div :class="['pop-new-card__calendar calendar', { error: isError }]">
    <p class="calendar__ttl subttl">Даты</p>

    <div class="calendar__block">
      <div class="calendar__nav">
        <div class="calendar__month">{{ monthTitle }}</div>
        <div class="nav__actions">
          <div class="nav__action" @click="prevMonth">
            <PrevIcon />
          </div>
          <div class="nav__action" @click="nextMonth">
            <NextIcon />
          </div>
        </div>
      </div>

      <div class="calendar__content">
        <div class="calendar__days-names">
          <div class="calendar__day-name">пн</div>
          <div class="calendar__day-name">вт</div>
          <div class="calendar__day-name">ср</div>
          <div class="calendar__day-name">чт</div>
          <div class="calendar__day-name">пт</div>
          <div class="calendar__day-name -weekend-">сб</div>
          <div class="calendar__day-name -weekend-">вс</div>
        </div>

        <div class="calendar__cells">
          <div
            v-for="(day, index) in calendarDays"
            :key="index"
            class="calendar__cell"
            :class="[
              !isSameMonth(day) && '_other-month',
              isToday(day) && '_current',
              isSelected(day) && '_selected',
              isWeekend(day) && '_weekend',
            ]"
            @click="selectDate(day)"
          >
            {{ day.date() }}
          </div>
        </div>
      </div>

      <input type="hidden" id="datepick_value" :value="selectedDate?.format('DD.MM.YYYY') || ''" />
      <div class="calendar__period">
        <p class="calendar__p date-end">
          {{ selectedDate ? 'Срок исполнения:' : 'Выберите срок исполнения' }}
          <span class="date-control">
            {{ selectedDate?.format('DD.MM.YYYY') || '' }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekday from 'dayjs/plugin/weekday'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import ru from 'dayjs/locale/ru'

import PrevIcon from '../icons/PrevIcon.vue'
import NextIcon from '../icons/NextIcon.vue'

defineProps({
  isError: {
    type: Boolean,
    default: false,
  },
})

dayjs.extend(isoWeek)
dayjs.extend(weekday)
dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
dayjs.locale(ru)

const model = defineModel({ type: String, default: undefined })

const selectedDate = computed({
  get: () => {
    const parsed = model.value ? dayjs(model.value, 'DD.MM.YYYY') : null
    return parsed
  },
  set: (val) => {
    model.value = dayjs(val, 'DD.MM.YYYY')
  },
})

const currentMonth = ref(selectedDate.value || dayjs()) // текущий видимый месяц

const monthTitle = computed(() => currentMonth.value.format('MMMM YYYY'))

const calendarDays = computed(() => {
  const startOfMonth = currentMonth.value.startOf('month')
  const endOfMonth = currentMonth.value.endOf('month')
  const start = startOfMonth.startOf('week').add(1, 'day')
  const end = endOfMonth.endOf('week').add(1, 'day')

  const days = []
  let day = start

  while (day.isBefore(end, 'day')) {
    days.push(day)
    day = day.add(1, 'day')
  }

  return days
})

function prevMonth() {
  currentMonth.value = currentMonth.value.subtract(1, 'month')
}
function nextMonth() {
  currentMonth.value = currentMonth.value.add(1, 'month')
}

function selectDate(day) {
  selectedDate.value = day
}

function isSameMonth(day) {
  return day.month() === currentMonth.value.month()
}
function isToday(day) {
  return day.isSame(dayjs(), 'day')
}
function isSelected(day) {
  return selectedDate.value?.isSame(day, 'day')
}
function isWeekend(day) {
  return [0, 6].includes(day.day())
}
</script>

<style lang="scss" scoped>
.error {
  border: 1px solid;
  border-color: red !important;
  border-radius: 4px;
}

.calendar {
  width: 182px;
  margin-bottom: 20px;
}
.calendar__ttl {
  margin-bottom: 14px;
  padding: 0 7px;
}
.calendar__p {
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
}
.calendar__p span {
  color: #000000;
}
.calendar__block {
  display: block;
}
.calendar__month {
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
}
.calendar__content {
  margin-bottom: 12px;
}
.calendar__days-names {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
}
.calendar__day-name {
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
}
.calendar__cells {
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
}
.calendar__cell {
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
}
.calendar__nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
}
.calendar__period {
  padding: 0 7px;
}
@media screen and (max-width: 660px) {
  .calendar {
    max-width: 340px;
    width: 100%;
  }
  .calendar__ttl,
  .calendar__nav,
  .calendar__period {
    padding: 0;
  }
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }
  .calendar__p {
    font-size: 14px;
  }
  .calendar__day-name {
    font-size: 14px;
  }
  .calendar__cells {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .calendar__cell {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
}
</style>
