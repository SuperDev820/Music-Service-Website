<script>
/**
 * Right sidebar component
 */
export default {
  components: {},
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },

  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    }
  }
};
</script>

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title px-3 py-4">
          <a href="javascript:void(0);" class="right-bar-toggle float-right" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>

        <!-- Settings -->
        <hr class="mt-0" />
        <h6 class="text-center">Choose Layouts</h6>

        <div class="p-4">
          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//veltrix.vuejs-light.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//veltrix.vuejs-dark.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//veltrix.vuejs-rtl.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <a
            href="https://1.envato.market/grNDB"
            class="btn btn-primary btn-block mt-3"
            target="_blank"
          >
            <i class="mdi mdi-cart mr-1"></i> Purchase Now
          </a>
        </div>
      </div>
      <!-- end scroll-->
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style lang="scss"></style>
