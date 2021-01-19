<script>
export default {
    props: ['image', 'category', 'title', 'link'],
    data() {
        return {
            title_link: ""
        };
    },
    mounted() {
        if(this.link != undefined)
            this.title_link = "/tutorials/" + this.link;
        else
            this.title_link = "/tutorials";
    }
}
</script>
<template>
    <router-link tag="a" :to="title_link" class="course">
        <div>
            <b-img :src="image" fluid class="course-image"></b-img>
            <div class="d-flex justify-content-between align-items-center category">
                <div class="category-name" onselectstart="return false;">{{category}}</div>
                <i class="ion ion-md-add-circle-outline" style="font-size: 24px;"></i>
            </div>
            <div class="title" onselectstart="return false;">{{title}}</div>
        </div>
    </router-link>
</template>
<style>
.title{
    color: white;
    font-size: 18px;
}
.course{
    cursor: pointer;
}
.course-image{
    padding-top: 30px;
    pointer-events: none;
}
.category{
    color: #86878e;
    padding: 10px 15px;
}
.category-name{
    border-left: solid #52ec52 3px;
    padding-left: 10px;
}
</style>