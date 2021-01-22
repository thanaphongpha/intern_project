<template>
  <div class="container">

    <v-row >
      <v-col class="d-flex justify-center">
        <h2>ระบบลาออนไลน์</h2>
      </v-col>
    </v-row>

    <v-row >
      <v-col class="d-flex justify-center">
        <router-link to="/leavework">
          <v-btn>ใบลา</v-btn>
        </router-link>
        <router-link to="/holidaywork">
          <v-btn class="ml-3 mr-3">ทำงานวันหยุด</v-btn>
        </router-link>
        <router-link to="/workfromhome">
          <v-btn>ทำงานที่บ้าน</v-btn>
        </router-link>
      </v-col>
    </v-row>


    <router-view></router-view>
  </div>


</template>
<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  data() {
    return {
      leaveDatas: [],
      leavePaper: {},
      dialog: false,
      rules: [
        value => !!value || 'Required.'
      ],
      dateStart: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      //menu2: false,
      dateEnd: new Date().toISOString().substr(0, 10),
      menu2: false,
      modal2: false
    }
  },
  components: {},
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {

      // const url = 'http://localhost:8000/leavedataperson'
      //
       axios
      //     .get(url, {params: {id: this.user.id}})
      //     .then((respone) => {
      //       if (respone.status === 200) {
      //         this.leaveDatas = respone.data
      //         console.log('response', respone.data)
      //         console.log('lenth', respone.data.length)
      //       }
      //     })
      //     .catch((error) => {
      //       console.log('error', error)
      //     })
    },
    putData() {

      // const url = 'http://localhost:8000/leavedata'
      // this.leavePaper.emp_id = 1
      // this.leavePaper.dateStart = this.dateStart
      // this.leavePaper.dateEnd = this.dateEnd
      // this.leavePaper.status = 'อยู่ระหว่างการอนุมัติ'
      // console.log('leavePaper', this.leavePaper)
      //
      // axios
      //     .post(url, this.leavePaper)
      //     .then((respone) => {
      //       if (respone.status === 200) {
      //         this.loadData()
      //         console.log('response', respone.data)
      //         console.log('lenth', respone.data.length)
      //       }
      //     })
      //     .catch((error) => {
      //       console.log('error', error)
      //     })
    }

  }
}
</script>
