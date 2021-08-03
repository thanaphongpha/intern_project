<template>
  <div>

    <div class="d-none d-sm-inline">

      <div class="container" style="height: 88vh">

        <div id="" class="d-flex justify-center " style="height: 100%">

          <v-card class="test" width="50%" id="main-card">

            <div class="row">
              <div class="col myfont ml-3" style="font-size:1rem;">
                <div v-if="photo === null " class="mt-2">สวัสดี {{ splitname(user.name) }}</div>
                <div v-if="photo !== null " class="mt-2 d-flex align-center"><img class="mr-2"
                                                                                  :src="userData.photo" alt=""
                                                                                  width="10%"> สวัสดี
                  {{ splitname(user.name) }}
                </div>

              </div>
              <div class="col d-flex justify-end mr-3">
                <!--            <v-btn class="button-logout rounded mt-3 mr-2" tile fab elevation="1" color="white">-->
                <!--              <v-icon color="blue">mdi-cog</v-icon>-->
                <!--            </v-btn>-->

                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="button-logout rounded mt-3 mr-2" tile
                        fab
                        elevation="1"
                        v-bind="attrs"
                        v-on="on"
                        color="white"

                    >
                      <v-icon color="blue">mdi-cog</v-icon>
                    </v-btn>
                  </template>
                  <v-list>

                    <v-list-item @click="resetPassword">
                      <v-list-item-title @click="signOut" class="myHover">
                        <v-icon color="primary">mdi-lock-outline</v-icon>
                        เปลี่ยนรหัสผ่าน
                      </v-list-item-title>
                    </v-list-item>

                  </v-list>
                </v-menu>

                <v-btn class="button-logout rounded mt-3" tile fab elevation="1" color="white" @click="signOut()">
                  <v-icon color="blue">mdi-login-variant</v-icon>
                </v-btn>


              </div>
            </div>
            <div class="row mt-5 d-flex justify-center">
          <span style="font-size: 5rem;">
            <digital-clock :blink="true"/>
          </span>

            </div>

            <div class="row justify-center">

              {{ todayDate }}

            </div>
            <div class="row d-flex justify-center mt-3">
              <!--        <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
              <!--                 :zoom="7"-->
              <!--                 style="width:640px; height: 360px;">-->
              <!--          <gmap-marker-->
              <!--              :key="index"-->
              <!--              v-for="(m, index) in markers"-->
              <!--              :position="m.position"-->
              <!--              :clickable="true"-->
              <!--              :draggable="false"-->
              <!--              @click="center=m.position"-->

              <!--              :icon="{  url: displayMarker(m.name) }"-->
              <!--          />-->
              <!--        </GmapMap>-->
              <!--        marker {{ markers }}-->
              <!--        {{ todayDate }} พิกัด {{ coordinates.lat }},{{ coordinates.lng }}-->
            </div>

            <!--        <v-row>-->
            <!--          <v-col class="col-12 text-center mt-2">-->

            <!--            <v-btn class="btn mr-4 mybutton" color="green"-->
            <!--                   elevation="2"-->
            <!--                   fab-->
            <!--                   x-large-->
            <!--                   v-bind="attrs"-->
            <!--                   v-on="on"-->
            <!--                   outlined width="140px" height="140px">-->
            <!--              <v-icon size="140px">mdi-clock-time-three-outline</v-icon>-->

            <!--            </v-btn>-->
            <!--          </v-col>-->
            <!--        </v-row>-->
            <!--        <v-row>-->
            <!--          <v-col class="text-center">ลงเวลาเข้า</v-col>-->
            <!--        </v-row>-->

            <template>
              <div class="col-12 text-center mt-5">
                <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
                    max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn mr-4 mybutton" color="green"
                           elevation="2"
                           width="155px"
                           x-large
                           v-bind="attrs"
                           v-on="on"
                           outlined>
                      ลงเวลาเข้า
                      <v-icon x-large>mdi-clock-time-three-outline</v-icon>
                    </v-btn>

                  </template>

                  <v-list>
                    <!--            <v-list-item v-slot:activator="{ on, attrs }">-->
                    <!--              <v-list-item-title v-bind="attrs"-->
                    <!--                                                v-on="on">-->
                    <!--            <v-btn fab elevation="1">-->

                    <v-dialog
                        v-model="dialogRadio"
                        persistent
                        max-width="700"
                    >

                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item onclose="true">
                          <v-list-item-title v-bind="attrs"
                                             v-on="on">
                            <v-btn

                                color="light-blue lighten-5"
                                fab
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                                width="40px"
                                height="40px"
                            >
                              <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>
                            </v-btn>
                            GPS
                          </v-list-item-title>

                        </v-list-item>


                      </template>

                      <v-card>
                        <v-card-title>
                          Time Attendance With GPS
                        </v-card-title>
                        <v-card-text>
                          <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"
                                   :zoom="zoomvalue"
                                   style=" height: 360px;">
                            <gmap-marker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="false"
                                @click="center=m.position"

                                :icon="{  url: displayMarker(m.name) }"
                            />
                          </GmapMap>
                        </v-card-text>
                        <v-card-text>
                          <v-radio-group
                              v-model="distance"
                              column
                          >
                            <v-radio
                                :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"
                            >{{ user.name }}
                            </v-radio>
                            <v-radio
                                :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ3 ~ '+ calculateDistance(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ4 ~ '+ calculateDistance(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <!--              <v-radio-->
                            <!--                  label="primary"-->
                            <!--                  color="primary"-->
                            <!--                  value="primary"-->
                            <!--              ></v-radio>-->
                            <!--              <v-radio-->
                            <!--                  label="secondary"-->
                            <!--                  color="secondary"-->
                            <!--                  value="secondary"-->
                            <!--              ></v-radio>-->

                          </v-radio-group>
                        </v-card-text>


                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="green darken-1"
                              text
                              @click="checkIn(distance)"

                          >
                            <v-icon>mdi-check</v-icon>
                            Choose
                          </v-btn>
                          <v-btn
                              color="red darken-1"
                              text
                              @click="dialogRadio = false"
                          >
                            <v-icon>mdi-close</v-icon>
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!--              </v-btn> -->
                    <!--            </v-list-item-title>-->
                    <!--            </v-list-item>-->

                  </v-list>
                </v-menu>

                <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
                    max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn  mybutton" color="red"
                           elevation="2"
                           width="155px"
                           x-large
                           v-bind="attrs"
                           v-on="on"
                           outlined>
                      ลงเวลาออก
                      <v-icon x-large>mdi-clock-time-three-outline</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <!--            <v-list-item v-slot:activator="{ on, attrs }">-->
                    <!--              <v-list-item-title v-bind="attrs"-->
                    <!--                                                v-on="on">-->
                    <!--            <v-btn fab elevation="1">-->

                    <v-dialog
                        v-model="dialogRadio"
                        persistent
                        max-width="700"
                    >

                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item onclose="true">
                          <v-list-item-title v-bind="attrs"
                                             v-on="on">
                            <v-btn

                                color="light-blue lighten-5"
                                fab
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                                width="40px"
                                height="40px"
                            >
                              <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>
                            </v-btn>
                            GPS
                          </v-list-item-title>

                        </v-list-item>


                      </template>

                      <v-card>
                        <v-card-title class="headline">
                          Time Attendance With GPS
                        </v-card-title>
                        <v-card-text>
                          <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"
                                   :zoom="zoomvalue"
                                   style="width:640px; height: 360px;">
                            <gmap-marker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="false"
                                @click="center=m.position"

                                :icon="{  url: displayMarker(m.name) }"
                            />
                          </GmapMap>
                        </v-card-text>
                        <v-card-text>
                          <v-radio-group
                              v-model="distance"
                              column
                          >
                            <v-radio
                                :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"
                            >{{ user.name }}
                            </v-radio>
                            <v-radio
                                :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ3 ~ '+ calculateDistance(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ4 ~ '+ calculateDistance(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <!--              <v-radio-->
                            <!--                  label="primary"-->
                            <!--                  color="primary"-->
                            <!--                  value="primary"-->
                            <!--              ></v-radio>-->
                            <!--              <v-radio-->
                            <!--                  label="secondary"-->
                            <!--                  color="secondary"-->
                            <!--                  value="secondary"-->
                            <!--              ></v-radio>-->

                          </v-radio-group>
                        </v-card-text>


                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="green darken-1"
                              text
                              @click="checkOut(distance)"

                          >
                            <v-icon>mdi-check</v-icon>
                            Choose
                          </v-btn>
                          <v-btn
                              color="red darken-1"
                              text
                              @click="dialogRadio = false"
                          >
                            <v-icon>mdi-close</v-icon>
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!--              </v-btn> -->
                    <!--            </v-list-item-title>-->
                    <!--            </v-list-item>-->

                  </v-list>
                </v-menu>
              </div>
            </template>
            <!--        <div class="row  justify-center mt-5">-->
            <!--          <div class="col-12">-->

            <!--          </div>-->
            <!--          <v-menu-->
            <!--              bottom-->
            <!--              origin="center center"-->
            <!--              transition="scale-transition"-->
            <!--              max-width="500px"-->
            <!--          >-->
            <!--            <template v-slot:activator="{ on, attrs }">-->
            <!--              <v-btn class="btn mr-4 mybutton" color="green"-->
            <!--                     elevation="2"-->

            <!--                     x-large-->
            <!--                     v-bind="attrs"-->
            <!--                     v-on="on"-->
            <!--                     outlined>-->
            <!--                ลงเวลาเข้า-->
            <!--                 <v-icon x-large>mdi-clock-time-three-outline</v-icon>-->
            <!--              </v-btn>-->

            <!--            </template>-->

            <!--            <v-list>-->
            <!--              &lt;!&ndash;            <v-list-item v-slot:activator="{ on, attrs }">&ndash;&gt;-->
            <!--              &lt;!&ndash;              <v-list-item-title v-bind="attrs"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                                v-on="on">&ndash;&gt;-->
            <!--              &lt;!&ndash;            <v-btn fab elevation="1">&ndash;&gt;-->

            <!--              <v-dialog-->
            <!--                  v-model="dialogRadio"-->
            <!--                  persistent-->
            <!--                  max-width="700"-->
            <!--              >-->

            <!--                <template v-slot:activator="{ on, attrs }">-->
            <!--                  <v-list-item onclose="true">-->
            <!--                    <v-list-item-title v-bind="attrs"-->
            <!--                                       v-on="on">-->
            <!--                      <v-btn-->

            <!--                          color="light-blue lighten-5"-->
            <!--                          fab-->
            <!--                          elevation="0"-->
            <!--                          v-bind="attrs"-->
            <!--                          v-on="on"-->
            <!--                          width="40px"-->
            <!--                          height="40px"-->
            <!--                      >-->
            <!--                        <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>-->
            <!--                      </v-btn>-->
            <!--                      GPS-->
            <!--                    </v-list-item-title>-->

            <!--                  </v-list-item>-->


            <!--                </template>-->

            <!--                <v-card>-->
            <!--                  <v-card-title>-->
            <!--                    Time Attendance With GPS-->
            <!--                  </v-card-title>-->
            <!--                  <v-card-text>-->
            <!--                    <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
            <!--                             :zoom="zoomvalue"-->
            <!--                             style=" height: 360px;">-->
            <!--                      <gmap-marker-->
            <!--                          :key="index"-->
            <!--                          v-for="(m, index) in markers"-->
            <!--                          :position="m.position"-->
            <!--                          :clickable="true"-->
            <!--                          :draggable="false"-->
            <!--                          @click="center=m.position"-->

            <!--                          :icon="{  url: displayMarker(m.name) }"-->
            <!--                      />-->
            <!--                    </GmapMap>-->
            <!--                  </v-card-text>-->
            <!--                  <v-card-text>-->
            <!--                    <v-radio-group-->
            <!--                        v-model="distance"-->
            <!--                        column-->
            <!--                    >-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      >{{ user.name }}-->
            <!--                      </v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->

            <!--                    </v-radio-group>-->
            <!--                  </v-card-text>-->


            <!--                  <v-card-actions>-->
            <!--                    <v-spacer></v-spacer>-->
            <!--                    <v-btn-->
            <!--                        color="green darken-1"-->
            <!--                        text-->
            <!--                        @click="checkIn(distance)"-->

            <!--                    >-->
            <!--                      <v-icon>mdi-check</v-icon>-->
            <!--                      Choose-->
            <!--                    </v-btn>-->
            <!--                    <v-btn-->
            <!--                        color="red darken-1"-->
            <!--                        text-->
            <!--                        @click="dialogRadio = false"-->
            <!--                    >-->
            <!--                      <v-icon>mdi-close</v-icon>-->
            <!--                      Close-->
            <!--                    </v-btn>-->
            <!--                  </v-card-actions>-->
            <!--                </v-card>-->
            <!--              </v-dialog>-->
            <!--              &lt;!&ndash;              </v-btn> &ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item-title>&ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item>&ndash;&gt;-->

            <!--            </v-list>-->
            <!--          </v-menu>-->


            <!--          &lt;!&ndash;        CheckOut                  &ndash;&gt;-->
            <!--          <v-menu-->
            <!--              bottom-->
            <!--              origin="center center"-->
            <!--              transition="scale-transition"-->
            <!--              max-width="500px"-->
            <!--          >-->
            <!--            <template v-slot:activator="{ on, attrs }">-->
            <!--              <v-btn class="btn  mybutton" color="red"-->
            <!--                     elevation="2"-->

            <!--                     x-large-->
            <!--                     v-bind="attrs"-->
            <!--                     v-on="on"-->
            <!--                     outlined>-->
            <!--                ลงเวลาออก-->
            <!--                <v-icon x-large>mdi-clock-time-three-outline</v-icon>-->
            <!--              </v-btn>-->
            <!--            </template>-->

            <!--            <v-list>-->
            <!--              &lt;!&ndash;            <v-list-item v-slot:activator="{ on, attrs }">&ndash;&gt;-->
            <!--              &lt;!&ndash;              <v-list-item-title v-bind="attrs"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                                v-on="on">&ndash;&gt;-->
            <!--              &lt;!&ndash;            <v-btn fab elevation="1">&ndash;&gt;-->

            <!--              <v-dialog-->
            <!--                  v-model="dialogRadio"-->
            <!--                  persistent-->
            <!--                  max-width="700"-->
            <!--              >-->

            <!--                <template v-slot:activator="{ on, attrs }">-->
            <!--                  <v-list-item onclose="true">-->
            <!--                    <v-list-item-title v-bind="attrs"-->
            <!--                                       v-on="on">-->
            <!--                      <v-btn-->

            <!--                          color="light-blue lighten-5"-->
            <!--                          fab-->
            <!--                          elevation="0"-->
            <!--                          v-bind="attrs"-->
            <!--                          v-on="on"-->
            <!--                          width="40px"-->
            <!--                          height="40px"-->
            <!--                      >-->
            <!--                        <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>-->
            <!--                      </v-btn>-->
            <!--                      GPS-->
            <!--                    </v-list-item-title>-->

            <!--                  </v-list-item>-->


            <!--                </template>-->

            <!--                <v-card>-->
            <!--                  <v-card-title class="headline">-->
            <!--                    Time Attendance With GPS-->
            <!--                  </v-card-title>-->
            <!--                  <v-card-text>-->
            <!--                    <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
            <!--                             :zoom="zoomvalue"-->
            <!--                             style="width:640px; height: 360px;">-->
            <!--                      <gmap-marker-->
            <!--                          :key="index"-->
            <!--                          v-for="(m, index) in markers"-->
            <!--                          :position="m.position"-->
            <!--                          :clickable="true"-->
            <!--                          :draggable="false"-->
            <!--                          @click="center=m.position"-->

            <!--                          :icon="{  url: displayMarker(m.name) }"-->
            <!--                      />-->
            <!--                    </GmapMap>-->
            <!--                  </v-card-text>-->
            <!--                  <v-card-text>-->
            <!--                    <v-radio-group-->
            <!--                        v-model="distance"-->
            <!--                        column-->
            <!--                    >-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      >{{ user.name }}-->
            <!--                      </v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->

            <!--                    </v-radio-group>-->
            <!--                  </v-card-text>-->


            <!--                  <v-card-actions>-->
            <!--                    <v-spacer></v-spacer>-->
            <!--                    <v-btn-->
            <!--                        color="green darken-1"-->
            <!--                        text-->
            <!--                        @click="checkOut(distance)"-->

            <!--                    >-->
            <!--                      <v-icon>mdi-check</v-icon>-->
            <!--                      Choose-->
            <!--                    </v-btn>-->
            <!--                    <v-btn-->
            <!--                        color="red darken-1"-->
            <!--                        text-->
            <!--                        @click="dialogRadio = false"-->
            <!--                    >-->
            <!--                      <v-icon>mdi-close</v-icon>-->
            <!--                      Close-->
            <!--                    </v-btn>-->
            <!--                  </v-card-actions>-->
            <!--                </v-card>-->
            <!--              </v-dialog>-->
            <!--              &lt;!&ndash;              </v-btn> &ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item-title>&ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item>&ndash;&gt;-->

            <!--            </v-list>-->
            <!--          </v-menu>-->
            <!--        </div>-->

            <div class="row  justify-center mt-0">

              <!--        <v-btn class="btn mr-4 mybutton" @click="checkIn" color="primary"-->
              <!--               elevation="2"-->
              <!--               fab-->
              <!--               x-large-->
              <!--               outlined>-->
              <!--          <v-icon x-large>mdi-emoticon</v-icon>-->
              <!--        </v-btn>-->

              <!--        <v-btn class="btn" id="font-checkout" @click="checkOut" color="red"-->
              <!--               elevation="2"-->
              <!--               fab-->
              <!--               x-large-->
              <!--               outlined-->
              <!--        >-->
              <!--          <v-icon x-large>mdi-emoticon</v-icon>-->
              <!--        </v-btn>-->
            </div>

            <!--    <div class="row  ">-->
            <!--      <div class="col-6 d-flex justify-center">เวลาเข้างาน</div>-->
            <!--      <div class="col-6 d-flex justify-center">เวลาออกงาน</div>-->
            <!--    </div>-->

            <!--    <div class="row">-->
            <!--      <div class="col-6 d-flex justify-center"> {{ formatDateIn() }}-->

            <!--      </div>-->

            <!--      <template v-if="timeDatas !== undefined && timeDatas !== 0">-->
            <!--        <template  v-if="timeDatas.created_at !== timeDatas.updated_at">-->
            <!--          <div class="col-6 d-flex justify-center">-->
            <!--            {{ formatDateOut()}}-->
            <!--          </div>-->

            <!--        </template>-->
            <!--      </template>-->

            <!--    </div>-->
            <template>
              <div class="col-12 mt-5">

                <v-card>
                  <div class="row">
                    <div class="col"><h1 class="ml-3">IN</h1></div>
                    <div class="col d-flex justify-end">
                      <v-icon color="green">mdi-arrow-down-thick</v-icon>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col ml-3">
                      <v-icon color="green">mdi-clock-time-five-outline</v-icon>
                      {{ dateIn ? dateIn : 'ยังไม่มีการลงเวลาเข้า' }}{{ timeIn ? timeIn : '' }}
                    </div>


                  </div>
                </v-card>

              </div>
            </template>

            <template>
              <div class="col-12 mt-3">
                <div>
                  <v-card>
                    <div class="row">
                      <div class="col"><h1 class="ml-3">OUT</h1></div>
                      <div class="col d-flex justify-end">
                        <v-icon color="red">mdi-arrow-up-thick</v-icon>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col ml-3">
                        <v-icon color="red">mdi-clock-time-five-outline</v-icon>
                        {{ dateOut ? dateOut : 'ยังไม่มีการลงเวลาออก' }} {{ timeOut ? timeOut : '' }}
                      </div>
                    </div>
                  </v-card>

                </div>
              </div>
            </template>
            <!--        <template>-->
            <!--          <div class="row mt-3">-->
            <!--            <div class="col d-flex justify-center">-->
            <!--              <router-link to="/history">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="http://cdn.onlinewebfonts.com/svg/img_391456.png"-->
            <!--                    alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--            <div class="col d-flex justify-center">-->
            <!--              <router-link to="/leavework">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="https://cdn.onlinewebfonts.com/svg/img_134895.png"-->
            <!--                    alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--            <div class="col d-flex justify-center mb-5">-->
            <!--              <router-link to="/calendar">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="https://cdn.onlinewebfonts.com/svg/img_174069.png" alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--        </template>-->
          </v-card>


        </div>


      </div>
    </div>

    <div class="d-flex d-sm-none">
      <div class="container" style="height: 88vh">

        <div class="d-flex justify-center " style="height: 103%">

          <v-card class="test" width="50%" id="main-card2">

            <div class="row">
              <div class="col myfont ml-3" style="font-size:1rem;">
                <div v-if="photo === null " class="mt-2">สวัสดี {{ splitname(user.name) }}</div>
                <div v-if="photo !== null " class="mt-2 d-flex align-center"><img class="mr-2"
                                                                                  :src="userData.photo" alt=""
                                                                                  width="10%"> สวัสดี
                  {{ splitname(user.name) }}
                </div>

              </div>
              <div class="col d-flex justify-end mr-3">
                <!--            <v-btn class="button-logout rounded mt-3 mr-2" tile fab elevation="1" color="white">-->
                <!--              <v-icon color="blue">mdi-cog</v-icon>-->
                <!--            </v-btn>-->

                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="button-logout rounded mt-3 mr-2" tile
                        fab
                        elevation="1"
                        v-bind="attrs"
                        v-on="on"
                        color="white"

                    >
                      <v-icon color="blue">mdi-cog</v-icon>
                    </v-btn>
                  </template>
                  <v-list>

                    <v-list-item @click="resetPassword">
                      <v-list-item-title @click="signOut" class="myHover">
                        <v-icon color="primary">mdi-lock-outline</v-icon>
                        เปลี่ยนรหัสผ่าน
                      </v-list-item-title>
                    </v-list-item>

                  </v-list>
                </v-menu>

                <v-btn class="button-logout rounded mt-3" tile fab elevation="1" color="white" @click="signOut()">
                  <v-icon color="blue">mdi-login-variant</v-icon>
                </v-btn>


              </div>
            </div>
            <div class="row mt-5 d-flex justify-center">
          <span style="font-size: 5rem;">
            <digital-clock :blink="true"/>
          </span>

            </div>

            <div class="row justify-center">

              {{ todayDate }}

            </div>
            <div class="row d-flex justify-center mt-3">
              <!--        <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
              <!--                 :zoom="7"-->
              <!--                 style="width:640px; height: 360px;">-->
              <!--          <gmap-marker-->
              <!--              :key="index"-->
              <!--              v-for="(m, index) in markers"-->
              <!--              :position="m.position"-->
              <!--              :clickable="true"-->
              <!--              :draggable="false"-->
              <!--              @click="center=m.position"-->

              <!--              :icon="{  url: displayMarker(m.name) }"-->
              <!--          />-->
              <!--        </GmapMap>-->
              <!--        marker {{ markers }}-->
              <!--        {{ todayDate }} พิกัด {{ coordinates.lat }},{{ coordinates.lng }}-->
            </div>

            <!--        <v-row>-->
            <!--          <v-col class="col-12 text-center mt-2">-->

            <!--            <v-btn class="btn mr-4 mybutton" color="green"-->
            <!--                   elevation="2"-->
            <!--                   fab-->
            <!--                   x-large-->
            <!--                   v-bind="attrs"-->
            <!--                   v-on="on"-->
            <!--                   outlined width="140px" height="140px">-->
            <!--              <v-icon size="140px">mdi-clock-time-three-outline</v-icon>-->

            <!--            </v-btn>-->
            <!--          </v-col>-->
            <!--        </v-row>-->
            <!--        <v-row>-->
            <!--          <v-col class="text-center">ลงเวลาเข้า</v-col>-->
            <!--        </v-row>-->

            <template>
              <div class="col-12 text-center mt-5">
                <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
                    max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn mr-4 mybutton" color="green"
                           elevation="2"
                           width="155px"
                           x-large
                           v-bind="attrs"
                           v-on="on"
                           outlined>
                      ลงเวลาเข้า
                      <v-icon x-large>mdi-clock-time-three-outline</v-icon>
                    </v-btn>

                  </template>

                  <v-list>
                    <!--            <v-list-item v-slot:activator="{ on, attrs }">-->
                    <!--              <v-list-item-title v-bind="attrs"-->
                    <!--                                                v-on="on">-->
                    <!--            <v-btn fab elevation="1">-->

                    <v-dialog
                        v-model="dialogRadio"
                        persistent
                        max-width="700"
                    >

                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item onclose="true">
                          <v-list-item-title v-bind="attrs"
                                             v-on="on">
                            <v-btn

                                color="light-blue lighten-5"
                                fab
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                                width="40px"
                                height="40px"
                            >
                              <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>
                            </v-btn>
                            GPS
                          </v-list-item-title>

                        </v-list-item>


                      </template>

                      <v-card>
                        <v-card-title>
                          Time Attendance With GPS
                        </v-card-title>
                        <v-card-text>
                          <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"
                                   :zoom="zoomvalue"
                                   style=" height: 360px;">
                            <gmap-marker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="false"
                                @click="center=m.position"

                                :icon="{  url: displayMarker(m.name) }"
                            />
                          </GmapMap>
                        </v-card-text>
                        <v-card-text>
                          <v-radio-group
                              v-model="distance"
                              column
                          >
                            <v-radio
                                :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"
                            >{{ user.name }}
                            </v-radio>
                            <v-radio
                                :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ3 ~ '+ calculateDistance(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ4 ~ '+ calculateDistance(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <!--              <v-radio-->
                            <!--                  label="primary"-->
                            <!--                  color="primary"-->
                            <!--                  value="primary"-->
                            <!--              ></v-radio>-->
                            <!--              <v-radio-->
                            <!--                  label="secondary"-->
                            <!--                  color="secondary"-->
                            <!--                  value="secondary"-->
                            <!--              ></v-radio>-->

                          </v-radio-group>
                        </v-card-text>


                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="green darken-1"
                              text
                              @click="checkIn(distance)"

                          >
                            <v-icon>mdi-check</v-icon>
                            Choose
                          </v-btn>
                          <v-btn
                              color="red darken-1"
                              text
                              @click="dialogRadio = false"
                          >
                            <v-icon>mdi-close</v-icon>
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!--              </v-btn> -->
                    <!--            </v-list-item-title>-->
                    <!--            </v-list-item>-->

                  </v-list>
                </v-menu>

                <v-menu
                    bottom
                    origin="center center"
                    transition="scale-transition"
                    max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="btn  mybutton" color="red"
                           elevation="2"
                           width="155px"
                           x-large
                           v-bind="attrs"
                           v-on="on"
                           outlined>
                      ลงเวลาออก
                      <v-icon x-large>mdi-clock-time-three-outline</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <!--            <v-list-item v-slot:activator="{ on, attrs }">-->
                    <!--              <v-list-item-title v-bind="attrs"-->
                    <!--                                                v-on="on">-->
                    <!--            <v-btn fab elevation="1">-->

                    <v-dialog
                        v-model="dialogRadio"
                        persistent
                        max-width="700"
                    >

                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item onclose="true">
                          <v-list-item-title v-bind="attrs"
                                             v-on="on">
                            <v-btn

                                color="light-blue lighten-5"
                                fab
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                                width="40px"
                                height="40px"
                            >
                              <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>
                            </v-btn>
                            GPS
                          </v-list-item-title>

                        </v-list-item>


                      </template>

                      <v-card>
                        <v-card-title class="headline">
                          Time Attendance With GPS
                        </v-card-title>
                        <v-card-text>
                          <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"
                                   :zoom="zoomvalue"
                                   style="width:640px; height: 360px;">
                            <gmap-marker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="false"
                                @click="center=m.position"

                                :icon="{  url: displayMarker(m.name) }"
                            />
                          </GmapMap>
                        </v-card-text>
                        <v-card-text>
                          <v-radio-group
                              v-model="distance"
                              column
                          >
                            <v-radio
                                :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"
                            >{{ user.name }}
                            </v-radio>
                            <v-radio
                                :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ3 ~ '+ calculateDistance(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem3.lat,testsystem3.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>
                            <v-radio
                                :label="'พิกัดทดสอบ4 ~ '+ calculateDistance(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)) + ' from you'"
                                color="indigo"
                                :value="calculateDistance2(testsystem4.lat,testsystem4.lng,coordinates.lat,coordinates.lng)"
                            ></v-radio>

                            <!--              <v-radio-->
                            <!--                  label="primary"-->
                            <!--                  color="primary"-->
                            <!--                  value="primary"-->
                            <!--              ></v-radio>-->
                            <!--              <v-radio-->
                            <!--                  label="secondary"-->
                            <!--                  color="secondary"-->
                            <!--                  value="secondary"-->
                            <!--              ></v-radio>-->

                          </v-radio-group>
                        </v-card-text>


                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                              color="green darken-1"
                              text
                              @click="checkOut(distance)"

                          >
                            <v-icon>mdi-check</v-icon>
                            Choose
                          </v-btn>
                          <v-btn
                              color="red darken-1"
                              text
                              @click="dialogRadio = false"
                          >
                            <v-icon>mdi-close</v-icon>
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!--              </v-btn> -->
                    <!--            </v-list-item-title>-->
                    <!--            </v-list-item>-->

                  </v-list>
                </v-menu>
              </div>
            </template>
            <!--        <div class="row  justify-center mt-5">-->
            <!--          <div class="col-12">-->

            <!--          </div>-->
            <!--          <v-menu-->
            <!--              bottom-->
            <!--              origin="center center"-->
            <!--              transition="scale-transition"-->
            <!--              max-width="500px"-->
            <!--          >-->
            <!--            <template v-slot:activator="{ on, attrs }">-->
            <!--              <v-btn class="btn mr-4 mybutton" color="green"-->
            <!--                     elevation="2"-->

            <!--                     x-large-->
            <!--                     v-bind="attrs"-->
            <!--                     v-on="on"-->
            <!--                     outlined>-->
            <!--                ลงเวลาเข้า-->
            <!--                 <v-icon x-large>mdi-clock-time-three-outline</v-icon>-->
            <!--              </v-btn>-->

            <!--            </template>-->

            <!--            <v-list>-->
            <!--              &lt;!&ndash;            <v-list-item v-slot:activator="{ on, attrs }">&ndash;&gt;-->
            <!--              &lt;!&ndash;              <v-list-item-title v-bind="attrs"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                                v-on="on">&ndash;&gt;-->
            <!--              &lt;!&ndash;            <v-btn fab elevation="1">&ndash;&gt;-->

            <!--              <v-dialog-->
            <!--                  v-model="dialogRadio"-->
            <!--                  persistent-->
            <!--                  max-width="700"-->
            <!--              >-->

            <!--                <template v-slot:activator="{ on, attrs }">-->
            <!--                  <v-list-item onclose="true">-->
            <!--                    <v-list-item-title v-bind="attrs"-->
            <!--                                       v-on="on">-->
            <!--                      <v-btn-->

            <!--                          color="light-blue lighten-5"-->
            <!--                          fab-->
            <!--                          elevation="0"-->
            <!--                          v-bind="attrs"-->
            <!--                          v-on="on"-->
            <!--                          width="40px"-->
            <!--                          height="40px"-->
            <!--                      >-->
            <!--                        <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>-->
            <!--                      </v-btn>-->
            <!--                      GPS-->
            <!--                    </v-list-item-title>-->

            <!--                  </v-list-item>-->


            <!--                </template>-->

            <!--                <v-card>-->
            <!--                  <v-card-title>-->
            <!--                    Time Attendance With GPS-->
            <!--                  </v-card-title>-->
            <!--                  <v-card-text>-->
            <!--                    <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
            <!--                             :zoom="zoomvalue"-->
            <!--                             style=" height: 360px;">-->
            <!--                      <gmap-marker-->
            <!--                          :key="index"-->
            <!--                          v-for="(m, index) in markers"-->
            <!--                          :position="m.position"-->
            <!--                          :clickable="true"-->
            <!--                          :draggable="false"-->
            <!--                          @click="center=m.position"-->

            <!--                          :icon="{  url: displayMarker(m.name) }"-->
            <!--                      />-->
            <!--                    </GmapMap>-->
            <!--                  </v-card-text>-->
            <!--                  <v-card-text>-->
            <!--                    <v-radio-group-->
            <!--                        v-model="distance"-->
            <!--                        column-->
            <!--                    >-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      >{{ user.name }}-->
            <!--                      </v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ2 ~ '+ calculateDistance(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem2.lat,testsystem2.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->

            <!--                    </v-radio-group>-->
            <!--                  </v-card-text>-->


            <!--                  <v-card-actions>-->
            <!--                    <v-spacer></v-spacer>-->
            <!--                    <v-btn-->
            <!--                        color="green darken-1"-->
            <!--                        text-->
            <!--                        @click="checkIn(distance)"-->

            <!--                    >-->
            <!--                      <v-icon>mdi-check</v-icon>-->
            <!--                      Choose-->
            <!--                    </v-btn>-->
            <!--                    <v-btn-->
            <!--                        color="red darken-1"-->
            <!--                        text-->
            <!--                        @click="dialogRadio = false"-->
            <!--                    >-->
            <!--                      <v-icon>mdi-close</v-icon>-->
            <!--                      Close-->
            <!--                    </v-btn>-->
            <!--                  </v-card-actions>-->
            <!--                </v-card>-->
            <!--              </v-dialog>-->
            <!--              &lt;!&ndash;              </v-btn> &ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item-title>&ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item>&ndash;&gt;-->

            <!--            </v-list>-->
            <!--          </v-menu>-->


            <!--          &lt;!&ndash;        CheckOut                  &ndash;&gt;-->
            <!--          <v-menu-->
            <!--              bottom-->
            <!--              origin="center center"-->
            <!--              transition="scale-transition"-->
            <!--              max-width="500px"-->
            <!--          >-->
            <!--            <template v-slot:activator="{ on, attrs }">-->
            <!--              <v-btn class="btn  mybutton" color="red"-->
            <!--                     elevation="2"-->

            <!--                     x-large-->
            <!--                     v-bind="attrs"-->
            <!--                     v-on="on"-->
            <!--                     outlined>-->
            <!--                ลงเวลาออก-->
            <!--                <v-icon x-large>mdi-clock-time-three-outline</v-icon>-->
            <!--              </v-btn>-->
            <!--            </template>-->

            <!--            <v-list>-->
            <!--              &lt;!&ndash;            <v-list-item v-slot:activator="{ on, attrs }">&ndash;&gt;-->
            <!--              &lt;!&ndash;              <v-list-item-title v-bind="attrs"&ndash;&gt;-->
            <!--              &lt;!&ndash;                                                v-on="on">&ndash;&gt;-->
            <!--              &lt;!&ndash;            <v-btn fab elevation="1">&ndash;&gt;-->

            <!--              <v-dialog-->
            <!--                  v-model="dialogRadio"-->
            <!--                  persistent-->
            <!--                  max-width="700"-->
            <!--              >-->

            <!--                <template v-slot:activator="{ on, attrs }">-->
            <!--                  <v-list-item onclose="true">-->
            <!--                    <v-list-item-title v-bind="attrs"-->
            <!--                                       v-on="on">-->
            <!--                      <v-btn-->

            <!--                          color="light-blue lighten-5"-->
            <!--                          fab-->
            <!--                          elevation="0"-->
            <!--                          v-bind="attrs"-->
            <!--                          v-on="on"-->
            <!--                          width="40px"-->
            <!--                          height="40px"-->
            <!--                      >-->
            <!--                        <v-icon color="light-blue darken-1">mdi-crosshairs-gps</v-icon>-->
            <!--                      </v-btn>-->
            <!--                      GPS-->
            <!--                    </v-list-item-title>-->

            <!--                  </v-list-item>-->


            <!--                </template>-->

            <!--                <v-card>-->
            <!--                  <v-card-title class="headline">-->
            <!--                    Time Attendance With GPS-->
            <!--                  </v-card-title>-->
            <!--                  <v-card-text>-->
            <!--                    <GmapMap :center="{lat:coordinates.lat,lng:coordinates.lng }"-->
            <!--                             :zoom="zoomvalue"-->
            <!--                             style="width:640px; height: 360px;">-->
            <!--                      <gmap-marker-->
            <!--                          :key="index"-->
            <!--                          v-for="(m, index) in markers"-->
            <!--                          :position="m.position"-->
            <!--                          :clickable="true"-->
            <!--                          :draggable="false"-->
            <!--                          @click="center=m.position"-->

            <!--                          :icon="{  url: displayMarker(m.name) }"-->
            <!--                      />-->
            <!--                    </GmapMap>-->
            <!--                  </v-card-text>-->
            <!--                  <v-card-text>-->
            <!--                    <v-radio-group-->
            <!--                        v-model="distance"-->
            <!--                        column-->
            <!--                    >-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา The Brick Startup Space ~ ' + calculateDistance(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(brickOffice.lat,brickOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      >{{ user.name }}-->
            <!--                      </v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา จตุจักร ~ ' + calculateDistance(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng))+' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokOffice.lat,bangkokOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'สาขา ฝั่งธน ~ '+ calculateDistance(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(bangkokThonburiOffice.lat,bangkokThonburiOffice.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      <v-radio-->
            <!--                          :label="'พิกัดทดสอบ ~ '+ calculateDistance(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng) + changUnit(calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)) + ' from you'"-->
            <!--                          color="indigo"-->
            <!--                          :value="calculateDistance2(testsystem.lat,testsystem.lng,coordinates.lat,coordinates.lng)"-->
            <!--                      ></v-radio>-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="primary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->
            <!--                      &lt;!&ndash;              <v-radio&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  label="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  color="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;                  value="secondary"&ndash;&gt;-->
            <!--                      &lt;!&ndash;              ></v-radio>&ndash;&gt;-->

            <!--                    </v-radio-group>-->
            <!--                  </v-card-text>-->


            <!--                  <v-card-actions>-->
            <!--                    <v-spacer></v-spacer>-->
            <!--                    <v-btn-->
            <!--                        color="green darken-1"-->
            <!--                        text-->
            <!--                        @click="checkOut(distance)"-->

            <!--                    >-->
            <!--                      <v-icon>mdi-check</v-icon>-->
            <!--                      Choose-->
            <!--                    </v-btn>-->
            <!--                    <v-btn-->
            <!--                        color="red darken-1"-->
            <!--                        text-->
            <!--                        @click="dialogRadio = false"-->
            <!--                    >-->
            <!--                      <v-icon>mdi-close</v-icon>-->
            <!--                      Close-->
            <!--                    </v-btn>-->
            <!--                  </v-card-actions>-->
            <!--                </v-card>-->
            <!--              </v-dialog>-->
            <!--              &lt;!&ndash;              </v-btn> &ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item-title>&ndash;&gt;-->
            <!--              &lt;!&ndash;            </v-list-item>&ndash;&gt;-->

            <!--            </v-list>-->
            <!--          </v-menu>-->
            <!--        </div>-->

            <div class="row  justify-center mt-0">

              <!--        <v-btn class="btn mr-4 mybutton" @click="checkIn" color="primary"-->
              <!--               elevation="2"-->
              <!--               fab-->
              <!--               x-large-->
              <!--               outlined>-->
              <!--          <v-icon x-large>mdi-emoticon</v-icon>-->
              <!--        </v-btn>-->

              <!--        <v-btn class="btn" id="font-checkout" @click="checkOut" color="red"-->
              <!--               elevation="2"-->
              <!--               fab-->
              <!--               x-large-->
              <!--               outlined-->
              <!--        >-->
              <!--          <v-icon x-large>mdi-emoticon</v-icon>-->
              <!--        </v-btn>-->
            </div>

            <!--    <div class="row  ">-->
            <!--      <div class="col-6 d-flex justify-center">เวลาเข้างาน</div>-->
            <!--      <div class="col-6 d-flex justify-center">เวลาออกงาน</div>-->
            <!--    </div>-->

            <!--    <div class="row">-->
            <!--      <div class="col-6 d-flex justify-center"> {{ formatDateIn() }}-->

            <!--      </div>-->

            <!--      <template v-if="timeDatas !== undefined && timeDatas !== 0">-->
            <!--        <template  v-if="timeDatas.created_at !== timeDatas.updated_at">-->
            <!--          <div class="col-6 d-flex justify-center">-->
            <!--            {{ formatDateOut()}}-->
            <!--          </div>-->

            <!--        </template>-->
            <!--      </template>-->

            <!--    </div>-->
            <template>
              <div class="col-12 mt-5">

                <v-card>
                  <div class="row">
                    <div class="col"><h1 class="ml-3">IN</h1></div>
                    <div class="col d-flex justify-end">
                      <v-icon color="green">mdi-arrow-down-thick</v-icon>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col ml-3">
                      <v-icon color="green">mdi-clock-time-five-outline</v-icon>
                      {{ dateIn ? dateIn : 'ยังไม่มีการลงเวลาเข้า' }}{{ timeIn ? timeIn : '' }}
                    </div>


                  </div>
                </v-card>

              </div>
            </template>

            <template>
              <div class="col-12 mt-3">
                <div>
                  <v-card>
                    <div class="row">
                      <div class="col"><h1 class="ml-3">OUT</h1></div>
                      <div class="col d-flex justify-end">
                        <v-icon color="red">mdi-arrow-up-thick</v-icon>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col ml-3">
                        <v-icon color="red">mdi-clock-time-five-outline</v-icon>
                        {{ dateOut ? dateOut : 'ยังไม่มีการลงเวลาออก' }} {{ timeOut ? timeOut : '' }}
                      </div>
                    </div>
                  </v-card>

                </div>
              </div>
            </template>
            <!--        <template>-->
            <!--          <div class="row mt-3">-->
            <!--            <div class="col d-flex justify-center">-->
            <!--              <router-link to="/history">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="http://cdn.onlinewebfonts.com/svg/img_391456.png"-->
            <!--                    alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--            <div class="col d-flex justify-center">-->
            <!--              <router-link to="/leavework">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="https://cdn.onlinewebfonts.com/svg/img_134895.png"-->
            <!--                    alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--            <div class="col d-flex justify-center mb-5">-->
            <!--              <router-link to="/calendar">-->
            <!--                <v-btn color="primary"-->
            <!--                       elevation="2"-->
            <!--                       fab-->
            <!--                       rounded-->
            <!--                       text-->
            <!--                       x-large><img-->
            <!--                    src="https://cdn.onlinewebfonts.com/svg/img_174069.png" alt="" height="50"></v-btn>-->
            <!--              </router-link>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--        </template>-->
          </v-card>


        </div>


      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import DigitalClock from 'vue-digital-clock'
import moment from 'moment'
import {mapState} from 'vuex'
import Swal from "sweetalert2";
import firebase from 'firebase'


//const theBrick = {lat: 18.79305267482185, lng: 98.97304075429999};
//const cmu = {lat: 18.791318, lng: 98.969044};
//const iconBase =
//   "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
// const icons = {
//   parking: {
//     icon: iconBase + "parking_lot_maps.png",
//   },
//   library: {
//     icon: iconBase + "library_maps.png",
//   },
//   info: {
//     icon: iconBase + "info-i_maps.png",
//   }};

var date = new Date('2014-02-27T10:00:00')
var formatted = moment(date).format('D MMMM YYYY')
var d = new Date('2020-04-13T00:00:00.000+08:00') /* midnight in China on April 13th */
d.toLocaleString('en-US', {timeZone: 'America/New_York'})

export default {
  data() {
    return {
      photo: null,
      userData: {},
      dialogRadio: false,
      distance: null,
      unit: 'metres',
      brickOffice: {lat: 18.79305267482185, lng: 98.97304075429999},
      bangkokOffice: {lat: 13.833176052069037, lng: 100.57881881527022},
      bangkokThonburiOffice: {lat: 13.813123055441853, lng: 100.485866020718},
      testsystem: {lat: 18.793132, lng: 98.979670},
      testsystem2: {lat: 18.796196205268178, lng: 98.98098033462168},
      testsystem3: {lat: 18.802214686316123, lng: 98.96717426265393},
      testsystem4: {lat: 15.869954590454416, lng: 100.99249002808459},
      yourDistance: [],
      markers: [],
      coordinates: null,
      todayDate: moment().format('MMMM Do YYYY'),
      alert: null,
      id: 1,
      chkOut: false,
      dialog: false,

      checkInObj: {
        checkInStatus: 1,
        employeeId: 1
      },
      checkOutObj: {
        checkOutStatus: 1,
        employeeId: 1
      },
      timeDatas: [],
      timeData: {
        id: null
      },
      dateIn: null,
      timeIn: null,
      dateOut: null,
      timeOut: null,
      zoomvalue: 15,

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
    DigitalClock,

  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    splitname(fullname) {
      let str = fullname
      let res = str.split(" ", 1)
      console.log('res', res[0])
      return res[0]
    },
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log('DataLogOut', data);
        this.logOutSuccess()
        this.$router.replace({name: "login"})
      } catch (err) {
        console.log(err)
      }

    },
    logOutSuccess() {
      console.log('123', 123)
      const myUserFromDb = null
      this.$store.commit('user/saveUser', myUserFromDb)
    },
    resetPassword() {
      const email = this.user.email
      firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(function () {
            Swal.fire({
              title:
                  '<h6>ระบบได้ส่งลิงค์ให้คุณกำหนดรหัสผ่านใหม่ในอีเมลเรียบร้อยแล้ว</h6>',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          })
    },
    getId() {
      const url = 'http://localhost:8000/id'

      axios
          .get(url, {params: {email: this.user.email}})
          .then((respone) => {
            if (respone.status === 200) {
              this.userData = respone.data
              this.photo = this.userData.photo
              console.log('responseId', respone.data)
              console.log('userData', this.userData)


              const myUserFromDb = {
                uid: this.user.uid,
                email: this.user.email,
                id: this.userData.id,
                name: this.userData.name,
                departmentName: this.userData.departmentName

              }
              this.$store.commit('user/saveUser', myUserFromDb)
              this.loadData()
            }
          })
          .catch((error) => {
            console.log('error', error)
          })

    },
    calculateDistance(lat1, lng1, lat2, lng2) {
      //console.log('RRRR',theBrick.lat)
      let theta = lng1 - lng2
      let dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta))
      //console.log('dist',dist)
      dist = Math.acos(dist)
      dist = this.rad2deg(dist)
      dist = dist * 60 * 1.1515


      dist = dist * 1609.344
      dist = dist.toFixed(2)
      if (dist >= 1000) {
        dist = dist / 1000
        dist = dist.toFixed(2)
        //let km = true
        //this.changUnit(km)
      }

      return dist
    },
    calculateDistance2(lat1, lng1, lat2, lng2) {
      //console.log('RRRR',theBrick.lat)
      let theta = lng1 - lng2
      let dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta))
      //console.log('dist',dist)
      dist = Math.acos(dist)
      dist = this.rad2deg(dist)
      dist = dist * 60 * 1.1515
      dist = dist * 1609.344
      dist = dist.toFixed(2)
      // console.log('checkString', dist)
      return dist
    },
    deg2rad(deg) {
      return (deg * Math.PI / 180.0)
    },
    rad2deg(rad) {
      return (rad * 180 / Math.PI)
    },
    changUnit(distance) {
      let unit = ' metres'

      if (distance >= 1000) {
        // console.log('testdistance', distance)
        unit = ' km'

      }
      return unit
    },

    displayMarker(locationName) {
      let url;
      if (locationName === 'theBrick') {
        url = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png'
      } else if (locationName === 'myLocation') {
        url = 'http://maps.google.com/mapfiles/kml/shapes/man.png'
      }
      return url
    },
    wait() {
      let wait = this.user
      console.log('user', this.user)
      console.log('wait', wait)

    },

    async loadData() {

      console.log('checkIn', this.checkInObj)
      console.log('test65656565')
      const url = 'http://localhost:8000/checkIn'
      axios
          .get(url, {params: {id: this.user.id}})
          .then((respone) => {
            if (respone.status === 200) {
              this.timeDatas = respone.data


              console.log('responseloadData', respone.data)


              console.log('lenth', respone.data.length)
              // console.log('lastArray', this.timeDatas = this.timeDatas[this.timeDatas.length - 1])
              this.timeData = this.timeDatas[this.timeDatas.length - 1]
              console.log('show', this.timeData)
              this.formatDateIn()
              this.formatDateOut()
            }
          })
          .catch((error) => {
            console.log('error', error)
          })
    },

    checkIn(distance) {
      // if(this.coordinates.lat <= 18.7934900 && this.coordinates.lat >= 18.7925500){
      //   if(this.coordinates.lng <= 98.9735400 && this.coordinates.lng >= 98.9725800){
      //     alert('อยู่ในพิกัด')

      if (distance <= 50000) {
        console.log('Sucess')
        this.dialogRadio = false
        this.checkInObj.employeeId = this.user.id

        console.log('Obj', this.checkInObj)
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

                }
                if (this.alert === 'Duplicate') {
                  this.$swal({icon: 'error', title: 'มีการลงเวลาเข้าแล้ว'})
                  console.log('response.alert', this.alert)

                }

              }

            })
            .catch((error) => {
              console.log('error', error)
            })

      } else {
        this.$swal({icon: 'error', title: 'ท่านอยู่ห่างจากบริษัทมากเกินไป'})
        this.dialogRadio = true
      }


      //   }
      // }
    },
    checkOut(distance) {
      console.log('testout2323')
      if (distance <= 50000) {
        console.log('Sucess Checkout')
        this.dialogRadio = false
        this.checkOutObj.employeeId = this.user.id
        console.log('id9999', this.timeData)
        if (this.timeData) {
          console.log('testout98989898989')
          const url = 'http://localhost:8000/checkOut/' + this.timeData.id
          console.log('testout99999')
          axios
              .put(url, this.checkOutObj)
              .then((respone) => {
                if (respone.status === 200) {
                  this.alert = respone.data.message
                  console.log('responseout', this.alert)
                  this.loadData()
                  //this.checkOutObj.checkOutStatus = this.checkOutObj.checkOutStatus + 1
                  console.log('resout2')
                  if (this.alert === 'Success') {
                    this.$swal({icon: 'success', title: 'ลงเวลาออกสำเร็จ'})
                    console.log('response.alert', this.alert)
                    this.loadData()

                  }
                  if (this.alert === 'Duplicate') {
                    this.$swal({icon: 'error', title: 'มีการลงเวลาออกแล้ว'})
                    console.log('response.alert', this.alert)

                  }
                  if (this.alert === 'NoCheckIn') {
                    this.$swal({icon: 'error', title: 'ยังไม่มีการลงเวลาเข้า'})
                    console.log('Nocheckin')
                  }
                }
              })
              .catch((error) => {
                console.log('error', error)
              })
        }
        if (this.timeData === undefined) {
          console.log('Nocheck')
          this.$swal({icon: 'error', title: 'ยังไม่มีการลงเวลาเข้า'})

        }


      } else {
        this.$swal({icon: 'error', title: 'ท่านอยู่ห่างจากบริษัทมากเกินไป'})

        this.dialogRadio = true
      }


    },
    formatDateIn() {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')
      // console.log('x', x)
      console.log(887878, typeof this.timeData)
      console.log('value-timeData', this.timeData)
      if (typeof this.timeData !== 'undefined' && this.timeData.length != 0) {
        let today = moment().format('YYYY-MM-DD')
        console.log('r8r8r8r8r8r88r', this.timeData.start_date, today)
        if (this.timeData.start_date === today) {
          console.log('r9r9r9r9r9r9r9rr9r9r9r9r9r')
          this.dateIn = moment(this.timeData.start_date).format('DD-MM-YYYY | ')
          this.timeIn = this.timeData.start_time
        }
      }
    },
    formatDateOut() {
      // const x = this.timeDatas.created_at.format('MMMM Do YYYY, h:mm:ss a')
      console.log('x', formatted)
      console.log('value-timeDatas-out', this.timeData)

      if (typeof this.timeData !== 'undefined' && this.timeData.length != 0) {
        console.log(55599998888)
        let today = moment().format('YYYY-MM-DD')
        if (this.timeData.end_time && this.timeData.start_date === today) {
          console.log(77711122222)
          this.dateOut = moment(this.timeData.start_date).format('DD-MM-YYYY | ')
          this.timeOut = this.timeData.end_time
          console.log('dateOut', this.dateOut)

        }
      }


    },


  },
  beforeCreate() {

  },
  created() {
    this.wait()
    this.getId()

    this.$getLocation({})
        .then(coordinates => {
          this.coordinates = coordinates
          console.log('location', coordinates);
          this.markers = [
            {name: 'theBrick', position: this.brickOffice, icon: '../img/icon21.png'},
            {name: 'theBrickBangkok', position: this.bangkokOffice, icon: '../img/icon21.png'},
            {name: 'theBrickBangkokThonburi', position: this.bangkokThonburiOffice, icon: '../img/icon21.png'},
            {name: 'theBrick', position: this.testsystem, icon: '../img/icon21.png'},
            {name: 'theBrick2', position: this.testsystem2, icon: '../img/icon21.png'},
            {name: 'myLocation', position: {lat: coordinates.lat, lng: coordinates.lng,}, icon: '../img/man.png'}
          ]
        });

  }
}


</script>
<style>
@media screen and (max-width: 1080px) {
  .v-label {
    font-size: 0.5rem !important;
  }

  .v-card__title {
    font-size: 0.8rem !important;
  }

}


</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;0,500;1,300;1,500&family=Roboto&display=swap');

img {
  border-radius: 50%;
}

div#main-card {
  height: 100%;
}

div#main-card2 {
  height: 100%;
}

.button-logout {
  width: 40px;
  height: 35px;
}

.myfont {
  font-family: 'Prompt', sans-serif;
}

h1, h2 {
  display: inline;
}


@media screen and (max-width: 1080px) {
  .vue-map-container {
    width: 265px !important;
    height: 140px !important;
  }


  .test {
    width: 100% !important; /* The width is 100%, when the viewport is 800px or smaller */
    /*height: 565px!important;*/


  }

  .container {
    height: 84vh !important;
  }
}

#all {
  border-style: solid;
  border-color: lightblue;
  border-radius: 20px;
}

#timeIn {
  border-style: solid;
  border-color: blue;
  border-radius: 20px;
}

#timeOut {
  border-style: solid;
  border-color: #FF5252;
  border-radius: 20px;
}

#font-checkout {

  color: white;
}

.icon {
  height: 100px;
}

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
