<script>
    import Layout from "./subcomponent/layout";
    import appConfig from "@/app.config";
    
    import Chart from "@/components/widgets/chart";
    import Stat from "@/components/widgets/widget-stat";
    import Transaction from "@/components/widgets/transaction";
    import Chat from "@/components/widgets/chat";
    import Activity from "@/components/widgets/activity";
    
    export default {
      page: {
        title: "TutorialDashboard",
        meta: [{ name: "description", content: appConfig.description }]
      },
      components: {
        Layout,
        Chart,
        Stat,
        Transaction,
        Chat,
        Activity
      },
      data() {
        return {
        };
      }
    };
    </script>
    
    <template>
      <Layout>
        
      </Layout>
    </template>