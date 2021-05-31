<template>
	<div class="my-setting">
		<b-header :title="title"></b-header>
		<div class="content">
			<ul class="tab">
				<li class="tab-item" :class="{active:tabActive==0}" @click="_btnTab(0)">
					<router-link to="/my/setting">
						<span>基本信息</span>
					</router-link>
				</li>
				<li class="tab-item" :class="{active:tabActive==1}" @click="_btnTab(1)">
					<router-link to="/my/more">
						<span>更多个人信息</span>
					</router-link>
				</li>
				<li class="tab-item" :class="{active:tabActive==2}" @click="_btnTab(2)">
					<router-link to="/my/showaddr">
						<span>常用收货地址</span>
					</router-link>
				</li>
			</ul>
			<div class="showaddr_main">
				<ul v-if="!isAddressShow">
	                <div class="no-site">无收货地址</div>
	            </ul>
				<ul class="list">
					<li v-if="isAddressShow" v-for="(item,index) in addressList" :key="index">
						<div class="top">
							<p>
								<span class="name">
									<i class="icon-user"></i>
									{{ item.name }}
								</span> 
								<span class="">
									<i class="icon-phone"></i>
									{{item.phone}}
								</span>
							</p>
							<p>
								<i class="icon-card"></i>
								{{item.idcard}}
							</p>
							<p class="site">
								<i class="icon-address"></i>
								{{item.province}}{{item.city}}{{item.area}}{{item.address}}
							</p>
						</div>
						<div class="bottom">
							<label class="select-icon" :class="{'selected':checkedIndex==index}" @click="setDefault(item.id,index)">
				              <i class="icon_select"></i>
				              <span>设为默认地址</span>
							</label>
							<div class="btn_box">
								<router-link v-bind="{to:'/address/'+item.id}">
									<button>编辑</button>
								</router-link>
								<button @click="delAddress(item.id)">删除</button>
							</div>
						</div>
					</li>
				</ul>
				<button  @click="addAddress" class="save">+ 新增收货地址</button>
				<p class="message">您已创建{{addressList.length}}个，最多创建3个</p>
			</div>
		</div>
		<!-- 提示框 -->
		<modal :modalContent="modalContent" :inStatus="inStatus" :modalzIndex="modalzIndex" @selectConfirmCancel="isConfirmCancel" :modalTitle="modalTitle">
		</modal>
	</div>
