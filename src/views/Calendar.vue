<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col text-center"><h1>ปฎิทิน</h1></div>
      </div>

      <div class="d-none d-sm-inline">

        <v-row>

          <v-col class="d-flex justify-end">
            <v-card class="pt-2 pb-2" width="10%">
              <v-badge color="pink" offset-x="-8"></v-badge>
              <span class="font-white">.......</span> วันหยุดบริษัท <br>
              <v-badge offset-x="-8" color="blue"></v-badge>
              <span class="font-white">.......</span> ลากิจ <br>
              <v-badge offset-x="-8" color="green"></v-badge>
              <span class="font-white">.......</span> ลาพักร้อน <br>
              <v-badge offset-x="-8" color="warning"></v-badge>
              <span class="font-white">.......</span> ลาป่วย
            </v-card>


          </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-tabs>
                <v-tab @click="allEvents()">ทั้งหมด</v-tab>
                <v-tab @click="updateRange()">วันลา</v-tab>
                <v-tab @click="holiday()">วันหยุด</v-tab>
                <v-tab-item
                >
                  <v-card
                      color="basil"
                      flat
                  >
                    <v-card-text>

                      <!--                                all                            -->
                      <v-row class="fill-height">

                        <v-col>
                          <v-sheet height="64">
                            <v-toolbar flat>
                              <v-btn
                                  outlined
                                  class="mr-4"
                                  color="grey darken-2"
                                  @click="setToday"
                              >
                                Today
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="prev">
                                <v-icon small> mdi-chevron-left</v-icon>
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="next">
                                <v-icon small> mdi-chevron-right</v-icon>
                              </v-btn>
                              <v-toolbar-title v-if="$refs.calendar">
                                {{ $refs.calendar.title }}
                              </v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-menu bottom right>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                      outlined
                                      color="grey darken-2"
                                      v-bind="attrs"
                                      v-on="on"
                                  >
                                    <span>{{ typeToLabel[type] }}</span>
                                    <v-icon right> mdi-menu-down</v-icon>
                                  </v-btn>
                                </template>
                                <v-list>
                                  <v-list-item @click="type = 'day'">
                                    <v-list-item-title>Day</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'week'">
                                    <v-list-item-title>Week</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'month'">
                                    <v-list-item-title>Month</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = '4day'">
                                    <v-list-item-title>4 days</v-list-item-title>
                                  </v-list-item>
                                </v-list>
                              </v-menu>
                            </v-toolbar>
                          </v-sheet>
                          <v-sheet height="600">
                            <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :events="eventsAll"
                                :event-color="getEventColor"
                                :type="type"
                                @click:event="showEvent"
                                @click:more="viewDay"
                                @click:date="viewDay"
                                @change="updateRange"
                            ></v-calendar>
                            <v-menu
                                v-model="selectedOpen"
                                :close-on-content-click="false"
                                :activator="selectedElement"
                                offset-x
                            >
                              <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                  <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                  </v-btn>


                                  <v-toolbar-title

                                      v-html="selectedEvent.name"
                                  ></v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                  </v-btn>
                                  <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                  </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                  <span v-html="selectedEvent.details"></span>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn text color="secondary" @click="selectedOpen = false">
                                    Cancel
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-menu>
                          </v-sheet>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>

                </v-tab-item>
                <v-tab-item

                >
                  <v-card
                      color="basil"
                      flat
                  >

                    <v-card-text>
                      ปฎิทินวันลา
                      <v-row class="fill-height">

                        <v-col>
                          <v-sheet height="64">
                            <v-toolbar flat>
                              <v-btn
                                  outlined
                                  class="mr-4"
                                  color="grey darken-2"
                                  @click="setToday"
                              >
                                Today
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="prev">
                                <v-icon small> mdi-chevron-left</v-icon>
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="next">
                                <v-icon small> mdi-chevron-right</v-icon>
                              </v-btn>
                              <v-toolbar-title v-if="$refs.calendar">
                                {{ $refs.calendar.title }}
                              </v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-menu bottom right>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                      outlined
                                      color="grey darken-2"
                                      v-bind="attrs"
                                      v-on="on"
                                  >
                                    <span>{{ typeToLabel[type] }}</span>
                                    <v-icon right> mdi-menu-down</v-icon>
                                  </v-btn>
                                </template>
                                <v-list>
                                  <v-list-item @click="type = 'day'">
                                    <v-list-item-title>Day</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'week'">
                                    <v-list-item-title>Week</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'month'">
                                    <v-list-item-title>Month</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = '4day'">
                                    <v-list-item-title>4 days</v-list-item-title>
                                  </v-list-item>
                                </v-list>
                              </v-menu>
                            </v-toolbar>
                          </v-sheet>
                          <v-sheet height="600">
                            <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :events="eventsLeave"
                                :event-color="getEventColor"
                                :type="type"
                                @click:event="showEvent"
                                @click:more="viewDay"
                                @click:date="viewDay"
                                @change="updateRange"
                            ></v-calendar>
                            <v-menu
                                v-model="selectedOpen"
                                :close-on-content-click="false"
                                :activator="selectedElement"
                                offset-x
                            >
                              <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                  <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                  </v-btn>


                                  <v-toolbar-title

                                      v-html="selectedEvent.name"
                                  ></v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                  </v-btn>
                                  <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                  </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                  <span v-html="selectedEvent.details"></span>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn text color="secondary" @click="selectedOpen = false">
                                    Cancel
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-menu>
                          </v-sheet>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <!--                                วันหยุด                           -->
                <v-tab-item

                >
                  <v-card
                      color="basil"
                      flat
                  >
                    <v-card-text>
                      ปฎิทินวันหยุด
                      <v-row class="fill-height">

                        <v-col>
                          <v-sheet height="64">
                            <v-toolbar flat>
                              <v-btn
                                  outlined
                                  class="mr-4"
                                  color="grey darken-2"
                                  @click="setToday"
                              >
                                Today
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="prev">
                                <v-icon small> mdi-chevron-left</v-icon>
                              </v-btn>
                              <v-btn fab text small color="grey darken-2" @click="next">
                                <v-icon small> mdi-chevron-right</v-icon>
                              </v-btn>
                              <v-toolbar-title v-if="$refs.calendar">
                                {{ $refs.calendar.title }}
                              </v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-menu bottom right>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                      outlined
                                      color="grey darken-2"
                                      v-bind="attrs"
                                      v-on="on"
                                  >
                                    <span>{{ typeToLabel[type] }}</span>
                                    <v-icon right> mdi-menu-down</v-icon>
                                  </v-btn>
                                </template>
                                <v-list>
                                  <v-list-item @click="type = 'day'">
                                    <v-list-item-title>Day</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'week'">
                                    <v-list-item-title>Week</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = 'month'">
                                    <v-list-item-title>Month</v-list-item-title>
                                  </v-list-item>
                                  <v-list-item @click="type = '4day'">
                                    <v-list-item-title>4 days</v-list-item-title>
                                  </v-list-item>
                                </v-list>
                              </v-menu>
                            </v-toolbar>
                          </v-sheet>
                          <v-sheet height="600">
                            <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :events="eventsHoliday"
                                :event-color="getEventColor"
                                :type="type"
                                @click:event="showEvent"
                                @click:more="viewDay"
                                @click:date="viewDay"
                                @change="holiday"
                            ></v-calendar>
                            <v-menu
                                v-model="selectedOpen"
                                :close-on-content-click="false"
                                :activator="selectedElement"
                                offset-x
                            >
                              <v-card color="grey lighten-4" min-width="350px" flat>
                                <v-toolbar :color="selectedEvent.color" dark>
                                  <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                  </v-btn>


                                  <v-toolbar-title

                                      v-html="selectedEvent.name"
                                  ></v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                  </v-btn>
                                  <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                  </v-btn>
                                </v-toolbar>
                                <v-card-text>
                                  <span v-html="selectedEvent.details"></span>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn text color="secondary" @click="selectedOpen = false">
                                    Cancel
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-menu>
                          </v-sheet>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>

              <v-card-text>

              </v-card-text>

            </v-card>


          </v-col>
        </v-row>
        <v-row>
          <v-col>


            <v-overlay
                :z-index="zIndex"
                :value="overlay"
            >
              <v-progress-circular
                  :size="80"
                  color="primary"
                  indeterminate
              ></v-progress-circular>

            </v-overlay>
          </v-col>
        </v-row>

      </div>
      <div class="d-inline d-sm-none">

        <v-tabs>
          <v-tab>วันหยุด</v-tab>
          <v-tab>วันลา</v-tab>


          <v-tab-item>

            <div v-for="(month,index) in monthEvent" :key="index">

              <v-card class="mt-5">
                <v-card-title>{{ month }}</v-card-title>
                <v-card-text>
                  <div v-for="(event,index) in eventsHoliday" :key="index">
                    <div class="row" v-if="month === tranforToThaiMonth(event.start)">
                      <!--                    <div class="col-8" style="font-size: 1rem">{{ event.start }} {{ event.start !== event.end ? event.end : '' }}</div>-->
                      <div class="col-12 " style="font-size: 1rem">{{
                          tranforToDate(event.start)
                        }}{{ event.start !== event.end ? ' - ' + tranforToDate(event.end) : '' }} {{ event.name }}
                      </div>
                      <!--                    <div class="col-8" style="font-size: 1rem">{{ event.start }} {{ event.start !== event.end ? event.end : '' }}</div>-->

                    </div>

                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-tab-item>
          <v-tab-item>

            <div v-for="(month,index) in monthLeave" :key="index">

              <v-card class="mt-5">
                <v-card-title>{{ month }}</v-card-title>
                <v-card-text>
                  <div v-for="(event,index) in eventsLeave" :key="index">
                    <div class="row" v-if="month === tranforToThaiMonth(event.start)">
                      <!--                    <div class="col-8" style="font-size: 1rem">{{ event.start }} {{ event.start !== event.end ? event.end : '' }}</div>-->
                      <div class="col-12 " style="font-size: 1rem">{{
                          tranforToDate(event.start)
                        }}{{ event.end && event.start !== event.end ? ' - ' + tranforToDate(event.end) : ' '  }} {{ event.name }}
                      </div>
                      <!--                    <div class="col-8" style="font-size: 1rem">{{ event.start }} {{ event.start !== event.end ? event.end : '' }}</div>-->

                    </div>

                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-tab-item>

        </v-tabs>

        <div v-if="progress === 1" class="text-center">
