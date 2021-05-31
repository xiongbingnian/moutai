import Vue from 'vue'
import Router from 'vue-router'
//导入layout模块
// import home from 'components/home';
// import standard from 'components/standard';
// import standardPage from 'components/standardPage';
// import login from 'components/login';
// import maotai from 'components/maotai';
// import cart from 'components/cart';
// import registered from 'components/registered';
// import personality from 'components/personality';
// import information from 'components/information';
// import memberCenter from 'components/memberCenter';
// import member from 'components/member';
// import standardOrder from 'components/standardOrder';
// import messages from 'components/messages';
// import note from 'components/note';
// import setting from 'components/setting';
// import settlement from 'components/settlement';
// import contactUs from 'components/contactUs';
// import recruitment from 'components/recruitment';
// import legalPage from 'components/legalPage';
// import customerService from 'components/customerService';
// import customMade from 'components/customMade';
// import leaveMsg from 'components/leaveMsg';
// import shoppingGuide from 'components/shoppingGuide';
// import address from 'components/address';
// import avatar from 'components/avatar';
// import moreUserInfo from 'components/moreUserInfo';
// import personOrder from 'components/personOrder';
// import orderReview from 'components/orderReview';
// import informationDeatil from 'components/informationDeatil';
const home = (resolve) => {
  import ('components/home').then(module => {
    resolve(module)
  })
}
const standard = (resolve) => {
  import ('components/standard').then(module => {
    resolve(module)
  })
}
const standardPage = (resolve) => {
  import ('components/standardPage').then(module => {
    resolve(module)
  })
}
const login = (resolve) => {
  import ('components/login').then(module => {
    resolve(module)
  })
}
const maotai = (resolve) => {
  import ('components/maotai').then(module => {
    resolve(module)
  })
}
const cart = (resolve) => {
  import ('components/cart').then(module => {
    resolve(module)
  })
}
const registered = (resolve) => {
  import ('components/registered').then(module => {
    resolve(module)
  })
}
const personality = (resolve) => {
  import ('components/personality').then(module => {
    resolve(module)
  })
}
const information = (resolve) => {
  import ('components/information').then(module => {
    resolve(module)
  })
}
const member = (resolve) => {
  import ('components/member').then(module => {
    resolve(module)
  })
}
const memberCenter = (resolve) => {
  import ('components/memberCenter').then(module => {
    resolve(module)
  })
}
const messages = (resolve) => {
  import ('components/messages').then(module => {
    resolve(module)
  })
}
const standardOrder = (resolve) => {
  import ('components/standardOrder').then(module => {
    resolve(module)
  })
}
const standardOrderDetails = (resolve) => {
  import ('components/standardOrderDetails').then(module => {
    resolve(module)
  })
}

const note = (resolve) => {
  import ('components/note').then(module => {
    resolve(module)
  })
}
const setting = (resolve) => {
  import ('components/setting').then(module => {
    resolve(module)
  })
}
const settlement = (resolve) => {
  import ('components/settlement').then(module => {
    resolve(module)
  })
}
const contactUs = (resolve) => {
  import ('components/contactUs').then(module => {
    resolve(module)
  })
}
const recruitment = (resolve) => {
  import ('components/recruitment').then(module => {
    resolve(module)
  })
}
const legalPage = (resolve) => {
  import ('components/legalPage').then(module => {
    resolve(module)
  })
}
const customerService = (resolve) => {
  import ('components/customerService').then(module => {
    resolve(module)
  })
}
const customMade = (resolve) => {
  import ('components/customMade').then(module => {
    resolve(module)
  })
}

