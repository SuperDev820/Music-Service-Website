<script>
import Layout from "../layouts/main";
import appConfig from "@/app.config";

import Stat from "@/components/widgets/widget-stat";

import { sparklineChartData, salesDonutChart, radialBarChart } from "./data";

export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    Stat
  },
  data() {
    return {
      sparklineChartData: sparklineChartData,
      salesDonutChart: salesDonutChart,
      radialBarChart: radialBarChart,
      statData: [
        {
          title: "Orders",
          image: require("@/assets/images/services-icon/01.png"),
          value: "1,685",
          subText: "+ 12%",
          color: "success"
        },
        {
          title: "Revenue",
          image: require("@/assets/images/services-icon/02.png"),
          value: "52,368",
          subText: "- 28%",
          color: "danger"
        },
        {
          title: "Average Price",
          image: require("@/assets/images/services-icon/03.png"),
          value: "15.8",
          subText: "00%",
          color: "info"
        },
        {
          title: "Product Sold",
          image: require("@/assets/images/services-icon/04.png"),
          value: "2436",
          subText: "+ 84%",
          color: "warning"
        }
      ],
    };
  }
};
</script>

<template>
  <Layout>
    <!--header video start -->
    <div class="embed-responsive">
      <b-embed
        type="iframe"
        aspect="21by9"
        class="embed-responsive-item"
        src="/video/1.mp4?autoplay=1&loop=1"
      ></b-embed>
    </div>
    <!--header video end -->
    <div class="section text-center">
      <h1>
        Learn From
        <code class="highlighter-rouge">A-List Producers </code>
        Anytime, Anywhere
      </h1>
      <h4>
        Meet some of the industries leading
        <code class="highlighter-rouge">producers </code>
        you'll be learning from!
      </h4>
      <div class>
        <b-img :src="require('@/assets/images/gallery/home-logos.jpg')" fluid alt="logos"></b-img>
      </div>
      <b-button pill variant="primary" size="lg">Start your Free 7 Day Trial</b-button>
    </div>
    <!-- carousel start -->
    <div class="card-body">
      <h4 class="card-title">With captions</h4>
      <p class="card-title-desc">
        Add captions to your slides easily with the
        <code>.carousel-caption</code> element within any
        <code>.carousel-item</code>.
      </p>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="require('@/assets/images/small/img-5.jpg')">
          <h3 class="text-white">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="require('@/assets/images/small/img-3.jpg')">
          <h3 class="text-white">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide :img-src="require('@/assets/images/small/img-2.jpg')">
          <h3 class="text-white">Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- carousel end-->
  </Layout>
</template>