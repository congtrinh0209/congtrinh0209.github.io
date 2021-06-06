<template>
  <v-container
    id="createEWarranty"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12" class="px-0 py-0"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h4 font-weight-light">
              KÍCH HOẠT BẢO HÀNH SẢN PHẨM
            </div>

            <!-- <div class="text-subtitle-1 font-weight-light">
            </div> -->
          </template>

          <v-form
            ref="formAddWarranty"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-container class="py-0">
              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-credit-card-check-outline
                </v-icon>
                <span style="color: #00bcd4">MÃ THẺ BẢO HÀNH</span>
              </div>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="activeCode"
                    :rules="customNameRules"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-card-account-details-outline
                </v-icon>
                <span style="color: #00bcd4">THÔNG TIN KHÁCH HÀNG</span>
              </div>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Tên khách hàng <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customName"
                    :rules="customNameRules"
                    required
                    outlined
                    placeholder=""
                    prepend-inner-icon="mdi-account-check-outline"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Số điện thoại <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customTelNo"
                    :rules="customTelNoRules"
                    required
                    outlined
                    placeholder=""
                    prepend-inner-icon="mdi-lock-check-outline"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <div class="mb-2">Địa chỉ công trình <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customAddress"
                    :rules="customAddressRules"
                    outlined
                    placeholder="Địa chỉ"
                    prepend-inner-icon="mdi-map-marker"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-archive-outline
                </v-icon>
                <span style="color: #00bcd4">THÔNG TIN SẢN PHẨM</span>
              </div>
              <div>
                <v-sheet elevation="1">
                  <v-tabs
                    v-model="tab"
                    background-color="#4caf50"
                    dark
                  >
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tab  href="#tab-1"
                    >
                      I. THI CÔNG NỘI THẤT
                    </v-tab>
                    <v-tab  href="#tab-2"
                    >
                      II. THI CÔNG NGOẠI THẤT
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item value="tab-1">
                      <div class="">
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>SƠN PHỦ
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="sonPhuSelected"
                                :items="listSonPhu"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachSelected"
                                :items="sonPhuSelected ? sonPhuSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterSonPhu"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterSonPhu')"
                                @click:prepend-inner="decreaseCounter('counterSonPhu')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNoiThatSonPhu">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in noiThatSonPhu" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteSonPhuNoiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                        <v-divider></v-divider>
                        <!--  -->
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>SƠN LÓT
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="sonLotSelected"
                                :items="listSonLot"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachSonLotSelected"
                                :items="sonLotSelected ? sonLotSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterSonLot"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterSonLot')"
                                @click:prepend-inner="decreaseCounter('counterSonLot')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNoiThatSonLot">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in noiThatSonLot" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteSonLotNoiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                        <v-divider></v-divider>
                        <!--  -->
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>BỘT TRÉT
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="botTretSelected"
                                :items="listBotTret"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachBotTretSelected"
                                :items="botTretSelected ? botTretSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterBotTret"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterBotTret')"
                                @click:prepend-inner="decreaseCounter('counterBotTret')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNoiThatBotTret">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in noiThatBotTret" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteBotTretNoiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-tab-item>
                    <!-- tab-2 -->
                    <v-tab-item value="tab-2">
                      <div class="">
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>SƠN PHỦ
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="sonPhuSelected"
                                :items="listSonPhu"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachSelected"
                                :items="sonPhuSelected ? sonPhuSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterSonPhu"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterSonPhu')"
                                @click:prepend-inner="decreaseCounter('counterSonPhu')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNoiThatSonPhu">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in ngoaiThatSonPhu" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteSonPhuNgoaiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                        <v-divider></v-divider>
                        <!--  -->
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>SƠN LÓT
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="sonLotSelected"
                                :items="listSonLot"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachSonLotSelected"
                                :items="sonLotSelected ? sonLotSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterSonLot"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterSonLot')"
                                @click:prepend-inner="decreaseCounter('counterSonLot')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNgoaiThatSonLot">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in ngoaiThatSonLot" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteSonLotNgoaiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                        <v-divider></v-divider>
                        <!--  -->
                        <div class="px-3">
                          <div class="my-2 font-weight-bold">
                            <v-icon color="info darken-2" class="mr-4" >
                              mdi-flash-outline
                            </v-icon>BỘT TRÉT
                          </div>
                          <v-row class="my-2">
                            <v-col cols="12" sm="6" md="6">
                              <v-autocomplete
                                v-model="botTretSelected"
                                :items="listBotTret"
                                outlined
                                dense
                                label="Sản phẩm"
                                return-object
                                item-text="productName"
                                item-value="uid"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-autocomplete
                                v-model="quycachBotTretSelected"
                                :items="botTretSelected ? botTretSelected['quycach'] : []"
                                outlined
                                dense
                                label="Quy cách"
                                hide-details
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="counterBotTret"
                                append-icon="mdi-plus"
                                prepend-inner-icon="mdi-minus"
                                type="number"
                                label="Số lượng"
                                outlined
                                @click:append="increaseCounter('counterBotTret')"
                                @click:prepend-inner="decreaseCounter('counterBotTret')"
                                dense
                                hide-details
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2">
                              <v-btn class="" color="primary" @click="addNgoaiThatBotTret">
                                <v-icon left>
                                  mdi-plus
                                </v-icon>
                                <span>Thêm</span>
                              </v-btn>
                            </v-col>

                          </v-row>
                          <v-row class="my-2" v-for="(item, i) in ngoaiThatBotTret" :key="i">
                            <v-col cols="12" sm="6" md="6" class="d-flex align-center py-0">
                              <span class="font-weight-bold mr-2">{{i + 1}}.</span>
                              <v-text-field
                                v-model="item['productName']"
                                label="Sản phẩm"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                v-model="item['quycach']"
                                label="Quy cách"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-text-field
                                class="counter-up-down"
                                style="width: 125px"
                                v-model="item['soluong']"
                                type="number"
                                label="Số lượng"
                                outlined
                                dense
                                hide-details
                                readonly
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="2" class="py-0">
                              <v-btn class="" color="red" @click="deleteBotTretNgoaiThat(i)">
                                <v-icon left>
                                  mdi-delete
                                </v-icon>
                                <span>Xóa</span>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-tab-item>
                  </v-tabs-items>
                </v-sheet>
                
              </div>

              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-web-clock
                </v-icon>
                <span style="color: #00bcd4">THỜI GIAN BẢO HÀNH</span>
              </div>
              <div>
                <div class="mb-3">
                  <div class="d-inline-block" style="width: 130px">
                    <v-icon color="blue" class="mr-3" >
                      mdi-calendar-range
                    </v-icon>
                    Ngoại thất:
                  </div>
                  
                  <span>Từ ngày</span>
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="ngoaiThatFromDueDateDay"
                    :items="days"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> tháng 
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="ngoaiThatFromDueDateMonth"
                    :items="months"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> năm
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 100px;"
                    v-model="ngoaiThatFromDueDateYear"
                    :items="years"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete>
                  <span class="mx-2">-</span>
                  <span>Đến ngày</span>
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="ngoaiThatToDueDateDay"
                    :items="days"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> tháng 
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="ngoaiThatToDueDateMonth"
                    :items="months"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> năm
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 100px;"
                    v-model="ngoaiThatToDueDateYear"
                    :items="years"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete>
                </div>
                <!--  -->
                <div class="mb-2">
                  <div class="d-inline-block" style="width: 130px">
                    <v-icon color="orange" class="mr-3" >
                      mdi-calendar-range
                    </v-icon>
                    Nội thất: 
                  </div>
                  <span>Từ ngày</span>
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="noiThatFromDueDateDay"
                    :items="days"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> tháng 
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="noiThatFromDueDateMonth"
                    :items="months"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> năm
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 100px;"
                    v-model="noiThatFromDueDateYear"
                    :items="years"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete>
                  <span class="mx-2">-</span>
                  <span>Đến ngày</span>
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="noiThatToDueDateDay"
                    :items="days"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> tháng 
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 70px;"
                    v-model="noiThatToDueDateMonth"
                    :items="months"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete> năm
                  <v-autocomplete
                    class="d-inline-block mx-2"
                    style="width: 100px;"
                    v-model="noiThatToDueDateYear"
                    :items="years"
                    outlined
                    dense
                    hide-details
                  ></v-autocomplete>
                </div>
              </div>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CreateEWarranty',
    props: ['uid'],
    data () {
      return {
        loading: false,
        validFormAdd: true,
        tab: null,

        activeCode: '',

        listSonPhu: [],
        listSonLot: [],
        listBotTret: [],

        noiThatSonPhu: [],
        counterSonPhu: 0,
        sonPhuSelected: '',
        quycachSelected: '',

        noiThatSonLot: [],
        sonLotSelected: '',
        counterSonLot: 0,
        quycachSonLotSelected: '',

        noiThatBotTret: [],
        botTretSelected: '',
        counterBotTret: 0,
        quycachBotTretSelected: '',

        ngoaiThatSonPhu: [],
        counterSonPhu: 0,
        sonPhuSelected: '',
        quycachSelected: '',

        ngoaiThatSonLot: [],
        sonLotSelected: '',
        counterSonLot: 0,
        quycachSonLotSelected: '',

        ngoaiThatBotTret: [],
        botTretSelected: '',
        counterBotTret: 0,
        quycachBotTretSelected: '',

        noiThatFromDueDateDay: '',
        noiThatFromDueDateMonth: '',
        noiThatFromDueDateYear: '',
        noiThatToDueDateDay: '',
        noiThatToDueDateMonth: '',
        noiThatToDueDateYear: '',
        days: [],
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        years: [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030],
        ngoaiThatFromDueDateDay: '',
        ngoaiThatFromDueDateMonth: '',
        ngoaiThatFromDueDateYear: '',
        ngoaiThatToDueDateDay: '',
        ngoaiThatToDueDateMonth: '',
        ngoaiThatToDueDateYear: '',

        userName: '',
        nameRules: [
          v => !!v || 'Tên thành viên là bắt buộc',
          v => (v && v.length <= 100) || 'Tên không quá 100 ký tự',
        ],
        account: '',
        accountRules: [
          v => !!v || 'Tên đăng nhập là bắt buộc',
          v => /^[a-zA-Z0-9]+$/.test(v) || 'Tên đăng nhập gồm chữ hoặc số',
          v => (v && v.length <= 75) || 'Tên đăng nhập không quá 75 ký tự',
        ],
        passWord: '',
        passwordRules: [
          v => !!v || 'Mật khẩu đăng nhập là bắt buộc',
          v => (v && v.length >= 6 && v.length <= 20) || 'Mật khẩu ít nhất 6 ký tự',
        ],
        telNo: '',
        telNoRules: [
          v => !!v || 'Số điện thoại là bắt buộc',
          v => /^0([1-9]{1}\d{8})$/.test(v) || 'Số điện thoại gồm 10 chữ số',
        ],
        address: '',
        addressRules: [
          v => (v && v.length <= 200) || 'Địa chỉ không quá 200 ký tự',
        ],
        headers: [
          {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
          },
          {
            sortable: false,
            text: 'Tên sản phẩm',
            align: 'left',
            value: 'productName'
          },
          {
            sortable: false,
            text: 'Quy cách',
            align: 'left',
            value: 'quycach'
          },
          {
            sortable: false,
            text: 'Số lượng',
            align: 'left',
            value: 'soluong'
          },
          {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
          },
        ],
      }
    },
    created () {
      let vm = this
      let current = vm.$router.history.current.query
      if (current.hasOwnProperty('activeCode') && current['activeCode']) {
        vm.activeCode = current.activeCode
      }
      vm.getListSonPhu()
      vm.getListSonLot()
      vm.getListBotTret()
      vm.days = []
      for (let i = 1; i<=31; i++) {
        vm.days.push(i)
      }
      let year  = new Date().getFullYear()
      let month = new Date().getMonth()
      let day   = new Date().getDate()
      let dateNoiThat  = new Date(year + 8, month, day)
      let dateNgoaiThat  = new Date(year + 5, month, day)
      vm.ngoaiThatFromDueDateDay = vm.noiThatFromDueDateDay = day
      vm.ngoaiThatFromDueDateMonth = vm.noiThatFromDueDateMonth = month + 1
      vm.ngoaiThatFromDueDateYear = vm.noiThatFromDueDateYear = year
      vm.ngoaiThatToDueDateDay = dateNgoaiThat.getDate()
      vm.ngoaiThatToDueDateMonth = dateNgoaiThat.getMonth() + 1
      vm.ngoaiThatToDueDateYear = dateNgoaiThat.getFullYear()
      vm.noiThatToDueDateDay = dateNoiThat.getDate()
      vm.noiThatToDueDateMonth = dateNoiThat.getMonth() + 1
      vm.noiThatToDueDateYear = dateNoiThat.getFullYear()
    },
    methods: {
      addMember () {
        let vm = this
        vm.dialogAddMember = true
        setTimeout(function () {
          vm.account = ''
          vm.passWord = ''
          vm.userName = ''
          vm.telNo = ''
          vm.address = ''
          vm.$refs.formAddMember.resetValidation()
        }, 200)
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {
          let dataUserAuthen = {
            account: String(vm.account).trim() + '@gmail.com',
            passWord: String(vm.passWord).trim(),
            userName: String(vm.userName).trim(),
            telNo: String(vm.telNo).trim(),
            address: String(vm.address).trim()
          }
          vm.loading = true
          firebase.auth().createUserWithEmailAndPassword(dataUserAuthen.account, dataUserAuthen.passWord)
          .then(userCredential => {
            vm.loading = false
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Thêm thành viên thành công',
              color: 'success',
            })
            // Signed in 
            let user = userCredential.user;
            db.collection("users").doc(user.uid).set({
              account: String(vm.account).trim(),
              userName: dataUserAuthen.userName,
              telNo: dataUserAuthen.telNo,
              address: dataUserAuthen.address,
              role: "Member"
            })
            .then(() => {
            })
            .catch((error) => {
            });
            // ...
          })
          .catch((error) => {
            vm.loading = false
            let errorCode = error.code;
            let errorMessage = error.message;
            let mess = ''
            if (errorCode == 'auth/email-already-in-use') {
              mess = 'Tên đăng nhập đã được sử dụng. Vui lòng sử dụng tên đăng nhập khác.'
            } else if (errorCode == 'auth/weak-password') {
              mess = 'Mật khẩu quá yếu'
            } else if (errorCode == 'auth/invalid-email') {
              mess = 'Tên đăng nhập không hợp lệ'
            } else {
              mess = errorMessage
            }
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: mess,
              color: 'error',
            })
            // ..
          });
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
      getListSonPhu () {
        let vm = this
        db.collection("sonphuProduct").get().then(function(querySnapshot) {
          let sonphuProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonphuProduct.push(item.data())
            })
            sonphuProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            console.log('sonphuProduct', sonphuProduct)
            vm.listSonPhu = sonphuProduct
          } else {
            vm.listSonPhu = []
          }
        }).catch(function () {
        })
      },
      getListSonLot () {
        let vm = this
        db.collection("sonlotProduct").get().then(function(querySnapshot) {
          let sonlotProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonlotProduct.push(item.data())
            })
            sonlotProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listSonLot = sonlotProduct
          } else {
            vm.listSonLot = []
          }
        }).catch(function () {
        })
      },
      getListBotTret () {
        let vm = this
        db.collection("bottretProduct").get().then(function(querySnapshot) {
          let bottretProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              bottretProduct.push(item.data())
            })
            bottretProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listBotTret = bottretProduct
          } else {
            vm.listBotTret = []
          }
        }).catch(function () {
        })
      },
      formatQuyCach (item) {
        if (item) {
          return String(item).split(',')
        }
      },
      addNoiThatSonPhu () {
        let vm = this
        if (vm.sonPhuSelected && vm.quycachSelected && vm.counterSonPhu) {
          let item = {
            productName: vm.sonPhuSelected['productName'],
            quycach: vm.quycachSelected,
            soluong: vm.counterSonPhu
          }
          vm.noiThatSonPhu.push(item)
          vm.sonPhuSelected = ''
          vm.quycachSelected = ''
          vm.counterSonPhu = 0
        }
      },
      deleteSonPhuNoiThat (index) {
        let vm = this
        vm.noiThatSonPhu.splice(index, 1)
      },
      addNoiThatSonLot () {
        let vm = this
        if (vm.sonLotSelected && vm.quycachSonLotSelected && vm.counterSonLot) {
          let item = {
            productName: vm.sonLotSelected['productName'],
            quycach: vm.quycachSonLotSelected,
            soluong: vm.counterSonLot
          }
          vm.noiThatSonLot.push(item)
          vm.sonLotSelected = ''
          vm.quycachSonLotSelected = ''
          vm.counterSonLot = 0
        }
      },
      deleteSonLotNoiThat (index) {
        let vm = this
        vm.noiThatSonLot.splice(index, 1)
      },
      addNoiThatBotTret () {
        let vm = this
        if (vm.botTretSelected && vm.quycachBotTretSelected && vm.counterBotTret) {
          let item = {
            productName: vm.botTretSelected['productName'],
            quycach: vm.quycachBotTretSelected,
            soluong: vm.counterBotTret
          }
          vm.noiThatBotTret.push(item)
          vm.botTretSelected = ''
          vm.quycachBotTretSelected = ''
          vm.counterBotTret = 0
        }
      },
      deleteBotTretNoiThat (index) {
        let vm = this
        vm.noiThatBotTret.splice(index, 1)
      },
      // 
      addNgoaiThatSonPhu () {
        let vm = this
        if (vm.sonPhuSelected && vm.quycachSelected && vm.counterSonPhu) {
          let item = {
            productName: vm.sonPhuSelected['productName'],
            quycach: vm.quycachSelected,
            soluong: vm.counterSonPhu
          }
          vm.ngoaiThatSonPhu.push(item)
          vm.sonPhuSelected = ''
          vm.quycachSelected = ''
          vm.counterSonPhu = 0
        }
      },
      deleteSonPhuNgoaiThat (index) {
        let vm = this
        vm.ngoaiThatSonPhu.splice(index, 1)
      },
      addNgoaiThatSonLot () {
        let vm = this
        if (vm.sonLotSelected && vm.quycachSonLotSelected && vm.counterSonLot) {
          let item = {
            productName: vm.sonLotSelected['productName'],
            quycach: vm.quycachSonLotSelected,
            soluong: vm.counterSonLot
          }
          vm.ngoaiThatSonLot.push(item)
          vm.sonLotSelected = ''
          vm.quycachSonLotSelected = ''
          vm.counterSonLot = 0
        }
      },
      deleteSonLotNgoaiThat (index) {
        let vm = this
        vm.ngoaiThatSonLot.splice(index, 1)
      },
      addNgoaiThatBotTret () {
        let vm = this
        if (vm.botTretSelected && vm.quycachBotTretSelected && vm.counterBotTret) {
          let item = {
            productName: vm.botTretSelected['productName'],
            quycach: vm.quycachBotTretSelected,
            soluong: vm.counterBotTret
          }
          vm.ngoaiThatBotTret.push(item)
          vm.botTretSelected = ''
          vm.quycachBotTretSelected = ''
          vm.counterBotTret = 0
        }
      },
      deleteBotTretNoiThat (index) {
        let vm = this
        vm.ngoaiThatBotTret.splice(index, 1)
      },
      // 
      increaseCounter(model) {
        let vm = this
        vm[model] += 1
      },
      decreaseCounter(model) {
        let vm = this
        vm[model] -= 1
        if (vm[model] < 0) {
          vm[model] = 0
        }
      }
    },
  }
</script>

<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
  main {
    padding-top: 75px !important;
  }
</style>
