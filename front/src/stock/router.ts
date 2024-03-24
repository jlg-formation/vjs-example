import type { RouteRecordRaw } from 'vue-router'

export const stockRoute: RouteRecordRaw = {
  path: '/stock',
  name: 'stock',
  children: [
    {
      path: '',
      name: 'list',
      component: () => import('../stock/views/ListView.vue')
    },
    {
      path: 'add',
      name: 'add',
      component: () => import('../stock/views/AddView.vue')
    }
  ]
}
