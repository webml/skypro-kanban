<template>
  <div class="pop-new-card__calendar calendar">
    <p class="calendar__ttl subttl">Даты</p>
    <div class="calendar__block">
      <div class="calendar__nav">
        <div class="calendar__month">Сентябрь 2023</div>
        <div class="nav__actions">
          <div class="nav__action" data-action="prev">
            <PrevIcon />
          </div>
          <div class="nav__action" data-action="next">
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
          <div class="calendar__cell _other-month">28</div>
          <div class="calendar__cell _other-month">29</div>
          <div class="calendar__cell _other-month">30</div>
          <div class="calendar__cell _cell-day">31</div>
          <div class="calendar__cell _cell-day">1</div>
          <div class="calendar__cell _cell-day _weekend">2</div>
          <div class="calendar__cell _cell-day _weekend">3</div>
          <div class="calendar__cell _cell-day">4</div>
          <div class="calendar__cell _cell-day">5</div>
          <div class="calendar__cell _cell-day">6</div>
          <div class="calendar__cell _cell-day">7</div>
          <div class="calendar__cell _cell-day _current">8</div>
          <div class="calendar__cell _cell-day _weekend">9</div>
          <div class="calendar__cell _cell-day _weekend">10</div>
          <div class="calendar__cell _cell-day">11</div>
          <div class="calendar__cell _cell-day">12</div>
          <div class="calendar__cell _cell-day">13</div>
          <div class="calendar__cell _cell-day">14</div>
          <div class="calendar__cell _cell-day">15</div>
          <div class="calendar__cell _cell-day _weekend">16</div>
          <div class="calendar__cell _cell-day _weekend">17</div>
          <div class="calendar__cell _cell-day">18</div>
          <div class="calendar__cell _cell-day">19</div>
          <div class="calendar__cell _cell-day">20</div>
          <div class="calendar__cell _cell-day">21</div>
          <div class="calendar__cell _cell-day">22</div>
          <div class="calendar__cell _cell-day _weekend">23</div>
          <div class="calendar__cell _cell-day _weekend">24</div>
          <div class="calendar__cell _cell-day">25</div>
          <div class="calendar__cell _cell-day">26</div>
          <div class="calendar__cell _cell-day">27</div>
          <div class="calendar__cell _cell-day">28</div>
          <div class="calendar__cell _cell-day">29</div>
          <div class="calendar__cell _cell-day _weekend">30</div>
          <div class="calendar__cell _other-month _weekend">1</div>
        </div>
      </div>

      <input type="hidden" id="datepick_value" value="08.09.2023" />
      <div class="calendar__period">
        <p class="calendar__p date-end">
          {{ date ? 'Срок исполнения:' : 'Выберите срок исполнения' }}
          <span class="date-control">{{ date }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import NextIcon from '../icons/NextIcon.vue'
import PrevIcon from '../icons/PrevIcon.vue'

const { date } = defineProps({
  date: { type: String || undefined, default: undefined },
})
</script>

<style lang="scss" scoped>
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
