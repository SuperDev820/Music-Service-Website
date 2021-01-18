<script>
import { layoutMethods } from "@/state/helpers";

/**
 * Horizontal navbar component
 */
export default {
  mounted() {
    var links = document.getElementsByClassName("side-nav-link");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
        }
        const parent3 = parent2.parentElement;
        if (parent3) {
          parent3.classList.add("active");
          var childAnchor = parent3.querySelector(".has-dropdown");
          if (childAnchor) childAnchor.classList.add("active");
        }

        const parent4 = parent3.parentElement;
        if (parent4) parent4.classList.add("active");
        const parent5 = parent4.parentElement;
        if (parent5) parent5.classList.add("active");
      }
    }
  },
  methods: {
    ...layoutMethods,

    /**
     * menu clicked show the subelement
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },
    topbarLight() {
      document.body.setAttribute("data-topbar", "light");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedWidth() {
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-topbar", "light");
      document.body.setAttribute("data-topbar", "dark");
    },
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    }
  }
};
</script>
<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link tag="a" class="nav-link side-nav-link" to="/">
                <i class="ti-home mr-2"></i>Dashboard
              </router-link>
            </li>

            <li class="nav-item dropdown mega-dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-uielement"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-package mr-2"></i>UI Elements
              </a>

              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-xl"
                aria-labelledby="topnav-uielement"
              >
                <div class="row">
                  <div class="col-lg-4">
                    <div>
                      <router-link to="/ui/alerts" class="dropdown-item side-nav-link">Alerts</router-link>
                      <router-link to="/ui/buttons" class="dropdown-item side-nav-link">Buttons</router-link>
                      <router-link to="/ui/cards" class="dropdown-item side-nav-link">Cards</router-link>
                      <router-link to="/ui/carousel" class="dropdown-item side-nav-link">Carousel</router-link>
                      <router-link to="/ui/dropdowns" class="dropdown-item side-nav-link">Dropdowns</router-link>
                      <router-link to="/ui/grid" class="dropdown-item side-nav-link">Grid</router-link>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div>
                      <router-link to="/ui/images" class="dropdown-item side-nav-link">Images</router-link>
                      <router-link to="/ui/modals" class="dropdown-item side-nav-link">Modals</router-link>
                      <router-link
                        to="/ui/rangeslider"
                        class="dropdown-item side-nav-link"
                      >Range Slider</router-link>
                      <router-link
                        to="/ui/progressbar"
                        class="dropdown-item side-nav-link"
                      >Progress Bars</router-link>
                      <router-link
                        to="/ui/sweetalert"
                        class="dropdown-item side-nav-link"
                      >Sweet-Alert</router-link>
                      <router-link
                        to="/ui/tabs"
                        class="dropdown-item side-nav-link"
                      >Tabs & Accordions</router-link>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div>
                      <router-link
                        to="/ui/typography"
                        class="dropdown-item side-nav-link"
                      >Typography</router-link>
                      <router-link to="/ui/video" class="dropdown-item side-nav-link">Video</router-link>
                      <router-link to="/ui/general" class="dropdown-item side-nav-link">General</router-link>
                      <router-link to="/ui/colors" class="dropdown-item side-nav-link">Colors</router-link>
                      <router-link to="/ui/rating" class="dropdown-item side-nav-link">Rating</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-pages"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-harddrives mr-2"></i>Components
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <div class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    id="topnav-email"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Email
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-email">
                    <router-link to="/email/inbox" class="dropdown-item side-nav-link">Inbox</router-link>
                    <router-link
                      to="/email/read-email"
                      class="dropdown-item side-nav-link"
                    >Email Read</router-link>
                    <router-link
                      to="/email/compose"
                      class="dropdown-item side-nav-link"
                    >Email Compose</router-link>
                  </div>
                </div>

                <router-link tag="a" to="/calendar" class="dropdown-item side-nav-link">Calendar</router-link>

                <div class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    id="topnav-form"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Forms
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-form">
                    <router-link
                      tag="a"
                      to="/form/elements"
                      class="dropdown-item side-nav-link"
                    >Form Elements</router-link>
                    <router-link
                      tag="a"
                      to="/form/validation"
                      class="dropdown-item side-nav-link"
                    >Form Validation</router-link>
                    <router-link
                      tag="a"
                      to="/form/advanced"
                      class="dropdown-item side-nav-link"
                    >Form Advanced</router-link>
                    <router-link
                      tag="a"
                      to="/form/editor"
                      class="dropdown-item side-nav-link"
                    >Form Editors</router-link>
                    <router-link
                      tag="a"
                      to="/form/uploads"
                      class="dropdown-item side-nav-link"
                    >Form File Upload</router-link>
                    <router-link
                      tag="a"
                      to="/form/repeater"
                      class="dropdown-item side-nav-link"
                    >Form Repeater</router-link>
                    <router-link
                      tag="a"
                      to="/form/wizard"
                      class="dropdown-item side-nav-link"
                    >Form Wizard</router-link>
                    <router-link
                      tag="a"
                      to="/form/mask"
                      class="dropdown-item side-nav-link"
                    >Form Mask</router-link>
                  </div>
                </div>

                <div class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    id="topnav-chart"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Charts
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-chart">
                    <router-link
                      tag="a"
                      to="/charts/chartist"
                      class="dropdown-item side-nav-link"
                    >Chartist Chart</router-link>
                    <router-link
                      tag="a"
                      to="/charts/chartjs"
                      class="dropdown-item side-nav-link"
                    >Chartjs Chart</router-link>
                    <router-link
                      tag="a"
                      to="/charts/apex"
                      class="dropdown-item side-nav-link"
                    >Apex Chart</router-link>
                    <router-link
                      tag="a"
                      to="/charts/echart"
                      class="dropdown-item side-nav-link"
                    >E - Chart</router-link>
                  </div>
                </div>

                <div class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    id="topnav-table"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Tables
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link
                      tag="a"
                      to="/tables/basic"
                      class="dropdown-item side-nav-link"
                    >Basic Tables</router-link>
                    <router-link
                      tag="a"
                      to="/tables/advancedtable"
                      class="dropdown-item side-nav-link"
                    >Advanced Table</router-link>
                  </div>
                </div>

                <div class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="javascript: void(0);"
                    id="topnav-contact"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    icons
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-contact">
                    <router-link
                      tag="a"
                      to="/icons/material"
                      class="dropdown-item side-nav-link"
                    >Material Design</router-link>
                    <router-link
                      tag="a"
                      to="/icons/fontawesome"
                      class="dropdown-item side-nav-link"
                    >Font Awesome</router-link>
                    <router-link
                      tag="a"
                      to="/icons/ion"
                      class="dropdown-item side-nav-link"
                    >Ion Icons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/themify"
                      class="dropdown-item side-nav-link"
                    >Themify Icons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/dripicons"
                      class="dropdown-item side-nav-link"
                    >Dripicons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/typicons"
                      class="dropdown-item side-nav-link"
                    >Typicons Icons</router-link>
                  </div>
                </div>

                <router-link
                  tag="a"
                  to="/maps/google"
                  class="dropdown-item side-nav-link"
                >Google maps</router-link>
              </div>
            </li>

            <li class="nav-item dropdown mega-dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-chart"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-archive mr-2"></i> Authentication
              </a>

              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-uielement"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/pages/login-1"
                        class="dropdown-item side-nav-link"
                      >Login 1</router-link>
                      <router-link
                        tag="a"
                        to="/pages/register-1"
                        class="dropdown-item side-nav-link"
                      >Register 1</router-link>
                      <router-link
                        tag="a"
                        to="/pages/recoverpwd-1"
                        class="dropdown-item side-nav-link"
                      >Recover Password 1</router-link>
                      <router-link
                        tag="a"
                        to="/pages/lock-screen1"
                        class="dropdown-item side-nav-link"
                      >Lock Screen 1</router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/pages/login-2"
                        class="dropdown-item side-nav-link"
                      >Login 2</router-link>
                      <router-link
                        tag="a"
                        to="/pages/register-2"
                        class="dropdown-item side-nav-link"
                      >Register 2</router-link>
                      <router-link
                        tag="a"
                        to="/pages/recoverpwd-2"
                        class="dropdown-item side-nav-link"
                      >Recover Password 2</router-link>
                      <router-link
                        tag="a"
                        to="/pages/lock-screen2"
                        class="dropdown-item side-nav-link"
                      >Lock Screen 2</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown mega-dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-chart"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-support mr-2"></i> Extra Pages
              </a>

              <div
                class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg"
                aria-labelledby="topnav-uielement"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/pages/timeline"
                        class="dropdown-item side-nav-link"
                      >Timeline</router-link>
                      <router-link
                        tag="a"
                        to="/pages/invoice"
                        class="dropdown-item side-nav-link"
                      >Invoice</router-link>
                      <router-link
                        tag="a"
                        to="/pages/directory"
                        class="dropdown-item side-nav-link"
                      >Directory</router-link>
                      <router-link
                        tag="a"
                        to="/pages/blank-page"
                        class="dropdown-item side-nav-link"
                      >Blank Page</router-link>
                      <router-link
                        tag="a"
                        to="/pages/404"
                        class="dropdown-item side-nav-link"
                      >Error 404</router-link>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <router-link
                        tag="a"
                        to="/pages/500"
                        class="dropdown-item side-nav-link"
                      >Error 500</router-link>
                      <router-link
                        tag="a"
                        to="/pages/pricing"
                        class="dropdown-item side-nav-link"
                      >Pricing</router-link>
                      <router-link
                        tag="a"
                        to="/pages/maintenance"
                        class="dropdown-item side-nav-link"
                      >Maintenance</router-link>
                      <router-link tag="a" to="/pages/faqs" class="dropdown-item side-nav-link">Faq</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-layout"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-bookmark-alt mr-2"></i>Email Templates
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-layout">
                <router-link
                  tag="a"
                  to="/email-template/basic"
                  class="dropdown-item side-nav-link"
                >Basic Action Email</router-link>
                <router-link
                  tag="a"
                  to="/email-template/alert"
                  class="dropdown-item side-nav-link"
                >Alert Email</router-link>
                <router-link
                  tag="a"
                  to="/email-template/billing"
                  class="dropdown-item side-nav-link"
                >Billing Email</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="javascript: void(0);"
                id="topnav-layout"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="ti-layout mr-2"></i> Layouts
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-layout">
                <a
                  @click="changeLayout('vertical')"
                  href="javascript: void(0);"
                  class="dropdown-item side-nav-link"
                >Vertical</a>
                <a
                  @click="topbarLight"
                  href="javascript: void(0);"
                  class="dropdown-item side-nav-link"
                >Topbar Light</a>
                <a
                  @click="boxedWidth"
                  href="javascript: void(0);"
                  class="dropdown-item side-nav-link"
                >Boxed Width</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>