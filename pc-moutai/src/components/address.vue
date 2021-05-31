<template>
  <div class="tab_container">
    <div id="tab5" class="tab_content" style="display: block; ">
      <div class="info">
        <div class="customize_li">
          <ul>
            <li>
              <router-link to="/setting">基本信息</router-link>
            </li>
            <li>
              <router-link to="/avatar">头像照片</router-link>
            </li>
            <!-- <li>
              <router-link to="/moreUserInfo">更多个人信息</router-link>
            </li> -->
            <li class="active">
              <router-link to="/address">常用收货地址</router-link>
            </li>
          </ul>
        </div>
        <div class="customize_content">
          <div class="content user_tabs" style="display: block">
            <div class="address_list">
              <div class="add_address">
                <button type="button" style="cursor:pointer" @click="editAddress(null)">新增收货地址</button>
                <span>您已创建{{addressList.length}}个，最多创建3个</span>
              </div>
              <ul v-if="!isAddressShow">
                <div>无收货地址</div>
              </ul>
              <ul v-if="isAddressShow" v-for="(item,index) in addressList" :key="index">
                <li>
                  <div class="left address_list_left">
                    <p>收货人：</p>
                    <p>身份证号码：</p>
                    <p>地址：</p>
                    <p>手机号码：</p>
                    <p>邮编：</p>
                  </div>
                  <div class="left  address_list_contact">
                    <p>{{ item.name }}<em class="ml10 text-warning"></em></p>
                    <p v-text="item.idcard"></p>
                    <p>
                      <span v-text="item.province"></span>
                      <span v-text="item.city"></span>
                      <span v-text="item.area"></span>
                      <span v-text="item.address"></span>
                    </p>
                    <p v-text="item.phone"></p>
                    <p v-text="item.code"></p>
                  </div>
                  <div class="address_mr">
                    <button type="button" style="cursor:pointer" @click="setDefault(item.id)">已设为默认</button>
                    <button type="button" style="cursor:pointer" @click="editAddress(item.id)">编辑</button>
                    <button type="button" style="cursor:pointer" @click="delAddress(item.id)">删除</button>
                  </div>
                </li>
                <div class="address_list_line"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popups_bg" v-show="isnewAddress" @click="btnClose"></div>
    <div class="modal" v-show="isnewAddress">
      <div class="title">
        <h2>编辑收货地址信息</h2>
        <div class="btn" @click="btnClose">X</div>
      </div>
      <div class="center">
        <el-row>
          <el-col :span="17" :offset="2">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <!-- 收货人 -->
              <el-form-item label="收货人 :" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <!-- 身份证号码 -->
              <el-form-item label="身份证号码 :" prop="idcard">
                <el-input v-model="ruleForm.idcard"></el-input>
                <p class="hint">因货物贵重，为了包装您的产品和财产安全，请输入身份证号并以此作为收货凭证，谢谢。</p>
                {{province.id}}
              </el-form-item>
              <!-- 所在地区 -->
              <el-form-item label="所在地区 :">
                <el-col :span="8">
                  <el-form-item prop="province_id">
                    <el-select v-model="ruleForm.province_id" placeholder="请选择省" @change="getCity" class="province">
                      <el-option v-for="(item,index) in province" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="city_id">
                    <el-select v-model="ruleForm.city_id" placeholder="请选择市" @change="getArea" class="province">
                      <el-option v-for="(item,index) in city" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="area_id">
                    <el-select v-model="ruleForm.area_id" placeholder="请选择区" class="province">
                      <el-option v-for="(item,index) in area" :key="index" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <!-- 详细地址 -->
              <el-form-item label="详细地址 :" prop="full_address">
                <el-input v-model="ruleForm.full_address"></el-input>
              </el-form-item>
              <!-- 手机号码 -->
              <el-form-item label="手机号码 :" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <!-- 邮编 -->
              <el-form-item label="邮编 :" prop="postcode">
                <el-input v-model="ruleForm.postcode"></el-input>
              </el-form-item>
              <!-- 保存 -->
              <el-form-item>
                <el-button class="btnsave" @click="submitForm('ruleForm')">保存收货人信息</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '', //收货人
          province_id: '', //选择之后的省id
          city_id: '', //选择之后的市id
          area_id: '', //选择之后的区id
          idcard: '', // 身份证
          postcode: '', //邮编
          phone: '', //手机号
          full_address: '', //详细地址
          id: null,
          token: sessionStorage.getItem('token'),
        },
        province: [], //所在地区省份
        city: [], //市区
        area: [], //区县
        addressList: [], //地址数据列表
        isAddressShow: '',
        isnewAddress: false,
        rules: {},
      };
    },
    mounted() {
      this.getAddress();
      this.getProvince();
    },
    methods: {
      /* 设置为默认 */
      setDefault(id) {
        let url = '/personal/addressSetDefault?id=' + id + '&token=' + this.ruleForm.token + '';
        this.$http.get(url)
          .then(res => {
            if (res.data.errcode == 0) {
              console.log(id)
              this.$message({
                message: res.data.errmsg,
                type: 'success'
              });
              return;
            }
            this.$message({
                message: res.data.errmsg,
                type: 'warning'
              });
          })
      },
      /* 点击新增按钮 */
      /* 点击编辑按钮 */
      editAddress(id) {
        this.isnewAddress = true;
        $(".modal").addClass("bounceInDown");
        if (id) {
          let url = '/personal/getaddressdetail?id=' + id + '&token=' + this.ruleForm.token + '';
          this.$http.get(url)
            .then(res => {
              this.ruleForm.id = res.data.data.itemDetail[0].id; //点击编辑设置一个id，编辑的时候需要用
              this.province = res.data.data.province; //重新返回的省份数据
              this.city = res.data.data.city; //重新返回的市区数据
              this.area = res.data.data.area; //重新返回地区数据
              this.ruleForm.name = res.data.data.itemDetail[0].name;
              this.ruleForm.idcard = res.data.data.itemDetail[0].idcard;
              this.ruleForm.postcode = res.data.data.itemDetail[0].postcode;
              this.ruleForm.phone = res.data.data.itemDetail[0].phone;
              this.ruleForm.full_address = res.data.data.itemDetail[0].full_address;
              this.ruleForm.province_id = res.data.data.itemDetail[0].province_id;
              this.ruleForm.city_id = res.data.data.itemDetail[0].city_id;
              this.ruleForm.area_id = res.data.data.itemDetail[0].area_id;
            })
        }
      },
      /* 删除地址 */
      delAddress(id) {
        this.$confirm('你真的要删除吗？').then(_ => {
          let url = '/personal/deleteAddress?id=' + id + '&token=' + this.ruleForm.token + '';
          this.$http.get(url)
            .then(res => {
              this.getAddress();
            })
            .catch(_ => {});
        })
      },
      /* 新增提交保存 */
      submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            // alert('submit!'); //此处代表成功通过验证，在此处请求接口
            let url = '/personal/addresssave';
            this.$http.post(url, this.ruleForm).then(res => {
              if (res.data.errcode == 0) {
                /* 新增成功 */
                this.$message({
                  message: res.data.errmsg,
                  type: 'success'
                });
                // 隐藏新增框
                this.isnewAddress = false;
                this.getAddress(); //重新获取数据
                // 清空搜索框
                this.$refs['ruleForm'].resetFields();
              } else {
                /* 失败 */
                this.$message({
                  message: res.data.errmsg,
                  type: 'warning'
                });
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      /* 关闭 */
      btnClose() {
        this.isnewAddress = false;
        $(".modal").removeClass("bounceInDown");
        this.$refs['ruleForm'].resetFields();
        this.ruleForm.id = null;
      },
      /* 获取地址信息 */
      getAddress() {
        let token = sessionStorage.getItem('token');
        let url = '/personal/address?token=' + token + '';
        this.$http.get(url)
          .then(res => {
            if (res.data.length > 0) {
              this.addressList = res.data;
              this.isAddressShow = true;
            } else {
              this.isAddressShow = false;
            }
          })
      },
      // 点击获取区县
      getArea(id) {
        let url = '/province/getzonelist?id=' + id + '&zoneType=3';
        this.$http.get(url).then(res => {
          this.area = res.data.data.dataList;
        })
      },
      // 点击获取市区
      getCity(id) {
        let url = '/province/getzonelist?id=' + id + '&zoneType=2';
        this.$http.get(url).then(res => {
          this.city = res.data.data.dataList;
        })
      },
      // 自动获取省份
      getProvince() {
        let url = '/province/getzonelist';
        this.$http.get(url).then(res => {
          this.province = res.data.data.dataList;
        })
      },
    }
  };

</script>
<style scoped>
  .hint {
    line-height: 18px;
    font-size: 12px;
    color: red;
    overflow: hidden;
  }

  .btnsave {
    background: #d7000a;
    font-size: 18px;
    color: #fff;
    width: 314px;
    margin-left: -30px;
  }

  .btnsave:hover {
    background: #ec000b;
  }

  .province {
    width: 90px;
  }
  .tab_container{
    min-width: 1200px;
  }
</style>
