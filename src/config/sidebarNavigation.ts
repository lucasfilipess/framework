import {
  PhotographIcon,
  HomeIcon,
  ClipboardListIcon
} from '@heroicons/react/outline'

const sidebarNavigation = [
  { name: 'Postagens', to: '/postagens', icon: HomeIcon },
  { name: 'Álbuns', to: '/albuns', icon: PhotographIcon },
  { name: 'To Do', to: '/to-dos', icon: ClipboardListIcon }
]

export default sidebarNavigation
