<template>
  <!-- 底部 -->
  <footer>
    <div class="footerMeunT">
      <div class="mail">
        <div class="meun">
          <h2>茅台定制</h2>
          <ul>
            <li>
              <router-link to="/customMade">公司介绍</router-link>
            </li>
            <li>
              <router-link to="/personality">个性化定制业务介绍</router-link>
            </li>
            <li>
              <router-link to="/standard">标准化定制业务介绍</router-link>
            </li>
            <li>
              <a href="http://www.china-moutai.com/" target="_blank">集团官网
              </a>
            </li>
          </ul>
        </div>
        <div class="meun">
          <h2>业务合作</h2>
          <ul>
            <li>
              <router-link to="/contactUs">服务商合作</router-link>
            </li>
            <li>
              <li>
                <router-link to="/contactUs">商务合作</router-link>
              </li>
            </li>
          </ul>
        </div>
        <div class="meun">
          <h2>购物指南</h2>
          <ul>
            <li>
              <a href="https://www.cmaotai.com/r/SecurityKnowledge.html" target="_blank">防伪查询
              </a>
            </li>
            <li>
              <router-link to="/contactUs">生产及发货</router-link>
            </li>
            <li>
              <router-link to="/shoppingGuide">售后服务</router-link>
            </li>
          </ul>
        </div>
        <div class="meun">
          <h2>客户服务</h2>
          <ul>
            <li>
              <router-link to="/customerService">常见问题</router-link>
            </li>
            <li>
              <router-link to="/leaveMsg">在线留言</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footerMeunM">
      <ul>
        <li>
          <router-link to="/home">网站首页</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/contactUs">联系我们</router-link>
        </li>
        </li>
        <li>|</li>
        <li>
          <router-link to="/recruitment">招贤纳士</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/legalPage">法律声明</router-link>
        </li>
      </ul>
    </div>
    <div class="footerMeunB">
      <div class="main">
        <div class="footer-rowFlex comLogo">
          <a href="javascript:;">
            <img src="../common/img/maotai1.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="../common/img/maotai2.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="../common/img/maotai3.png" alt="">
          </a>
        </div>
        <ul>
          <li>
            <img src="../common/img/wm.jpg" alt="">
          </li>
          <li>
            <img src="../common/img/wm2.jpg" alt="">
          </li>
        </ul>
        <div class="deta">
          <div class="phone">
            <b class="ionic">400-861-9898</b>
          </div>
          <div class="time">
            <b class="ionic">服务时间 9:00-17:00</b>
          </div>
        </div>
        <p>版权所有 黔ICP备16009867号 国酒茅台定制营销（贵州）有限公司</p>
      </div>
    </div>
  </footer>
</template>
<style lang="less" scoped>
/* 底部 */

footer {
  min-width: 1200px;
  .footerMeunT {
    background: #dc1721;
    height: 260px;
    .mail {
      width: 1200px;
      margin: 0 auto;
      .meun {
        width: 240px;
        float: left;
        margin-left: 40px;
        margin-right: 20px;
        padding-top: 30px;
        h2 {
          height: 40px;
          line-height: 40px;
          color: #f6c190;
          border-bottom: 1px solid #ea747a;
          margin-bottom: 20px;
          font-weight: 400;
        }
        ul {
          li {
            line-height: 30px;
            list-style: none;
            font-size: 14px;
            a {
              display: block;
              text-decoration: none;
              color: #fff;
            }
            a:hover {
              color: #ffe9ac;
            }
          }
        }
      }
    }
  }
  .footerMeunM {
    background: #a2151b;
    height: 60px;
    ul {
      width: 400px;
      margin: 0 auto;
      height: auto;
      overflow: hidden;
      li {
        list-style: none;
        float: left;
        padding: 5px 10px;
        line-height: 50px;
        font-size: 14px;
        color: #fff;
        a {
          color: #e4e4e4;
        }
      }
    }
  }
  .footerMeunB {
    background: #1d1d1d;
    font-size: 12px;
    .main {
      width: 450px;
      margin: 0 auto;
      padding-top: 45px;
      height: auto;
      overflow: hidden;
      .footer-rowFlex {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        a {
          text-align: center;
          margin: 20px;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .comLogo {
        margin: 0 0 25px 35px;
      }
      ul {
        width: 160px;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
        li {
          list-style: none;
          float: left;
          margin-left: 10px;
          margin-right: 10px;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .deta {
        padding-top: 20px;
        margin: 0 auto;
        text-align: center;
        .phone {
          display: inline-block;
          margin-right: 20px;
          b {
            padding-left: 15px;
            color: #bbb;
            background-position: 0 0;
            font-weight: inherit;
          }
        }
        .time {
          display: inline-block;
          b {
            padding-left: 18px;
            color: #bbb;
            background-position: 0 -20px;
            font-weight: inherit;
          }
        }
      }
      p {
        clear: both;
        color: #bbb;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>
