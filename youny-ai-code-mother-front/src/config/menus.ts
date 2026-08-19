import type { Component } from 'vue'
import {
  HomeOutlined,
  AppstoreOutlined,
  FireOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'

export interface MenuItemConfig {
  key: string
  label: string
  path: string
  title?: string
  icon?: Component
}

const menus: MenuItemConfig[] = [
  {
    key: 'home',
    label: '主页',
    path: '/',
    title: '主页',
    icon: HomeOutlined,
  },
  {
    key: 'apps',
    label: '应用大厅',
    path: '/apps',
    title: '应用大厅',
    icon: AppstoreOutlined,
  },
  {
    key: 'trending',
    label: '热门',
    path: '/trending',
    title: '热门',
    icon: FireOutlined,
  },
  {
    key: 'mine',
    label: '我的',
    path: '/mine',
    title: '我的',
    icon: SettingOutlined,
  },
]

export default menus
