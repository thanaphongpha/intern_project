<template>
  <div class="container">

    <div class="row  justify-center">
      <h2>ระบบลงเวลาทำงาน</h2>
      {{ user }}

      <br>
    </div>
    <div class="row mt-5 d-flex justify-center">
      <h3>
        <digital-clock :blink="true"/>
      </h3>

    </div>
    <div class="row d-flex justify-center mt-3">
      {{ todayDate }}
    </div>


    <div class="row  justify-center mt-4">

      <v-btn class="btn btn-success mr-4" @click="checkIn" color="success">บันทึกเวลาเข้า</v-btn>
      <v-btn class="btn btn-danger" @click="checkOut" color="red" light>บันทึกเวลาออก</v-btn>
    </div>

    <div class="row  ">
      <div class="col-6 d-flex justify-center">เวลาเข้างาน</div>
      <div class="col-6 d-flex justify-center">เวลาออกงาน</div>
    </div>

    <div class="row">
      <div class="col-6 d-flex justify-center"> {{ formatDateIn() }}

      </div>

      <template v-if="timeDatas !== undefined && timeDatas !== 0">
        <template  v-if="timeDatas.created_at !== timeDatas.updated_at">
          <div class="col-6 d-flex justify-center">
            {{ formatDateOut()}}
          </div>

        </template>
      </template>

    </div>

  </div>
</template>
<script>

import axios from 'axios'
import DigitalClock from 'vue-digital-clock'
import moment from 'moment'
import {mapState} from 'vuex'

var date = new Date('2014-02-27T10:00:00')
var formatted = moment(date).format('D MMMM YYYY')
var d = new Date('2020-04-13T00:00:00.000+08:00') /* midnight in China on April 13th */
d.toLocaleString('en-US', {timeZone: 'America/New_York'})

export default {
  data() {
    return {
      todayDate: moment().format('MMMM Do YYYY'),
      alert: null,
      id: 1,
      chkOut: false,

      checkInObj: {
        checkInStatus: 1,
        employeeId: 1
      },
      checkOutObj: {
        checkOutStatus: 1,
        employeeId: 1
      },
      timeDatas: [],

      date: new Date(),
      time: new Date(),
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Photos', icon: 'mdi-image'},
        {title: 'About', icon: 'mdi-help-box'},
      ],
      right: null
    }
  },
  components: {
    DigitalClock
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {

    submittableDateTime() {
      const date = new Date(this.date)
      date.setHours(this.time.getHours())
      date.setMinutes(this.time.getMinutes())
      console.log(date)
      return date
    },
    loadData() {
      console.log('checkIn', this.checkInObj)
      const url = 'http://localhost:8000/checkIn'

      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.timeDatas = respone.data
              console.log('responseloadData', respone.data)
              console.log('lenth', respone.data.length)
              // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])
              this.timeDatas = this.timeDatas[this.timeDatas.length - 1]
              console.log('show', this.timeDatas)
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    checkIn() {
      this.checkInObj.employeeId = this.user.id
      console.log('Obj',this.checkInObj)
      // this.checkInObj.createdAt = moment()
      const url = 'http://localhost:8000/checkIn'
      axios
          .post(url, this.checkInObj)
          .then((respone) => {
            if (respone.status === 200) {
              this.alert = respone.data.message

              if (this.alert === 'Success') {
                this.$swal({icon: 'success', title: 'ลงเวลาเข้าสำเร็จ'})
                console.log('response.alert', this.alert)
                this.loadData()

              } else {
                this.$swal({icon: 'error', title: 'มีการลงเวลาเข้าแล้ว'})
                console.log('response.alert', this.alert)

              }
            }

          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    checkOut() {
      this.checkOutObj.employeeId = this.user.id
      console.log('id', this.timeDatas.id)
      const url = 'http://localhost:8000/checkOut/' + this.timeDatas.id
      axios
          .put(url, this.checkOutObj)
          .then((respone) => {
            if (respone.status === 200) {
              this.alert = respone.data.message
              console.log('response', respone.data)
              this.loadData()
              this.checkOutObj.checkOutStatus = this.checkOutObj.checkOutStatus + 1

              if (this.alert === 'Success') {
                this.$swal({icon: 'success', title: 'ลงเวลาออกสำเร็จ'})
                console.log('response.alert', this.alert)
                this.loadData()

              } else {
                this.$swal({icon: 'error', title: 'มีการลงเวลาออกแล้ว'})
                console.log('response.alert', this.alert)

              }
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    formatDateIn() {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')
      // console.log('x', x)
      console.log(887878, typeof this.timeDatas)
      if (typeof this.timeDatas !== 'undefined' && this.timeDatas.length != 0) {
        console.log(555555555555555)
        if (this.timeDatas.start_time) {
          const date = moment(this.timeDatas.start_time).format('DD-MM-YYYY | hh:mm:ss a')
          return date
        }
      }


    },
    formatDateOut() {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')
      console.log('x', formatted)

      if (typeof this.timeDatas !== 'undefined' && this.timeDatas.length != 0) {
        console.log(555555555555555)
        if (this.timeDatas.end_time) {
          const date = moment(this.timeDatas.end_time).format('DD-MM-YYYY | hh:mm:ss a')
          return date
        }
      }



    }
  },
  created() {
    this.loadData()
  }
}

</script>
<style scoped>
#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);

.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}

.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}

.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}

}

</style>
