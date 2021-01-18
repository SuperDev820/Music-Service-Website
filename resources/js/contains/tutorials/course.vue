<script>
    import Layout from "./subcomponent/layout";
    import appConfig from "@/app.config";
    
    
    export default {
      page: {
        title: "TutoiralCourse",
        meta: [{ name: "description", content: appConfig.description }]
      },
      components: {
        Layout,
      },
      data() {
        return {
        };
      },
      mounted() {
          console.log(this.$route.params.title);
      }
    };
    </script>
    
    <template>
      <Layout>
        
      </Layout>
    </template>