import Auth from 'features/auth/ui'
import Content from 'features/content/ui'
import SubContent from 'features/subcontent/ui'

const routes = [
  {
    path: '/',
    exact: true,
    component: Auth,
  },
  {
    path: '/content',
    component: Content,
    routes: [
      {
        path: '/content/sub',
        component: SubContent,
      },
    ],
  },
]

export default routes
