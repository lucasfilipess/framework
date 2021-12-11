import {
  PhotographIcon,
  HomeIcon,
  ClipboardListIcon
} from '@heroicons/react/outline'

const sidebarNavigation = [
  { name: 'Postagens', to: '/', icon: HomeIcon },
  { name: 'Álbuns', to: '/albuns', icon: PhotographIcon },
  { name: 'To-Do', to: '/to-do', icon: ClipboardListIcon }
]

export default sidebarNavigation
