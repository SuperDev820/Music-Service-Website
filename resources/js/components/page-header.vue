<script>
/**
 * Page-header component
 */
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<template>
  <!-- start page title -->
  <div class="row align-items-center">
    <div class="col-sm-6">
      <div class="page-title-box">
        <h4 class="font-size-18">{{ title }}</h4>
        <div class="page-title-right">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <slot />
    </div>
  </div>
  <!-- end page title -->
</template>
