<script>
import router from "@/router";

import Topbar from "./topbar";
import Sidebar from "./sidebar";
import Footer from "@/components/footer";

export default {
  components: {
    Topbar,
    Sidebar,
    Footer
  },
  created() {
    document.body.setAttribute("data-sidebar", "dark");
    document.body.removeAttribute("data-topbar", "light");
    document.body.removeAttribute("data-layout-size", "boxed");
    document.body.removeAttribute("data-layout", "horizontal");
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");
      document.body.classList.toggle("vertical-collpsed");

      if (window.screen.width <= 768) {
        document.body.classList.remove("vertical-collpsed");
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
      }
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
};
</script>

<template>
  <div id="layout-wrapper" class="admin-layout">
    <Topbar />
    <Sidebar />
    <div class="main-content">
      <div class="page-content">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style type="text/css">
  .admin-layout .page-content {
    padding: 0 24px 106px 24px !important;
  }
</style>