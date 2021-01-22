<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center">
        <h2>Work For Home</h2>
      </v-col>

    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">
        <router-link to="/leave">
          <v-btn>ย้อนกลับ</v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn


              v-bind="attrs"
              v-on="on"
          >
            ยื่นเรื่องขอลา
          </v-btn>




        </template>
        <v-card>
          <v-card-title>
            <span class="headline">กรอกข้อมูลการลา</span>


          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"

                >
                  <v-select
                      :items="['ทำงานที่บ้าน']"
                      label="ประเภทการลา"
                      required
                      :rules="rules"
                      hide-details="auto"
                      v-model="leavePaper.leave_type"
                  ></v-select>
                </v-col>

                <v-col cols="12">


                  <v-text-field
                      label="รายละเอีอด"
                      required
                      :rules="rules"
                      hide-details="auto"
                      v-model="leavePaper.leave_desc"
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="6"

                >
                  <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="dateStart"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="dateStart"
                          label="วันที่เริ่มต้น"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="dateStart"
                        no-title
                        scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="red"
                          @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(dateStart)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                    cols="6"

                >
                  <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :return-value.sync="dateEnd"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="dateEnd"
                          label="วันที่สิ้นสุด"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="dateEnd"
                        no-title
                        scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="red"
                          @click="menu2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                          text
                          color="primary"
                          @click="$refs.menu2.save(dateEnd)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>


              </v-row>
            </v-container>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="red"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false,putData()"

            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">รายการที่</v-col>
      <v-col class="d-flex justify-center">ประเภทการลา</v-col>
      <v-col class="d-flex justify-center">รายละเอียดการลา</v-col>
      <v-col class="d-flex justify-center">วันที่ลา</v-col>
      <v-col class="d-flex justify-center">สถานะ</v-col>
    </v-row>
    <div v-for="(leaveData,index) in leaveDatas" :key="index">
      <v-row>
        <v-col class="d-flex justify-center">{{ index + 1 }}</v-col>
        <v-col class="d-flex justify-center">{{ leaveData.leave_type }}</v-col>
        <v-col class="d-flex justify-center">{{ leaveData.leave_desc }}</v-col>
        <v-col class="d-flex justify-center">{{ leaveData.start }}{{ ' - ' }}{{ leaveData.end }}</v-col>
        <v-col class="d-flex justify-center">{{ leaveData.leave_status }}</v-col>
      </v-row>
    </div>
  </div>


</template>
<script>
import axios from "axios";

export default {
  data (){
    return{
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
  computed: {},
  created() {
    this.loadData()
  },
  methods: {
    loadData() {

      const url = 'http://localhost:8000/workfromhome'

      axios
          .get(url,)
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveDatas = respone.data
              console.log('response', respone.data)
              console.log('lenth', respone.data.length)
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    putData() {

      const url = 'http://localhost:8000/workfromhome'
      this.leavePaper.emp_id = 1
      this.leavePaper.dateStart = this.dateStart
      this.leavePaper.dateEnd = this.dateEnd
      this.leavePaper.status = 'อยู่ระหว่างการอนุมัติ'
      console.log('leavePaper', this.leavePaper)

      axios
          .post(url, this.leavePaper)
          .then((respone) => {
            if (respone.status === 200) {
              this.loadData()
              console.log('response', respone.data)
              console.log('lenth', respone.data.length)
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    }

  }
}
</script>

