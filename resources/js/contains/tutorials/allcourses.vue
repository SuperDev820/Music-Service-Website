<script>
import Layout from "./subcomponent/layout";
import appConfig from "@/app.config";

// import Chart from "@/components/widgets/chart";
// import Stat from "@/components/widgets/widget-stat";
// import Transaction from "@/components/widgets/transaction";
// import Chat from "@/components/widgets/chat";
// import Activity from "@/components/widgets/activity";
import CourseItem from '@/components/course-item';

export default {
  page: {
    title: "TutoiralAllCourses",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
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
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="(number, index) in courses" :key="index">
        <CourseItem 
          image="/upload/image/1.png"
          category="HOW TO USE"
          title="Novation AFX Station Review With King Unique"
          link="novation-afx-station-review-with-king-unique"
        >
        </CourseItem>
      </div>
    </div>
  </Layout>
</template>