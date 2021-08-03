<template>
  <div class="container">
    <div class="row ">
      <div class="col d-flex justify-center">
        <h2>ประวัติการเข้า - ออกงาน</h2>

      </div>

    </div>

    <div class="d-none d-sm-inline">

      <v-row class="row d-flex justify-center">
        <v-col class="row d-flex justify-center">
          <v-card width="1200px" elevation="0">
            <div class="row d-flex justify-center">

              <div class="col">
                <v-card height="170px">
                  <v-card-text>
                    <v-card height="50px" elevation="0"><h1>เข้างานปกติ</h1></v-card>
                    <v-card height="80px" elevation="0" class="d-flex align-end justify-end">
                      <div class="col"
                           style="font-size: 1.5rem; font-weight: bold; position:absolute;top:49px; right: 10px;">
                        {{ month }}
                      </div>
                      <div class="col">
                        <div class="day" style="position:absolute;top:39px;right: 30px;">{{ normal }}</div>
                      </div>
                      <span style="font-size: 1.5rem; font-weight: bold ">วัน</span>
                    </v-card>
                  </v-card-text>
                </v-card>
              </div>

              <div class="col">
                <v-card height="170px">
                  <v-card-text>
                    <v-card height="50px" elevation="0"><h1>เข้างานสาย</h1></v-card>
                    <v-card height="80px" elevation="0" class="d-flex align-end justify-end">
                      <div class="col"
                           style="font-size: 1.5rem; font-weight: bold; position:absolute;top:49px; right: 10px;">
                        {{ month }}
                      </div>
                      <div class="col">
                        <div class="day" style="position:absolute;top:39px;right: 30px;">{{ late }}</div>
                      </div>
                      <span style="font-size: 1.5rem; font-weight: bold ">วัน</span>
                    </v-card>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <v-card width="1200" elevation="0" class="mt-2">
            <v-btn fab elevation="1" @click="view='table'">
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-btn class="ml-2" fab elevation="1" @click="view='calendar'">
              <v-icon>mdi-table</v-icon>
            </v-btn>


          </v-card>
        </v-col>
      </v-row>

      <div v-if="view === 'table'">
        <div class="row">
          <div class="col d-flex justify-center">
            <v-card class="responsive_table" width="68%" height="100%">
              <v-card-text>
                <div class="container mt-3">
                  <v-simple-table

                  >
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th scope="col" class="no">#</th>
                        <th scope="col" class="text-center date">วันที่</th>
                        <th scope="col" class="text-center timeIn">เวลาเข้า</th>
                        <th scope="col" class="text-center timeOut">เวลาออก</th>

                        <th scope="col" class="text-center status">สถานะ</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr v-for="(leaveData,index) in timeDatasPag" :key="index">

                        <th scope="row">{{ leaveData.id }}</th>
                        <td class="text-center">{{ leaveData.start_date }}</td>
                        <td class="text-center">{{ leaveData.start_time }}</td>

                        <td class="text-center">{{ leaveData.end_time }}</td>
                        <td class="text-center">
                          <template v-if="leaveData.status  === 'ปกติ'">
                            <v-chip
                                color="green"
                                outlined
                            >{{ leaveData.status }}
                            </v-chip>
                          </template>
                          <template v-if="leaveData.status  === 'สาย'">
                            <v-chip
                                color="warning"
                                outlined
                            >{{ leaveData.status }}
                            </v-chip>
                          </template>


                        </td>

                      </tr>


                      </tbody>


                    </template>

                  </v-simple-table>

                  <v-pagination
                      class="mt-5"
                      v-model="page"
                      :length="pageAll"
                      circle
                      @input="loadDataPagination()"


                  ></v-pagination>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>


        <!--                    <v-layout row>-->
        <!--        <v-flex>-->
        <!--          <v-card>-->
        <!--            <template v-for="(beer, index) in beers">-->
        <!--              <v-layout-->
        <!--                  :key="index"-->

        <!--              >-->
        <!--                <v-flex xs5>-->
        <!--                  <v-img-->
        <!--                      :src="beer.img"-->
        <!--                      height="125px"-->
        <!--                      contain-->
        <!--                  ></v-img>-->
        <!--                </v-flex>-->
        <!--                <v-flex xs7>-->
        <!--                  <v-card-title primary-title>-->
        <!--                    <div>-->
        <!--                      <div class="headline" v-html="beer.name"></div>-->
        <!--                      <div v-html="beer.tagline"></div>-->
        <!--                    </div>-->
        <!--                  </v-card-title>-->
        <!--                </v-flex>-->
        <!--              </v-layout>-->
        <!--            </template>-->
        <!--            <div v-if="beers.length === 0">-->
        <!--              <v-progress-circular-->
        <!--                  indeterminate-->
        <!--                  color="primary"-->
        <!--                  class="bottom"-->
        <!--              />-->
        <!--            </div>-->
        <!--          </v-card>-->
        <!--        </v-flex>-->
        <!--      </v-layout>-->

        <!--      <v-layout row>-->
        <!--        <v-flex>-->
        <!--          <v-card>-->
        <!--            <template v-for="(beer, index) in dataTimeLine">-->
        <!--              <v-layout-->
        <!--                  :key="index"-->

        <!--              >-->
        <!--                <v-flex xs5>-->
        <!--                  <v-img-->
        <!--                      :src="beer.img"-->
        <!--                      height="125px"-->
        <!--                      contain-->
        <!--                  ></v-img>-->
        <!--                </v-flex>-->
        <!--                <v-flex xs7>-->
        <!--                  <v-card-title primary-title>-->
        <!--                    <div>-->
        <!--                      <div class="headline">{{ beer.name }} -&#45;&#45; {{ dataTimeLine.length }}</div>-->
        <!--                      <div v-html="beer.tagline"></div>-->
        <!--                    </div>-->
        <!--                  </v-card-title>-->
        <!--                </v-flex>-->
        <!--              </v-layout>-->
        <!--            </template>-->

        <!--            <div v-if="progress === 1">-->
        <!--              <v-progress-circular-->
        <!--                  indeterminate-->
        <!--                  color="primary"-->
        <!--                  class="bottom"-->
        <!--              />-->
        <!--            </div>-->
        <!--          </v-card>-->
        <!--        </v-flex>-->
        <!--      </v-layout>-->

        <v-row>
          <v-col class="d-flex justify-center">

            <v-card width="1200" height="100" elevation="0"></v-card>
          </v-col>
        </v-row>

      </div>


      <div v-if="view === 'calendar'">
        <div class="row">
          <div class="col d-flex justify-center">
            <v-card class="responsive_calendar" width="68%">
              <v-card-text>
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
                          :events="events"
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
          </div>
        </div>
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
    </div>

    <div class="d-inline d-sm-none">

      <v-timeline
          align-top
          dense
          v-for="(item,index) in dataTimeLine" :key="index"

      >
        <v-timeline-item
            :color="item.color"
            small

        >
          <v-row class="pt-1">
            <v-col cols="6">
              <strong>{{ item.time }}</strong>
            </v-col>
            <v-col cols="6">
              <strong>{{ item.date }}</strong>
              <div class="caption">
                ปกติ
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>


      </v-timeline>
      <div v-if="progress === 1" class="text-center">
        <v-progress-circular
            indeterminate
            color="primary"
            class="bottom"
        />
      </div>
      <v-row>
        <v-col class="d-flex justify-center">

          <v-card width="1200" height="100" elevation="0"></v-card>
        </v-col>
      </v-row>
    </div>
    <!--    <div class="row">-->
    <!--      <div class="col-6 d-flex justify-center">In</div>-->
    <!--      <div class="col-6 d-flex justify-center">Out</div>-->
    <!--    </div>-->
    <!--    <div v-for="(timeData,index) in timeDatas" :key="index">-->
    <!--      <div class="row">-->
    <!--        <div class="col-6 d-flex justify-center">{{ formatDateIn(timeData.created_at) }}</div>-->
    <!--        <div class="col-6 d-flex justify-center">{{ formatDateOut(timeData.updated_at) }}</div>-->

    <!--      </div>-->
    <!--    </div>-->


  </div>

