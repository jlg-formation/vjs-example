import { type NavigationGuard, type RouteRecordRaw } from 'vue-router'
import { useArticleStore } from './store/articleStore'

export const stockRoute: RouteRecordRaw = {
  path: '/stock',
  name: 'stock',
  children: [
    {
      path: '',
      name: 'stock-list',
      component: () => import('../stock/views/ListView.vue')
    },
    {
      path: 'add',
      name: 'stock-add',
      component: () => import('../stock/views/AddView.vue')
    }
  ]
}

// guards
export const checkStockGuards: NavigationGuard = async (to, from) => {
  console.log('stock guards to, from: ', to, from)
  if (to.name === 'stock-add') {
    const articleStore = useArticleStore()
    if (articleStore.articles === undefined) {
      await articleStore.refresh()
    }
    if (articleStore.articleTotal > 5) {
      alert('Cannot add article if total > 5')
      return '/stock'
    }
  }
  return true
}
