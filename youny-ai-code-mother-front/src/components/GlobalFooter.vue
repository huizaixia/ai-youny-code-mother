<script setup lang="ts"></script>

<template>
  <a-layout-footer class="global-footer">
    <div class="footer-content">
      编程导航原创项目 by
      <a
        href="https://www.codefather.cn"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        程序员鱼皮
      </a>
    </div>
  </a-layout-footer>
</template>

<style scoped>
.global-footer {
  text-align: center;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  padding: 16px 24px;
}

.footer-content {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.link {
  margin-left: 4px;
  color: #1677ff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
