<template>
  <div class="tab_container">
    <div id="tab5" class="tab_content" style="display: block; ">
      <div class="info">
        <div class="customize_li">
          <ul>
            <li>
              <router-link to="/setting">基本信息</router-link>
            </li>
            <li class="active">
              <router-link to="/avatar">头像照片</router-link>
            </li>
            <!-- <li>
              <router-link to="/moreUserInfo">更多个人信息</router-link>
            </li> -->
            <li>
              <router-link to="/address">常用收货地址</router-link>
            </li>
          </ul>
        </div>
        <!-- 上传图片 -->
        <div class="customize_content">
          <div class="content">
            <div class="container-img">
              <div class="img-wrap">
                <span>选择您要上传的头像：</span>
                <div class="imageBox">
                  <div class="thumbBox"></div>
                  <div class="spinner" style="display: none"></div>
                  <div class="zoom-btns">
                    <button id="btnZoomOut">-</button>
                    <button id="btnZoomIn">+</button>
                  </div>
                </div>
                <div class="action">
                  <div class="new-contentarea tc">
                    <a href="javascript:void(0)" class="upload-img">
                  <label for="upload-file">上传图片</label> </a>
                    <input type="file" class="" name="upload-file" id="upload-file" />
                  </div>
                  仅支持JPG、GIF、PNG、JPEG、BMP格式，文件小于4MB
                </div>
              </div>
              <div class="cropped">
                <span>效果预览：</span>
                <p>您上传的图片会自动生成2种尺寸，请注意小尺寸的头像是否清晰</p>
                <div class="cropped_img"></div>
              </div>
              <div class="information_botton_box" @click="saveImg">
                <span class="information_botton headPicBtn">保存</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../common/js/cropbox.js";
export default {
  data() {
    return {
      userImg: sessionStorage.getItem("userImg"), //用户头像
      ruleForm: {
        token: sessionStorage.getItem("token"),
        base64: ""
      }
    };
  },
  methods: {
    saveImg() {
      let url = "/personal/portrait";
      this.$http.post(url, this.ruleForm).then(res => {
        if (res.data.errcode == 0) {
          sessionStorage.setItem("userImg", res.data.data);
          this.$message.success(res.data.errmsg);
          setTimeout(_ => {
            window.location.reload(); //页面刷新
          }, 500);
          return;
        }
        this.$message.error(res.data.errmsg);
      });
    }
  },
  mounted() {
    /* 图片插件--->开始 */
    let options = {
      thumbBox: ".thumbBox",
      spinner: ".spinner",
      imgSrc: this.userImg
        ? this.userImg
        : "http://cs.zsb9.cn./uploads/20180116/5a5de885b980d.png" //头像展示
    };
    /* 获取图片的base64 */
    let getImgwh = () => {
      let img = cropper.getDataURL();
      this.ruleForm.base64 = img;
      $(".cropped_img").html("");
      $(".cropped_img").append(
        '<img src="' +
          img +
          '" align="absmiddle" style="width:40px;margin-top:4px;border-radius:40px;background:#ddd;box-shadow:0px 0px 12px #7E7E7E;" ><p style="line-height:25px;margin: 10px;color: #bbb;">64px*64px</p>'
      );
      $(".cropped_img").append(
        '<img src="' +
          img +
          '" align="absmiddle" style="width:170px;margin-top:4px;border-radius:170px;background:#ddd;box-shadow:0px 0px 12px #7E7E7E;"><p style="line-height:25px;margin: 10px;color: #bbb;">180px*180px</p>'
      );
    };
    /* 鼠标松开触发 */
    $(".imageBox").mouseup(function() {
      getImgwh();
    });
    let cropper = $(".imageBox").cropbox(options);
    /* 上传图片之后触发 */
    $("#upload-file").on("change", function() {
      let reader = new FileReader();
      reader.onload = function(e) {
        options.imgSrc = e.target.result;
        cropper = $(".imageBox").cropbox(options);
      };
      reader.readAsDataURL(this.files[0]);
      setTimeout(_ => {
        getImgwh();
      }, 50);
      // this.files = [];
    });
    /* 放大 */
    $("#btnZoomIn").on("click", function() {
      cropper.zoomIn();
      getImgwh();
    });
    /* 缩小 */

    $("#btnZoomOut").on("click", function() {
      cropper.zoomOut();
      getImgwh();
    });
    /* 图片插件--->结束 */
  }
};
</script>
<style scoped>
.container-img {
  width: 1000px;
  margin: 50px auto 0 auto;
  position: relative;
  font-family: 微软雅黑;
  font-size: 12px;
}

.container-img p {
  line-height: 12px;
  line-height: 0px;
  height: 0px;
  margin: 10px;
  color: #bbb;
}

.action {
  width: 650px;
  height: 30px;
  margin: 10px 0;
  line-height: 40px;
}

.cropped {
  position: absolute;
  right: 0;
  top: 0;
  width: 288px;
  border: 1px #ddd solid;
  height: 514px;
  padding: 4px;
  box-shadow: 0px 0px 12px #ddd;
  text-align: center;
}

.cropped p {
  line-height: 25px;
  text-align: left;
  height: auto;
  overflow: hidden;
}

.img-wrap {
  border: 1px #ddd solid;
  padding: 15px;
  width: 653px;
  box-shadow: 0px 0px 12px #ddd;
}

.container-img span {
  height: 40px;
  line-height: 40px;
}

.imageBox {
  position: relative;
  height: 400px;
  width: 650px;
  border: 1px solid #aaa;
  background: #ddd;
  overflow: hidden;
  background-repeat: no-repeat;
  cursor: move;
  box-shadow: 4px 4px 12px #b0b0b0;
}

.imageBox .thumbBox {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  box-sizing: border-box;
  border: 1px solid rgb(102, 102, 102);
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
  background: none repeat scroll 0% 0% transparent;
}

.imageBox .spinner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  line-height: 400px;
  background: rgba(0, 0, 0, 0.2);
}

.zoom-btns {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
}

.zoom-btns button {
  width: 20px;
  height: 20px;
  font-family: sans-serif;
  cursor: pointer;
}
/*选择文件上传*/

.new-contentarea {
  width: 210px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  float: left;
}

a.upload-img {
  width: 200px;
  display: inline-block;
  margin-bottom: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  background-color: #323232;
  text-decoration: none;
}

.new-contentarea label {
  width: 100%;
  height: 100%;
  display: block;
}

.new-contentarea input[type="file"] {
  width: 188px;
  height: 60px;
  background: #333;
  margin: 0 auto;
  position: absolute;
  right: 50%;
  margin-right: -94px;
  top: 0;
  right: 0 \9;
  margin-right: 0 \9;
  width: 10px \9;
  opacity: 0;
  filter: alpha(opacity=0);
  z-index: 2;
}

.new-contentarea input[type="file"] {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.tc {
  text-align: center;
}

.information_botton_box {
  width: 350px;
  margin: 0px auto;
  padding: 50px 0px;
}

.information_botton {
  height: 45px;
  line-height: 45px;
  display: block;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: 微软雅黑;
  background: rgb(216, 0, 11);
  cursor: pointer;
}

.information_botton:hover {
  background: #ed000c;
}
</style>
