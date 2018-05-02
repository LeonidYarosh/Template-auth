import Auth from 'features/auth/ui'
import Content from 'features/content/ui'
import SubContent from 'features/subcontent/ui'

const routes = [
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/',
    component: Content,
    isProtected: true,
    routes: [
      {
        path: '/sub',
        component: SubContent,
      },
    ],
  },
]

export default routes
