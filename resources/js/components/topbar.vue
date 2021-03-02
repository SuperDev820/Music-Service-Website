<script>

/**
 * Topbar component
 */
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
    ])
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

        <b-button class="my-3" pill variant="primary">Start your Free 7 Day Trial</b-button>
      </div>

      <div class="d-flex">
        
        <div class="dropdown d-none d-lg-inline-block">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="mdi mdi-fullscreen"></i>
          </button>
        </div>

        <a
          href="/"
          class="btn btn-info btn-block my-3 d-inline-block"
          target="_blank"
        >
          Your Basket <i class="mdi mdi-cart mr-1"></i> £0.00
        </a>

        <b-dropdown class="d-inline-block" right toggle-class="header-item" variant="white" v-if="isAuthenticated === true">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/user-4.jpg"
              alt="Header Avatar"
            />
          </template>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-account-circle font-size-17 align-middle mr-1"></i> Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="mdi mdi-wallet font-size-17 align-middle mr-1"></i> My Wallet
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="bx bx-power-off font-size-17 align-middle mr-1 text-danger"></i> Logout
          </a>
        </b-dropdown>
        <b-dropdown class="d-inline-block" right toggle-class="header-item" variant="white" v-else>
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/user-4.jpg"
              alt="Header Avatar"
            />
          </template>
          <router-link tag="a" class="dropdown-item" to="/login">
            <i class="mdi mdi-sign-direction font-size-17 align-middle mr-1"></i> Log In
          </router-link>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

