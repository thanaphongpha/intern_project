<template>
  <div class="container">
    <v-row>
      <v-col class="d-flex justify-center">
        <h2>ลางาน </h2>
      </v-col>
    </v-row>


    <v-row>
      <v-col class="d-flex justify-end">
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
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
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
                          :items="['ลาป่วย', 'ลากิจ','ลาพักร้อน', 'ทำงานที่บ้าน','ทำงานวันหยุด']"
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
                    <v-col cols="12" class="mt-0 mb-0">
                      <v-radio-group
                          v-model="dayleave"
                          row
                          required

                      >
                        <v-radio
                            class="mt-0 mb-0"
                            label="วันเดียว"
                            value="1"

                        ></v-radio>
                        <v-radio
                            class="mt-0 mb-0"
                            label="หลายวัน"
                            value="2"
                        ></v-radio>
                      </v-radio-group>
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
                              required
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
                        v-if="dayleave == 2"

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
                              required
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
                    @click="validate()"


                >
                  Save
                </v-btn>
              </v-card-actions>

            </v-form>

          </v-card>
        </v-dialog>


      </v-col>

    </v-row>

    <!--    <v-row>-->
    <!--      <v-col class="d-flex justify-center">-->
    <!--        <v-card width="1200" elevation="0">-->
    <!--          <v-row>-->
    <!--            <v-col>-->
    <!--              <v-card>-->
    <!--                <v-card-text>-->
    <!--                  <v-card height="50px" elevation="0"><h1>วันลาทั้งหมด</h1></v-card>-->
    <!--                  <v-card height="80px" elevation="0" class="d-flex align-end justify-end">-->
    <!--                    <div class="day" style="position:absolute;top:39px;right: 30px;">{{-->
    <!--                        leaveQuota[0].quota_leave-->
    <!--                      }}-->
    <!--                    </div>-->
    <!--                    <span style="font-size: 1.5rem; font-weight: bold ">วัน</span>-->

    <!--                  </v-card>-->
    <!--                </v-card-text>-->
    <!--              </v-card>-->
    <!--            </v-col>-->
    <!--            <v-col>-->
    <!--              <v-card>-->
    <!--                <v-card-text>-->
    <!--                  <v-card height="50px" elevation="0"><h1>วันลาที่ใช้ไป</h1></v-card>-->
    <!--                  <v-card height="80px" elevation="0" class="d-flex align-end justify-end">-->
    <!--                    <div class="day" style="position:absolute;top:39px;right: 30px;">{{ leaveQuota[0].quota_use }}</div>-->
    <!--                    <span style="font-size: 1.5rem; font-weight: bold ">วัน</span>-->
    <!--                  </v-card>-->
    <!--                </v-card-text>-->
    <!--              </v-card>-->
    <!--            </v-col>-->
    <!--            <v-col>-->
    <!--              <v-card>-->
    <!--                <v-card-text>-->
    <!--                  <v-card height="50px" elevation="0"><h1>วันลาที่เหลืออยู่</h1></v-card>-->
    <!--                  <v-card height="80px" elevation="0" class="d-flex align-end justify-end">-->
    <!--                    <div class="day" style="position:absolute;top:39px;right: 30px;">-->
    <!--                      {{ leaveQuota[0].quota_leave - leaveQuota[0].quota_use }}-->
    <!--                    </div>-->
    <!--                    <span style="font-size: 1.5rem; font-weight: bold ">วัน</span>-->
    <!--                  </v-card>-->
    <!--                </v-card-text>-->
    <!--              </v-card>-->
    <!--            </v-col>-->
    <!--          </v-row>-->
    <!--        </v-card>-->

    <!--      </v-col>-->
    <!--    </v-row>-->
    <div class="d-none d-sm-inline">
      <v-row>
        <v-col class="d-flex justify-center col-12">
          <v-card class="responsive_table" width="1200" height="890">
            <v-card-text>
              <div class="container mt-3">
                <v-simple-table

                >
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th scope="col" class="no">#</th>
                      <th scope="col" class="text-center">ประเภทการลา</th>
                      <th scope="col" class="text-center">รายละเอียดการลา</th>
                      <th scope="col" class="text-center">วันเริ่มลา</th>
                      <th scope="col" class="text-center">วันสิ้นสุด</th>
                      <th scope="col" class="text-center">จำนวนวัน</th>
                      <th scope="col" class="text-center">สถานะ</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr v-for="(leaveData,index) in leaveDatasPag" :key="index">

                      <th scope="row">{{index+1}}</th>
                      <td class="text-center">{{ leaveData.leave_type }}</td>
                      <td class="text-center">{{ leaveData.leave_description }}</td>
                      <td class="text-center">{{ leaveData.start_date }}</td>
                      <td class="text-center">{{ leaveData.end_date }}</td>
                      <td class="text-center">{{ leaveData.days }}</td>
                      <td class="text-center">
                        <template v-if="leaveData.leave_status  === 'อนุมัติ'">
                          <v-chip
                              color="green"
                              outlined
                          >{{ leaveData.leave_status }}
                          </v-chip>
                        </template>
                        <template v-if="leaveData.leave_status  === 'ไม่อนุมัติ'">
                          <v-chip
                              color="red"
                              outlined
                          >{{ leaveData.leave_status }}
                          </v-chip>
                        </template>
                        <template v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">
                          <v-chip
                              color="warning"
                              outlined
                          >{{ leaveData.leave_status }}
                          </v-chip>
                        </template>

                      </td>
                      <td class="text-center" v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">
                        <v-btn
                            fab
                            tile
                            x-small
                            elevation="1"
                            class="mr-2 rounded-lg"
                            @click="loadDataEditLeave(leaveData.id),dialog2 = true"
                        >
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn fab
                               tile
                               elevation="1"
                               x-small class="rounded-lg"
                               @click="leaveDelete(leaveData.id)"
                        >
                          <v-icon>mdi-trash-can-outline</v-icon>
                        </v-btn>
                      </td>
                      <td v-else></td>
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

        </v-col>

      </v-row>
    </div>
    <div class="d-inline d-sm-none">

      <div>
        <v-timeline
            align-top
            dense
            v-for="(leaveData,index) in dataTimeLine" :key="index"
        >


          <v-timeline-item
              :color="leaveData.color"
              small
          >
            <v-row class="pt-1">
              <v-col cols="4">
                <strong>{{ leaveData.leave_type }}</strong>
              </v-col>
              <v-col cols="8">
                <v-col cols="12 " style="padding: 0px"><strong>เริ่ม {{ leaveData.start_date }} </strong></v-col>

                <v-col cols="12" style="padding: 0px" class="mt-2"><strong>สิ้นสุด {{ leaveData.end_date }}</strong>
                </v-col>
                <v-col style="padding: 0px" v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">
                  <v-btn elevation="2"
                         fab
                         tile
                         x-small class="mr-3"
                         @click="loadDataEditLeave(leaveData.id),dialog2 = true">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn elevation="2"
                         fab
                         tile
                         x-small
                         @click="leaveDelete(leaveData.id)">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" style="padding: 0px">
                  <div class="caption mt-2">
                    <template v-if="leaveData.leave_status  === 'อนุมัติ'">

                      <v-chip
                          color="green"
                          outlined
                      >{{ leaveData.leave_status }}
                      </v-chip>
                    </template>
                    <template v-if="leaveData.leave_status  === 'ไม่อนุมัติ'">
                      <v-chip
                          color="red"
                          outlined
                      >{{ leaveData.leave_status }}
                      </v-chip>
                    </template>
                    <template v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">
                      <v-chip
                          color="warning"
                          outlined
                      >{{ leaveData.leave_status }}
                      </v-chip>
                    </template>
                  </div>
                </v-col>


              </v-col>
            </v-row>
          </v-timeline-item>


        </v-timeline>
      </div>
    </div>


    <!--    <v-row>-->
    <!--      <v-col class="d-flex justify-center col-12">-->
    <!--        <v-card class="responsive_table" width="1200" height="890">-->
    <!--          <v-card-text>-->
    <!--            <div class="container mt-3">-->
    <!--              <v-simple-table-->

    <!--              >-->
    <!--                <template v-slot:default>-->
    <!--                  <thead>-->
    <!--                  <tr>-->
    <!--                    <th scope="col" class="no">#</th>-->
    <!--                    <th scope="col" class="text-center">ประเภทการลา</th>-->
    <!--                    <th scope="col" class="text-center">รายละเอียดการลา</th>-->
    <!--                    <th scope="col" class="text-center">วันเริ่มลา</th>-->
    <!--                    <th scope="col" class="text-center">วันสิ้นสุด</th>-->
    <!--                    <th scope="col" class="text-center">จำนวนวัน</th>-->
    <!--                    <th scope="col" class="text-center">สถานะ</th>-->
    <!--                  </tr>-->
    <!--                  </thead>-->
    <!--                  <tbody>-->

    <!--                  <tr v-for="(leaveData,index) in leaveDatasPag" :key="index">-->

    <!--                    <th scope="row">{{ index+1 }}</th>-->
    <!--                    <td class="text-center">{{ leaveData.leave_type }}</td>-->
    <!--                    <td class="text-center">{{ leaveData.leave_description }}</td>-->
    <!--                    <td class="text-center">{{ leaveData.start_date }}</td>-->
    <!--                    <td class="text-center">{{ leaveData.end_date }}</td>-->
    <!--                    <td class="text-center">{{ leaveData.days }}</td>-->
    <!--                    <td class="text-center">-->
    <!--                      <template v-if="leaveData.leave_status  === 'อนุมัติ'">-->
    <!--                        <v-chip-->
    <!--                            color="green"-->
    <!--                            outlined-->
    <!--                        >{{ leaveData.leave_status }}-->
    <!--                        </v-chip>-->
    <!--                      </template>-->
    <!--                      <template v-if="leaveData.leave_status  === 'ไม่อนุมัติ'">-->
    <!--                        <v-chip-->
    <!--                            color="red"-->
    <!--                            outlined-->
    <!--                        >{{ leaveData.leave_status }}-->
    <!--                        </v-chip>-->
    <!--                      </template>-->
    <!--                      <template v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">-->
    <!--                        <v-chip-->
    <!--                            color="warning"-->
    <!--                            outlined-->
    <!--                        >{{ leaveData.leave_status }}-->
    <!--                        </v-chip>-->
    <!--                      </template>-->

    <!--                    </td>-->
    <!--                    <td class="text-center" v-if="leaveData.leave_status  === 'อยู่ระหว่างการอนุมัติ'">-->
    <!--                      <v-btn-->
    <!--                          class="mr-2"-->
    <!--                          @click="loadDataEditLeave(leaveData.id),dialog2=true"-->
    <!--                      >-->
    <!--                        แก้ไข-->
    <!--                      </v-btn>-->
    <!--                      <v-btn>ลบ</v-btn>-->
    <!--                    </td>-->
    <!--                    <td v-else></td>-->
    <!--                  </tr>-->


    <!--                  </tbody>-->


    <!--                </template>-->

    <!--              </v-simple-table>-->

    <!--              <v-pagination-->
    <!--                  class="mt-5"-->
    <!--                  v-model="page"-->
    <!--                  :length="pageAll"-->
    <!--                  circle-->
    <!--                  @input="loadDataPagination()"-->


    <!--              ></v-pagination>-->

    <!--            </div>-->
    <!--          </v-card-text>-->

    <!--        </v-card>-->

    <!--      </v-col>-->

    <!--    </v-row>-->

    <v-dialog
        v-model="dialog2"
        persistent
        max-width="600px"
    >

      <v-card>
        <v-form ref="form2"
                v-model="valid"
                lazy-validation>
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
                      :items="['ลาป่วย', 'ลากิจ', 'ลาพักร้อน','ทำงานที่บ้าน','ทำงานวันหยุด']"
                      label="ประเภทการลา"
                      required
                      :rules="rules"
                      hide-details="auto"
                      v-model="leaveDataEdit.leave_type"

                  ></v-select>
                </v-col>

                <v-col cols="12">


                  <v-text-field
                      label="รายละเอีอด"
                      required
                      :rules="rules"
                      hide-details="auto"
                      v-model="leaveDataEdit.leave_description"

                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-0 mb-0">

                  <v-radio-group
                      v-model="leaveDataEdit.manyday"
                      row
                      required

                  >
                    <v-radio
                        class="mt-0 mb-0"
                        label="วันเดียว"
                        value=1

                    ></v-radio>
                    <v-radio
                        class="mt-0 mb-0"
                        label="หลายวัน"
                        value=2
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col
                    cols="6"

                >
                  <v-menu
                      ref="menuedit1"
                      v-model="menuedit1"
                      :close-on-content-click="false"
                      :return-value.sync="leaveDataEdit.start_date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"

                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="leaveDataEdit.start_date"
                          label="วันที่เริ่มต้น"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          required
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="leaveDataEdit.start_date"
                        no-title
                        scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="red"
                          @click="menuedit1 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                          text
                          color="primary"
                          @click="$refs.menuedit1.save(leaveDataEdit.start_date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                    cols="6"
                    v-if="leaveDataEdit.manyday == 2"
                >
                  <v-menu
                      ref="menuedit2"
                      v-model="menuedit2"
                      :close-on-content-click="false"
                      :return-value.sync="leaveDataEdit.end_date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="leaveDataEdit.end_date"
                          label="วันที่สิ้นสุด"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          required
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="leaveDataEdit.end_date"
                        no-title
                        scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="red"
                          @click="menuedit2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                          text
                          color="primary"
                          @click="$refs.menuedit2.save(leaveDataEdit.end_date)"
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
                @click="dialog2 = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="putDataEdit(),dialog2 = false"
            >
              Save
            </v-btn>
          </v-card-actions>

        </v-form>

      </v-card>
    </v-dialog>
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
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card width="1200" height="45" elevation="0"></v-card>
      </v-col>
    </v-row>

  </div>
