<script>
export default {
    props: ['image'],
    data() {
        return {};
    }
}
</script>
<template>
    <b-img :src="image" fluid style="padding-top: 30px"></b-img>
</template>