</template>
<script>
import axios from 'axios'
import moment from 'moment'
import {mapState} from "vuex";

export default {
  data() {
    return {
      absolute: true,
      overlay: false,
      progress: 0,
      countload: -1,
      dataTimeLine: [],
      bottom: false,
      beers: [],
      month: null,
      todayMonth: moment().format('MM'),
      offsetPage: 0,
      pageAll: null,
      page: 1,
      view: 'calendar',
      normal: null,
      late: null,
      id: 1,
      timeDatas: [],
      timeDatasPag: [],
      historyData: [],
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
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1', 'red'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        // this.addBeer()
        this.addData()
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      console.log('bottomOfPage', bottomOfPage || pageHeight < visible)
      return bottomOfPage || pageHeight < visible
    },
    addBeer() {
      axios.get('https://api.punkapi.com/v2/beers/random')
          .then(response => {
            let api = response.data[0];
            let apiInfo = {
              name: api.name,
              img: api.image_url,
              tagline: api.tagline,
            };
            this.beers.push(apiInfo)
            if (this.bottomVisible()) {
              this.addBeer()
            }
          })
    },
    addData() {
      this.countload++
      console.log('countload', this.countload)
      this.progress = 1
      axios.get('http://localhost:8000/history', {params: {id: this.user.id, offsetPage: this.countload}})
          .then(response => {
            let api = response.data;
            console.log('api', api)
            //console.log('respone',response.data)

            if (Object.entries(api).length !== 0) {
              if (api.start_time) {
                let checkInInfo = {
                  date: api.start_date,
                  time: 'เข้า ' + api.start_time,
                  color: 'teal lighten-3'
                };
                this.dataTimeLine.push(checkInInfo)
                this.progress = 0
              }
              if (api.end_time) {
                let checkInInfo = {
                  date: api.start_date,
                  time: 'ออก ' + api.end_time,
                  color: 'pink'

                };
                this.dataTimeLine.push(checkInInfo)
                this.progress = 0
              }


            }

            console.log('Timeline-1', this.dataTimeLine)
            if (this.bottomVisible()) {
              this.addData()
            }
            this.progress = 0

          })

    },
    loadData() {
      console.log('checkIn', this.checkInObj)
      const url = 'http://localhost:8000/checkIn'

      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.timeDatas = respone.data
              console.log('response', respone.data)
              console.log('lenth', respone.data.length)
              // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])

              console.log('show', this.timeDatas)
              this.pageAll = Math.ceil(this.timeDatas.length / 15)

              console.log('PageAll', this.pageAll)

            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    loadDataPagination() {
      console.log('testPage')
      if (this.page > 1) {
        console.log('testPage2')
        for (let i = 1; i < this.page; i++) {
          this.offsetPage = this.offsetPage + 15
          console.log('testPage3')
          console.log('offset', this.offsetPage)
        }
      }

      if (screen.height > 1080) {
        console.log('screen', screen.height)
        // alert('height')
      }

      const url = 'http://localhost:8000/checkInpagination'

      axios
          .get(url, {params: {id: this.user.id, offsetPage: this.offsetPage}})
          .then((respone) => {
            if (respone.status === 200) {
              this.timeDatasPag = respone.data
              console.log('responseTimePage', this.timeDatasPag)
              console.log('lenth', respone.data.length)
              // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])

              for (let i = 0; i < this.timeDatasPag.length; i++) {
                this.timeDatasPag[i].id = this.offsetPage + 1
                this.offsetPage++

              }
              console.log('show', this.timeDatas)
              console.log('offset', this.offsetPage)
              this.offsetPage = 0

            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    formatDateIn(tt) {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')
      // console.log('x', x)
      if (tt) {
        const dateIn = moment(tt).format('DD-MM-YYYY | hh:mm:ss a')
        return dateIn
      }
    },
    formatDateOut(tt) {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')

      if (tt) {
        const date = moment(tt).format('hh:mm:ss a')
        return date
      }
    },
    loadData2() {
      // const url = 'http://localhost:8000/leavedata'
      // axios
      //     .get(url)
      //     .then((respone) => {
      //       if (respone.status === 200) {
      //         this.leaveData = respone.data
      //         console.log('response', this.leaveData[0])
      //
      //         // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])
      //
      //
      //       }
      //     })
      //     .catch((error) => {
      //       console.log('error', error)
      //     })
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
      this.count()

    },
    next() {
      this.$refs.calendar.next()
      this.count()
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
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
    updateRange({start, end}) {
      //this.loadData()
      const url = 'http://localhost:8000/checkIn'
      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.historyData = respone.data
              this.count()
              console.log('response111', this.historyData)

              for (let i = 0; i < this.historyData.length; i++) {
                const allDay = this.rnd(0, 3) === 0

                console.log('allDay', allDay, i)
                // const dateIn = this.historyData[i].start_time
                const dateIn = moment(this.historyData[i].start_date).format('YYYY-MM-DD')
                console.log('datePure', moment(this.historyData[i].start_date).format('DD-MM-YYYY'))
                const first = dateIn
                const second = moment(this.historyData[i].start_date).format('YYYY-MM-DD')
                let color

                if (this.historyData[i].status === 'ปกติ') {
                  color = 'green'
                }
                if (this.historyData[i].status === 'สาย') {
                  color = 'warning'
                }

                events.push({
                  name: 'เวลาเข้า ' + (this.historyData[i].start_time),
                  start: first,
                  end: first,
                  color: color,
                  timed: !allDay,

                })
                if (this.historyData[i].end_time !== null) {
                  events.push({
                    name: 'เวลาออก ' + (this.historyData[i].end_time),
                    start: second,
                    end: second,
                    color: this.colors[7],
                    timed: !allDay,
                  })
                }
              }
              this.overlay = false
            }
          })
          .catch((error) => {
            console.log('error', error)
          })


      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      console.log('day', days)
      const eventCount = 1
      console.log('eventCount', eventCount)


      this.events = events
    },
    count() {
      let normal = 0
      let late = 0
      console.log('ปกติ', this.historyData)
      console.log('ทดสอบเดือน', moment(this.$refs.calendar.lastStart.date).format('MM'))
      for (let i = 0; i < this.historyData.length; i++) {
        this.month = this.$refs.calendar.title
        let monthCurrent = moment(this.$refs.calendar.lastStart.date).format('MM')
        let month = moment(this.historyData[i].start_date).format('MM')
        console.log('month', month)

        if (monthCurrent === month) {
          if (this.historyData[i].status == 'ปกติ') {
            console.log('ปกติ')
            normal = normal + 1
          }
          if (this.historyData[i].status == 'สาย') {
            console.log('สาย')
            late = late + 1
          }
        }


      }
      this.normal = normal
      this.late = late

      console.log('valueConnt', this.normal, this.late)

    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },

  },
  created() {
    this.overlay = true
    this.loadData()
    this.loadDataPagination()
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    // this.addBeer()
    this.addData()
  }

}
</script>
<style>
th.no {
  width: 1%;
}
</style>
<style scoped>

@media screen and (max-width: 1903px) {
  .responsive_table {
    width: 100% !important;
  }

  .responsive_calendar {
    width: 100% !important;
  }

}

@media screen and (max-width: 1080px) {
  h1 {
    font-size: 1rem !important;
  }

  th.no {
    width: 1%;
  }

  th {
    font-size: 0.5rem !important;
  }

  /*.responsive_table {*/
  /*   !* The width is 100%, when the viewport is 800px or smaller *!*/
  /*  height: 1335px !important;*/
  /*}*/
}

.day {
  font-size: 5rem;
  display: inline;
}

.colorwork {
  color: gray;
}
</style>
