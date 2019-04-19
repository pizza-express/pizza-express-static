export default [
  {
    path: '/login',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/login',
        component: './login/Login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      // dashboard
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      // factory
      {
        path: '/factory',
        name: 'factory',
        icon: 'smile',
        routes: [
          {
            path: '/factory/query',
            name: 'query',
            component: './factory/FactoryList',
          },
        ],
      },
      {
        path: '/dishes',
        name: 'dishes',
        icon: 'smile',
        routes: [
          {
            path: '/dishes/query',
            name: 'query',
            component: './Dishes/DishesList',
          },
        ],
      },
      {
        path: '/user',
        name: '用户管理',
        icon: 'smile',
        routes: [
          {
            path: '/user/query',
            name: '查看用户信息',
            component: './user/UserList',
          },
        ],
      },
      {
        path: '/order',
        name: 'order',
        icon: 'smile',
        routes: [
          {
            path: '/order/query',
            name: 'query',
            component: './order/OrderList',
          },
        ],
      },
    ],
  },
];
