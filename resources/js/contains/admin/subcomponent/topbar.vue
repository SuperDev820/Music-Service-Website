<script>

/**
 * Topbar component
 */
export default {
  data() {
    return {};
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
};
</script>
<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link tag="a" to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="60" width="130" />
            </span>
          </router-link>

          <router-link tag="a" to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="60" width="130" />
            </span>
          </router-link>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item"
          id="vertical-menu-btn"
          @click="toggleMenu()"
        >
          <i class="mdi mdi-menu"></i>
        </button>
      </div>

      <div class="d-flex">

        <div class="dropdown d-none d-lg-inline-block">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="mdi mdi-fullscreen"></i>
          </button>
        </div>

        <b-dropdown class="d-inline-block" right toggle-class="header-item" variant="white">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/user-4.jpg"
              alt="Header Avatar"
            />
          </template>
          <router-link class="dropdown-item" to="#">
            <i class="mdi mdi-account-circle font-size-17 align-middle mr-1"></i> Profile
          </router-link>
          <router-link class="dropdown-item" to="#">
            <i class="mdi mdi-wallet font-size-17 align-middle mr-1"></i> My Wallet
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item text-danger" to="/logout">
            <i class="bx bx-power-off font-size-17 align-middle mr-1 text-danger"></i> Logout
          </router-link>
        </b-dropdown>

      </div>
    </div>
  </header>
</template>
