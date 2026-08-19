<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { logoPath, siteTitle } from '@/config/site'
import menus, { type MenuItemConfig } from '@/config/menus'

const router = useRouter()
const loggedIn = ref(false)

// 当前选中菜单：以路由 path 匹配
const selectedKeys = computed(() => {
  const path = router.currentRoute.value.path
  const matched = menus.find((m) => path === m.path || path.startsWith(m.path + '/'))
  return [matched ? matched.key : 'home']
})

const handleMenuClick = ({ key }: { key: string }) => {
  const target = menus.find((m: MenuItemConfig) => m.key === key)
  if (target && target.path !== router.currentRoute.value.path) {
    router.push(target.path)
  }
}

const handleLogin = () => {
  loggedIn.value = true
}
</script>

<template>
  <a-layout-header class="global-header">
    <div class="header-left">
      <router-link to="/" class="logo-area">
        <img :src="logoPath" alt="logo" class="logo" />
        <span class="title">{{ siteTitle }}</span>
      </router-link>
    </div>

    <a-menu
      mode="horizontal"
      :selected-keys="selectedKeys"
      class="header-menu"
      @click="handleMenuClick"
    >
      <a-menu-item v-for="menu in menus" :key="menu.key">
        <template v-if="menu.icon" #icon>
          <component :is="menu.icon" />
        </template>
        <span>{{ menu.label }}</span>
      </a-menu-item>
    </a-menu>

    <div class="header-right">
      <template v-if="loggedIn">
        <a-space>
          <a-avatar :size="36" style="background-color: #1677ff">U</a-avatar>
          <span class="username">用户昵称</span>
        </a-space>
      </template>
      <template v-else>
        <a-button type="primary" @click="handleLogin">登录</a-button>
      </template>
    </div>
  </a-layout-header>
</template>

<style scoped>
.global-header {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-left {
  flex-shrink: 0;
}

.logo-area {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  width: 36px;
  height: 36px;
  margin-right: 12px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #1f1f1f;
  white-space: nowrap;
}

.header-menu {
  flex: 1;
  min-width: 0;
  border-bottom: none;
  line-height: 62px;
}

.header-right {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.username {
  font-size: 14px;
  color: #1f1f1f;
}

/* 响应式：窄屏隐藏菜单文字，保留登录/头像 */
@media (max-width: 768px) {
  .global-header {
    padding: 0 12px;
  }

  .title {
    display: none;
  }

  .header-menu {
    display: none;
  }
}
</style>