</template>
<script>
	import BHeader from 'base/b-header/b-header';
	import Modal from "base/modal/modal";
	export default {
		data() {
			return {
				title: '信息设置',
				tabActive: 2,
				inStatus: 1,
				modalzIndex: -1,
				modalTitle: "",
				modalContent: "",
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
		        addressList: [], //地址数据列表
		        isAddressShow: '',
		        checkedIndex: null
			}
		},
		components: {
			BHeader,
			Modal
		},
		mounted() {
			this.getAddress();
      		this.getProvince();
		},
		methods: {
			/* 提示框显示 */
			modalIsShow(modalTitle, modalContent) {
				this.inStatus = 0;
				this.BackdropzIndex = 1040;
				this.modalzIndex = 1050;
				this.modalTitle = modalTitle;
				this.modalContent = modalContent;
			},
			/* 隐藏提示框 */
			modelIsHide() {
				this.inStatus = 1;
				/* 动画的事件是300毫秒，所以要用300毫秒的延时来执行隐藏，不然没有动画效果 */
				setTimeout(() => {
					this.modalzIndex = -1;
				}, 300);
			},
			isConfirmCancel(status) {
		      if (status === 0) {
		        /* 确认 */
		        if (this.delFlag) {
		          this.delFlag = false;
		          this.modelIsHide();
		          let url = `/personal/deleteAddress?id=${this
		            .addressId}&token=${sessionStorage.getItem("token")}`;
		          this.$http
		            .get(url)
		            .then(res => {
		              this._getAddress();
		            })
		            .catch(_ => {});
		        } else {
		          this.modelIsHide();
		        }
		      } else {
		        /* 取消 */
		        this.modelIsHide();
		      }
		    },
			change: function(index) {
				this.number = index;
			},
			_btnTab(index) {
				this.tabActive = index;
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
		    // 自动获取省份
		    getProvince() {
		        let url = '/province/getzonelist';
		        this.$http.get(url).then(res => {
		          this.province = res.data.data.dataList;
		        })
		    },
		    addAddress() {
		      this.$router.push({
		        path: "/address/newly"
		      });
		    },
		    /* 删除地址 */
		    delAddress(id) {
		      this.modalIsShow("提示", "确认删除该地址吗？");
		      this.delFlag = true;
		      this.addressId = id;
		    },
		    /*设置为默认*/
		    setDefault(id,index) {
		      this.checkedIndex = index;
		      let url = '/personal/addressSetDefault?id=' + id + '&token=' + this.ruleForm.token + '';
		        this.$http.get(url)
		          .then(res => {
		            if (res.data.errcode == 0) {
		              	console.log(id)
					  	this.modalIsShow("提示", res.data.errmsg);
		              	return;
		            }
					this.modalIsShow("提示", res.data.errmsg);
		          })
		    },
		}
	};
</script>

<style scoped>
	.tab {
		display: flex;
		border-bottom: .04rem solid #e7e7e7;
		background: #be9457;
	}
	
	.tab .tab-item {
		flex: 1;
		text-align: center;
		line-height: .78rem;
		color: #fff;
		font-size: .28rem;
	}
	
	.tab .tab-item span {
		color: #fff;
	}
	
	.tab .tab-item.active span {
		background: #fff;
		color: red;
		padding: .1rem;
		border-radius: .1rem;
	}
	
	.showaddr_main {
		padding: .3rem .3rem .77rem;
	}
	
	.no-site {
		text-align: center;
		margin-bottom: 0.4rem;
	}
	
	.list li {
		margin-bottom: .37rem;
		background-color: #fff;
		box-shadow: 0 0 0.08rem 0 rgba(0, 0, 0, .1);
	}
	
	.top {
		padding: 0.4rem 0.2rem;
		border-bottom: 3px solid #f7f7f7;
	}
	
	.top>p {
		line-height: 1rem;
		line-height: 0.6rem;
		font-size: 0.34rem;
	}
	
	.top .site {
		font-size: 0.2rem;
		color: rgba(0, 0, 0, .7);
	}
	
	.name {
		margin-right: 0.4rem;
	}
	
	.icon-user {
		margin-right: .17rem;
		background: transparent url(./i-user.png) 50% no-repeat;
		background-color: transparent;
		background-size: .24rem;
		display: inline-block;
		height: .25rem;
		width: .25rem;
		vertical-align: middle;
		transition: all .4s;
	}
	
	.icon-phone {
		margin-right: .05rem;
		background: transparent url(./i-phone.png) 50% no-repeat;
		background-color: transparent;
		background-size: .32rem;
		display: inline-block;
		height: .32rem;
		width: .32rem;
		vertical-align: middle;
		transition: all .4s;
	}
	
	.icon-card {
		margin-right: .09rem;
		background: transparent url(./i-card.png) 50% no-repeat;
		background-color: transparent;
		background-size: .33rem;
		display: inline-block;
		height: .33rem;
		width: .33rem;
		vertical-align: middle;
		transition: all .4s;
	}
	
	.icon-address {
		margin-right: .06rem;
		background: transparent url(./i-address.png) 50% no-repeat;
		background-color: transparent;
		background-size: .32rem;
		display: inline-block;
		height: .32rem;
		width: .32rem;
		vertical-align: middle;
		transition: all .4s;
	}
	
	.bottom {
		padding: 0.4rem 0.2rem;
		overflow: hidden;
	}
	
	.btn_box {
		float: right;
	}
	
	.btn_box button {
		width: 1rem;
		height: .56rem;
		background-color: #e5e5e5;
		border: 1px solid #d2d2d2;
		font-size: .24rem;
		margin-left: 0.2rem;
	}
	
	.save {
		line-height: 0.88rem;
		background-color: #d8000b;
		color: #fff;
		border-radius: 0;
		border: none;
		width: 100%;
		font-size: 0.44rem;
		font-weight: 400;
	}
	
	.message {
		text-align: center;
		font-size: .24rem;
		line-height: .3rem;
		margin-top: 0.4rem;
	}
	
	.selected .icon_select {
		background: url('../../common/images/on.png');
		background-size: 0.4rem;
	}
	
	.select-icon {
		display: block;
		position: relative;
	}
	
	.icon_select {
		position: absolute;
		width: 0.4rem;
		height: 0.4rem;
		content: '';
		display: block;
		background: url('../../common/images/off.png');
		background-size: 0.4rem;
		left: 10px;
		top: 50%;
		transform: translate(0, -50%);
	}
	
	.select-icon span {
		padding-left: 0.72rem;
		display: inline-block;
		width: 100%;
		line-height: 0.4rem;
	}
</style>