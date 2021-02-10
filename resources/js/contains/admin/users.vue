<script>
	import Layout from "./subcomponent/layout";
	import appConfig from "@/app.config";

	export default {
		page: {
            title: "Users",
            meta: [{ name: "description", content: appConfig.description }]
        },
        components: {
            Layout,
        },
        data() {
            return {
                
            }
        }
	}
</script>