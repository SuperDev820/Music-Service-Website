<script>
import Layout from "./subcomponent/layout";
import appConfig from "@/app.config";

import Chart from "@/components/widgets/chart";
import Stat from "@/components/widgets/widget-stat";
import Transaction from "@/components/widgets/transaction";
import Chat from "@/components/widgets/chat";
import Activity from "@/components/widgets/activity";
import CourseItem from '@/components/course-item';

export default {
  page: {
    title: "TutoiralAllCourses",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    Chart,
    Stat,
    Transaction,
    Chat,
    Activity,
    CourseItem
  },
  data() {
    return {
      courses : [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-lg-3" v-for="(number, index) in courses" :key="index">
        <CourseItem 
          image="/upload/image/1.png"
        >
        </CourseItem>
      </div>
    </div>
  </Layout>
</template>