<!--          <v-progress-circular-->
<!--              indeterminate-->
<!--              color="primary"-->
<!--              class="bottom"-->
<!--          />-->
        </div>
        <v-row>
          <v-col class="d-flex justify-center">

            <v-card width="1200" height="45" elevation="0"></v-card>


          </v-col>
        </v-row>
      </div>


    </div>

  </div>

</template>
<script>
// import axios from "axios";

import axios from "axios";
import {mapState} from "vuex";
import moment from 'moment'
//import 'moment/locale/th'


export default {
  data() {
    return {
      absolute: true,
      overlay: false,
      progress: 1,
      width: null,
      eventsAll: [],
      test: [],
      monthEvent: [],
      monthLeave: [],
      eventsLeave: [],
      eventsLeaveTest: [],
      eventsHoliday: [],
      holidayData: [],
      leaveData: [],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }
  },
  beforeCreate() {

  },
  created() {
    this.loadData()
    this.overlay = true
    this.allEvents()


  },
  mounted() {

    this.$refs.calendar.checkChange()

  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
  methods: {

    loadData() {
      const url = 'http://localhost:8000/leavedataperson'
      axios
          .get(url)
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveData = respone.data
              console.log('response', this.leaveData[0])

              // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])


            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    viewDay({date}) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
      this.loadData()
      this.allEvents()
    },
    next() {
      this.$refs.calendar.next()
      this.loadData()
      this.allEvents()
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedEvent.details = event.detail
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    async updateRange() {
      //this.loadData()
      const events = []
      const url = 'http://localhost:8000/leavedatadepartment'
      await axios
          .get(url, {params: {departmentName: this.user.departmentName}})
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveData = respone.data
              console.log('responseLeaveData', this.leaveData)

              for (let i = 0; i < this.leaveData.length; i++) {
                const allDay = this.rnd(0, 3) === 0
                console.log('allday', allDay)
                const first = this.leaveData[i].start_date

                console.log('first-----', first)

                const second = this.leaveData[i].end_date

                console.log('second-------', second)
                let color = null
                if (this.leaveData[i].leave_type === 'ลากิจ') {
                  color = 'blue'
                }
                if (this.leaveData[i].leave_type === 'ลาป่วย') {
                  color = 'warning'
                }
                if (this.leaveData[i].leave_type === 'ลาพักร้อน') {
                  color = 'green'
                }
                events.push({

                  name: this.leaveData[i].name + ' : ' + this.leaveData[i].leave_type,
                  start: first,
                  end: second,
                  color: color,
                  timed: !allDay,
                  detail: this.leaveData[i].leave_description
                })
              }

            }
          })
          .catch((error) => {
            console.log('error', error)
          })


      this.eventsLeave = events
      console.log('eventsLeave--11', this.eventsLeave)
      this.pushMonthLeave()
      this.test = events


      return Promise.resolve(events)
    },
    async holiday() {

      this.progress = 1
      const url = 'http://localhost:8000/holiday'
      const events = []
      await axios
          .get(url)
          .then((respone) => {
            if (respone.status === 200) {
              this.holidayData = respone.data
              console.log('Holiday', this.holidayData)
              const allDay = this.rnd(0, 3) === 0
              for (let i = 0; i < this.holidayData.length; i++) {


                //const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                const dateHoliday = moment(this.holidayData[i].start_date).format('YYYY-MM-DD')
                const first = dateHoliday

                console.log('first', first, this.holidayData[i].name)


                // const second = new Date(first.getTime() + secondTimestamp)
                let second
                if (this.holidayData[i].end_date) {
                  second = moment(this.holidayData[i].end_date).format('YYYY-MM-DD')
                } else {
                  second = moment(this.holidayData[i].start_date).format('YYYY-MM-DD')
                }

                console.log('second', second)

                events.push({
                  name: this.holidayData[i].name,
                  start: first,
                  end: second,
                  color: 'pink',
                  timed: !allDay,
                })
              }
              this.progress = 0
              this.overlay = false
              console.log(44444)
            }
          })
          .catch((error) => {
            console.log('error', error)
          })


      const eventCount = 1
      console.log('eventCount', eventCount)
      this.eventsHoliday = events
      console.log('eventsHoliday', this.eventsHoliday)
      this.pushMonthEvent()
      return Promise.resolve(events)

    },
    async allEvents() {
      const lll = await this.updateRange()
      const kkk = await this.holiday()


      this.eventsAll = lll.concat(kkk)

      console.log('tttttt', this.test)


    },

    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    pushMonthEvent() {

      //this.monthEvent =  moment.locale('th')
      //this.monthEvent = moment(this.eventsHoliday[0].start).locale('th').format('MMMM')

      for (let i = 0; i < this.eventsHoliday.length; i++) {

        const checkvalue = this.monthEvent.includes(moment(this.eventsHoliday[i].start).locale('th').format('MMMM YYYY'))
        if (checkvalue === false)
          this.monthEvent.push(moment(this.eventsHoliday[i].start).locale('th').format('MMMM YYYY'))

      }

    },
    pushMonthLeave() {

      //this.monthEvent =  moment.locale('th')
      //this.monthEvent = moment(this.eventsHoliday[0].start).locale('th').format('MMMM')

      for (let i = 0; i < this.eventsLeave.length; i++) {

        const checkvalue = this.monthLeave.includes(moment(this.eventsLeave[i].start).locale('th').format('MMMM YYYY'))
        if (checkvalue === false)
          this.monthLeave.push(moment(this.eventsLeave[i].start).locale('th').format('MMMM YYYY'))

      }

    },
    tranforToThaiMonth(month) {

      let thaiMonth

      if (month) {
        thaiMonth = moment(month).locale('th').format('MMMM YYYY')
      }

      return thaiMonth

    },
    tranforToDate(date) {
      let datePure

      if (date) {
        datePure = moment(date).format('DD')
      }
      return datePure
    }

  },


}
</script>
<style>
.font-white {
  color: white;
}
</style>