</template>
<script>
import axios from "axios";
import {mapState} from "vuex";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      absolute: true,
      overlay: false,
      progress: 0,
      countload: -1,
      dataTimeLine: [],
      bottom: false,
      width: null,
      record_id: null,
      valid: true,
      dayleave: "1",
      offsetPage: 0,
      pageAll: null,
      page: 1,
      leaveDatas: [],
      leaveDataEdit: {},
      leaveQuota: [],
      leaveDatasPag: [],
      leavePaper: {},
      dialog: false,
      dialog2: false,
      rules: [
        value => !!value || 'Required.'
      ],
      dateStart: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menuedit1: false,
      modaledit1: false,
      menuedit2: false,
      modaledit2: false,
      //menu2: false,
      dateEnd: new Date().toISOString().substr(0, 10),
      menu2: false,
      modal2: false,
      headers: [
        {
          text: 'รายการที่',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        {text: 'ประเภทการลา', align: 'center', value: 'leave_type'},
        {text: 'รายละเอียดการลา', align: 'center', value: 'leave_desc'},
        {text: 'วันเริ่มลา', align: 'center', value: 'start_date'},
        {text: 'วันสิ้นสุดการลา', align: 'center', value: 'end_date'},
        {text: 'สถานะ', align: 'center', value: 'leave_status'},

      ],

    }
  },
  components: {},
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addData()
      }
    }
  },
  created() {
    this.screenCheck()
    this.loadData()
    this.addData()
    this.overlay = true
    this.loadQuota()
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })


  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    // addBeer() {
    //   axios.get('https://api.punkapi.com/v2/beers/random')
    //       .then(response => {
    //         let api = response.data[0];
    //         let apiInfo = {
    //           name: api.name,
    //           img: api.image_url,
    //           tagline: api.tagline,
    //         };
    //         this.beers.push(apiInfo)
    //         if (this.bottomVisible()) {
    //           this.addBeer()
    //         }
    //       })
    // },
    addData() {
      this.countload++
      console.log('countload', this.countload)
      this.progress = 1
      axios.get('http://localhost:8000/leavetimeline', {params: {id: this.user.id, offsetPage: this.countload}})
          .then(response => {
            let api = response.data;
            console.log('api', api)
            //console.log('respone',response.data)

            if (Object.entries(api).length !== 0) {
              let color
              if (api.leave_status === 'อนุมัติ') {
                color = 'teal lighten-3'
              }
              if (api.leave_status === 'ไม่อนุมัติ') {
                color = 'pink'
              }
              if (api.leave_status === 'อยู่ระหว่างการอนุมัติ') {
                color = 'warning'
              }
              let checkInInfo = {
                id: api.id,
                leave_type: api.leave_type,
                start_date: api.start_date,
                end_date: api.end_date,
                leave_status: api.leave_status,
                color: color


              };
              this.dataTimeLine.push(checkInInfo)
              this.progress = 0


            }

            console.log('Timeline-1', this.dataTimeLine)
            if (this.bottomVisible()) {
              this.addData()
            }
            this.progress = 0
          })

    },

    screenCheck() {

      this.width = screen.width

    },
    validate() {

      if (this.$refs.form.validate() === false) {
        this.dialog = true
      }
      if (this.$refs.form.validate() === true) {
        this.dialog = false
        this.putData()
      }
    },
    leaveDelete(id) {

      Swal.fire({
        title: 'ต้องการลบข้อมูลใช่หรือไม่ ?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'ลบข้อมูล',
              'ข้อมูลถูกลบเรียบร้อยแล้ว',
              'success'
          )
          const url = 'http://localhost:8000/leavedata/' + id

          axios
              .delete(url)
              .then((respone) => {
                if (respone.status === 200) {
                  this.leaveDataEdit = respone.data
                  console.log('leaveDataEdit', this.leaveDataEdit)
                  this.loadData()

                }
              })
              .catch((error) => {
                console.log('error', error)
              })
        }
      })


    },
    loadDataEditLeave(id) {
      console.log('test',id)
      // this.progress = 1
      this.overlay = true
      const url = 'http://localhost:8000/leavedataedit'

      axios
          .get(url, {params: {id: id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveDataEdit = respone.data
              console.log('leaveDataEdit', this.leaveDataEdit)
              // this.progress = 0
              this.overlay = false
            }
          })
          .catch((error) => {
            console.log('error', error)
          })

    },
    loadQuota() {
      const url = 'http://localhost:8000/leavequota'

      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveQuota = respone.data
              console.log('leaveQuota', this.leaveQuota)


            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    loadData() {

      const url = 'http://localhost:8000/leavedataperson'
      //const url = 'https://575fd9c98541.ngrok.io/leavedataperson'
      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveDatas = respone.data
              console.log('leaveData11111', this.leaveDatas)
              // for (let i = 0; i < this.leaveDatas.length; i++) {
              //   this.leaveDatas[i].id = i + 1
              //
              //
              // }
              console.log('response', respone.data)
              console.log('lenth', respone.data.length)

              this.pageAll = Math.ceil(this.leaveDatas.length / 15)
              this.loadDataPagination()
              console.log('PageAll', this.pageAll)

            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    loadDataPagination() {
      this.offsetPage=0
      this.overlay = true
      console.log('testPagination')
      if (this.page > 1) {
        console.log('testPage2')
        for (let i = 1; i < this.page; i++) {
          this.offsetPage = this.offsetPage + 15
          console.log('testPage3')
        }
      }
console.log('id&offset',this.user.id,this.offsetPage)
      //const url = 'https://f94336238f04.ngrok.io/leavedatapersonpagination'
      const url = 'http://localhost:8000/leavedatapersonpagination'
      axios
          .get(url, {params: {id: this.user.id, offsetPage: this.offsetPage}})
          .then((respone) => {
            if (respone.status === 200) {
              this.leaveDatasPag = respone.data
              this.offsetPage = 0
              console.log('leaveDataPag', this.leaveDatasPag)
              for (let i = 0; i < this.leaveDatasPag.length; i++) {
                // this.leaveDatasPag[i].id = this.offsetPage + 1
                this.offsetPage++
              }
              // console.log('response', respone.data)
              // console.log('lenth', respone.data.length)
              //
              //this.pageNo = Math.ceil(this.leaveDatas.length / 9)
              // this.page =
              //     console.log('PageNo', this.pageNo)
              this.overlay = false
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    testPutNotDuplicate() {
      const arr = [1, 3, 4, 5, 6]
      const oddArr = [1, 2, 5, 7, 9]

      const indexOfFourInArr = arr.indexOf(4)
      console.log('Arr', indexOfFourInArr)

      const indexOfFourInOddArr = oddArr.indexOf(4)
      console.log('OddArr', indexOfFourInOddArr)

    },
    putData() {
      // this.overlay = true
      //const url = 'https://f94336238f04.ngrok.io/leavedata'
      const url = 'http://localhost:8000/leavedata'
      this.leavePaper.emp_id = this.user.id
      this.leavePaper.dateStart = this.dateStart
      this.leavePaper.manyday = this.dayleave
      this.leavePaper.dateEnd = this.dateEnd
      this.leavePaper.status = 'อยู่ระหว่างการอนุมัติ'
      console.log('leavePaper', this.leavePaper)

      axios
          .post(url, this.leavePaper)
          .then((respone) => {
            if (respone.status === 200) {
              this.loadData()
              this.loadDataPagination()
              this.reset()
              console.log('responsePagnigation', respone.data)
              console.log('lenth', respone.data.length)
              // this.overlay = false
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    putDataEdit() {
      this.overlay = true
      const url = 'http://localhost:8000/leavedata'

      //const url = 'http://localhost:8000/leavedata'

      console.log('leavePaper', this.leaveDataEdit)

      axios
          .put(url, this.leaveDataEdit)
          .then((respone) => {
            if (respone.status === 200) {
              this.loadData()

              this.reset2()
              console.log('responseload', respone.data)
              console.log('lenth', respone.data.length)
              this.overlay = false
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },
    reset() {
      this.$refs.form.reset()
    },
    reset2() {
      this.$refs.form2.reset()
    },
  }
}
</script>
<style>


@media screen and (max-width: 1080px) {

  /*.responsive_table {*/
  /*  !* The width is 100%, when the viewport is 800px or smaller *!*/
  /*  height: 1335px !important;*/
  /*}*/

}

.day {
  font-size: 5rem;
  display: inline;
}

tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}

table {
  width: 1000px;
}

tr {

  line-height: 25px;
  min-height: 25px;
  height: 25px;
  align-content: center;
}
</style>
<style scoped>
th.no {
  width: 5%;
}
</style>
