<script>
import vue2Dropzone from "vue2-dropzone";

import Layout from "./subcomponent/layout";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { courseData } from "./data";

import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum
} from "vuelidate/lib/validators";

export default {
  page: {
    title: "EDIT COURSE",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader },
  data() {
    return {
      title: "EDIT COURSE",
      items: [
        {
          text: "AudioTriki",
          href: "/"
        },
        {
          text: "Course",
          href: "/admin/courses"
        },
        {
          text: "Edit",
          active: true
        }
      ],
      typeform: {
        title: courseData[0].title,
        tutor: "",
        description: courseData[0].detail,
        category: courseData[0].category,
        genre: courseData[0].genre,
      },
      typesubmit: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 100,
        addRemoveLinks: true,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
  validations: {
    typeform: {
      title: { required },
      tutor: { required },
      description: { required, minLength: minLength(20) },
    }
  },
  methods: {
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.$v.$touch();
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <b-embed
              type="iframe"
              aspect="21by9"
              class="embed-responsive-item"
              src="/video/1.mp4"
            ></b-embed>
            <form action="#" @submit.prevent="typeForm">
              <div class="form-group mt-3">
                <label>Title</label>
                <input
                  v-model="typeform.title"
                  type="text"
                  class="form-control"
                  placeholder="Course Title"
                  name="title"
                  :class="{ 'is-invalid': typesubmit && $v.typeform.title.$error }"
                />
                <div v-if="typesubmit && $v.typeform.title.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.title.required">This value is required.</span>
                </div>
              </div>

              <div class="form-group">
                <label>Category</label>
                <div>
                  <select class="custom-select" v-model="typeform.category">
                    <option value="0" hidden>Open this select menu</option>
                    <option value="HOW TO USE">HOW TO USE</option>
                    <option value="HOW TO MAKE">HOW TO MAKE</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Genre</label>
                <div>
                  <select class="custom-select" v-model="typeform.genre">
                    <option value="0" hidden>Open this select menu</option>
                    <option value="DEEP HOUSE">DEEP HOUSE</option>
                    <option value="DEEP TECH HOUSE">DEEP TECH HOUSE</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label>Tutor</label>
                <input
                  v-model="typeform.tutor"
                  type="text"
                  class="form-control"
                  placeholder="Course Tutor"
                  name="tutor"
                  :class="{ 'is-invalid': typesubmit && $v.typeform.tutor.$error }"
                />
                <div v-if="typesubmit && $v.typeform.tutor.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.tutor.required">This value is required.</span>
                </div>
              </div>

              <div class="form-group">
                <label>Description</label>
                <div>
                  <textarea
                    v-model="typeform.description"
                    class="form-control"
                    name="description"
                    :style="{ 'min-height': '100px' }"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.description.$error }"
                  ></textarea>
                  <div v-if="typesubmit && $v.typeform.description.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.description.required">This value is required.</span>
                    <span
                      v-if="!$v.typeform.description.minLength"
                    >This value is too short. It should have 20 characters or more.</span>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <!-- file upload -->
                <vue-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"></vue-dropzone>
              </div>
              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Save</button>
                  <router-link to="/admin/courses" class="btn btn-secondary m-l-5 ml-1">Cancel</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>