const leaveMsg = (resolve) => {
  import ('components/leaveMsg').then(module => {
    resolve(module)
  })
}
const shoppingGuide = (resolve) => {
  import ('components/shoppingGuide').then(module => {
    resolve(module)
  })
}
const address = (resolve) => {
  import ('components/address').then(module => {
    resolve(module)
  })
}
const avatar = (resolve) => {
  import ('components/avatar').then(module => {
    resolve(module)
  })
}
const moreUserInfo = (resolve) => {
  import ('components/moreUserInfo').then(module => {
    resolve(module)
  })
}
const personOrder = (resolve) => {
  import ('components/personOrder').then(module => {
    resolve(module)
  })
}
const orderReview = (resolve) => {
  import ('components/orderReview').then(module => {
    resolve(module)
  })
}
const informationDeatil = (resolve) => {
  import ('components/informationDeatil').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    //自动 跳转到指定页面
    {
      name: 'default',
      path: '/',
      redirect: '/home'
    },
    //主页面
    {
      path: '/home',
      component: home
    },
    /* 审核付款 */
    {
      name: 'orderReview',
      path: '/orderReview',
      component: orderReview,
      meta: {
        requiresAuth: true
      }
    },
    /* 售后服务 */
    {
      name: 'shoppingGuide',
      path: '/shoppingGuide',
      component: shoppingGuide,
    },
    /* 在线留言 */
    {
      name: 'leaveMsg',
      path: '/leaveMsg',
      component: leaveMsg,
    },
    /* 公司介绍 */
    {
      name: 'customMade',
      path: '/customMade',
      component: customMade,
    },
    /* 客户服务 */
    {
      name: 'customerService',
      path: '/customerService',
      component: customerService,
    },
    /* 法律声明 */
    {
      name: 'legalPage',
      path: '/legalPage',
      component: legalPage,
    },
    /* 招贤纳士 */
    {
      name: 'recruitment',
      path: '/recruitment',
      component: recruitment,
    },
    /* 联系我们 */
    {
      name: 'contactUs',
      path: '/contactUs',
      component: contactUs,
    },
    /* 首页 */
    {
      name: 'home',
      path: '/home',
      component: home
    },
    /* 标准定制 */
    {
      name: 'standard',
      path: '/standard',
      component: standard,
      meta: {
        falg: true
      }
    },
    /* 酒系列 */
    {
      name: 'standardPage',
      path: '/standardPage:id',
      component: standardPage,
      meta: {
        falg: true
      }
    },
    //登录页面
    {
      name: 'login',
      path: '/login',
      component: login
    },
    //注册页面
    {
      name: 'registered',
      path: '/registered',
      component: registered
    },
    /* 酒定制页面 */
    {
      name: 'maotai',
      path: '/maotai/item=:item_id',
      component: maotai,
      meta: {
        footer: false,
        requiresAuth: true, //需要做登录验证的页面
      }
    },
    /* 购物车 */
    {
      name: 'cart',
      path: '/cart',
      component: cart,
      meta: {
        requiresAuth: true
      }
    },
    /* 个性定制 */
    {
      name: 'personality',
      path: '/personality',
      component: personality
    },
    /* 咨询天地 */
    {
      name: 'information',
      path: '/information',
      component: information
    },
    /* 咨询天地详情页 */
    {
      name: 'informationDeatil',
      path: '/informationDeatil/:deatilId',
      component: informationDeatil
    },
    /* 结算页面 */
    {
      name: 'settlement',
      path: '/settlement',
      component: settlement,
      meta: {
        requiresAuth: true
      }

    },
    /* 会员中心 */
    {
      name: 'member',
      path: '/member',
      component: member,
      meta: {
        memberfalg: true,
        requiresAuth: true //需要做登录验证的页面
      },
      children: [
        /* 会员中心 */
        {
          name: 'memberCenter',
          path: '/member',
          component: memberCenter,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 我的消息 */
        {
          name: 'messages',
          path: '/messages',
          component: messages,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 我的订单 */
        {
          name: 'standardOrder',
          path: '/standardOrder',
          component: standardOrder,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 我的订单详情页 */
        {
          name: 'standardOrderDetails',
          path: '/standardOrderDetails/:id',
          component: standardOrderDetails,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 我的留言 */
        {
          name: 'note',
          path: '/note',
          component: note,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 信息设置 */
        {
          name: 'setting',
          path: '/setting',
          component: setting,
          meta: {
            memberfalg: true,
            requiresAuth: true, //需要做登录验证的页面
          },
        },
        /* 常用地址 */
        {
          name: 'address',
          path: '/address',
          component: address,
          meta: {
            requiresAuth: true, //需要做登录验证的页面
          }
        },
        /* 头像设置 */
        {
          name: 'avatar',
          path: '/avatar',
          component: avatar,
          meta: {
            requiresAuth: true, //需要做登录验证的页面
          }
        },
        /* 更多个人信息 */
        {
          name: 'moreUserInfo',
          path: '/moreUserInfo',
          component: moreUserInfo,
          meta: {
            requiresAuth: true, //需要做登录验证的页面
          }
        },
        /* 个性定制 */
        {
          name: 'personOrder',
          path: '/personOrder',
          component: personOrder,
        },
      ]
    },
  ]

})
