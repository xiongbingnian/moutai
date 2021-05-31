import Vue from 'vue'
import Router from 'vue-router'
// import moutaiHome from 'components/moutai-home/moutai-home'
// import personalCenter from 'components/personal-center/personal-center'
// import cart from 'components/cart/cart'
// import myNotice from 'components/my-notice/my-notice'
// import myOrder from 'components/my-order/my-order'
// import myMsg from 'components/my-msg/my-msg'
// import mySetting from 'components/my-setting/my-setting'
// import login from 'components/login/login'
// import standard from 'components/standard/standard'
// import personal from 'components/personal/personal'
// import standardPage from 'components/standard-page/standard-page'
// import onlineLetter from 'components/online-letter/online-letter'


const moutaiHome = (resolve) => {
  import ('components/moutai-home/moutai-home').then(module => {
    resolve(module)
  })
}
const personalCenter = (resolve) => {
  import ('components/personal-center/personal-center').then(module => {
    resolve(module)
  })
}
const cart = (resolve) => {
  import ('components/cart/cart').then(module => {
    resolve(module)
  })
}
const orderReview = (resolve) => {
	import ('components/orderReview/orderReview').then(module => {
	    resolve(module)
	})
}
const myNotice = (resolve) => {
  import ('components/my/notice').then(module => {
    resolve(module)
  })
}
const myOrder = (resolve) => {
  import ('components/my/order').then(module => {
    resolve(module)
  })
}
const myMessage = (resolve) => {
  import ('components/my/message').then(module => {

    resolve(module)
  })
}
const mySetting = (resolve) => {
  import ('components/my/setting').then(module => {
    resolve(module)
  })
}
const myChangePassword = (resolve) => {
  import ('components/my/changePassword').then(module => {
    resolve(module)
  })
}
const myMore = (resolve) => {
  import ('components/my/more').then(module => {
    resolve(module)
  })
}
const myShowaddr = (resolve) => {
  import ('components/my/showaddr').then(module => {
    resolve(module)
  })
}
const login = (resolve) => {
  import ('components/login/login').then(module => {
    resolve(module)
  })
}
const standard = (resolve) => {
  import ('components/standard/standard').then(module => {
    resolve(module)
  })
}
const personality = (resolve) => {
  import ('components/personality/personality').then(module => {
    resolve(module)
  })
}
const customize = (resolve) => {
  import ('components/customize/customize').then(module => {
    resolve(module)
  })
}
const standardPage = (resolve) => {
  import ('components/standard-page/standard-page').then(module => {
    resolve(module)
  })
}
const onlineLetter = (resolve) => {
  import ('components/online-letter/online-letter').then(module => {
    resolve(module)
  })
}
const customizable = (resolve) => {
  import ('components/customizable/customizable').then(module => {
    resolve(module)
  })
}
const settlement = (resolve) => {
  import ('components/settlement/settlement').then(module => {
    resolve(module)
  })
}
const address = (resolve) => {
  import ('components/address/address').then(module => {
    resolve(module)
  })
}
const invoice = (resolve) => {
  import ('components/invoice/invoice').then(module => {
    resolve(module)
  })
}
const customMade = (resolve) => {
	import ('components/customMade/customMade').then(module => {
	    resolve(module)
	})
}
const informationDeatil = (resolve) => {
	import ('components/informationDeatil/informationDeatil').then(module => {
	    resolve(module)
	})
}
const standardOrder = (resolve) => {
	import ('components/standardOrder/standardOrder').then(module => {
	    resolve(module)
	})
}
const standardOrderDetails = (resolve) => {
	import ('components/standardOrderDetails/standardOrderDetails').then(module => {
	    resolve(module)
	})
}
const personOrder = (resolve) => {
	import ('components/personOrder/personOrder').then(module => {
	    resolve(module)
	})
}
const registered = (resolve) => {
	import ('components/registered/registered').then(module => {
	    resolve(module)
	})
}





Vue.use(Router)

export default new Router({
  routes: [
    /* 默认 */
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: moutaiHome
    },
    {
      path: '/personalCenter',
      component: personalCenter,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/customizable',
      component: customizable,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/onlineLetter',
      component: onlineLetter,
    },
    {
      path: '/personality',
      component: personality,
    },
    {
      path: '/customize',
      component: customize,
    },
    {
      path: '/standard',
      component: standard,
    },
    {
      path: '/standard/:id',
      component: standardPage,
      meta: {
        head: false
      }
    },
    {
      path: '/cart',
      component: cart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/orderReview',
      component: orderReview,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settlement',
      component: settlement,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/address/:addressId',
      component: address,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/invoice',
      component: invoice,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/customMade',
      component: customMade,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/informationDeatil',
      component: informationDeatil,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/standardOrder',
      component: standardOrder,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/standardOrderDetails',
      component: standardOrderDetails,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/personOrder',
      component: personOrder,
      meta: {
        requiresAuth: true,
        head: false
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        head: false
      }
    },
    {
      path: '/registered',
      component: registered,
      meta: {
        head: false
      }
    },
    {
      path: '/my/notice',
      component: myNotice,
      meta: {
        head: false
      }
    },
    {
      path: '/my/order',
      component: myOrder,
      meta: {
        head: false
      }
    },
    {
      path: '/my/message',
      component: myMessage,
      meta: {
        head: false
      }
    },
    {
      path: '/my/setting',
      component: mySetting,
      meta: {
        head: false
      }
    },
	  {
      path: '/my/changePassword',
      component: myChangePassword,
      meta: {
        head: false
      }
   },
   {
      path: '/my/more',
      component: myMore,
      meta: {
        head: false
      }
   },
   {
      path: '/my/showaddr',
      component: myShowaddr,
      meta: {
        head: false
      }
    }
  ]
})
