<script>
import Layout from "./subcomponent/layout";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { userData } from "./data";

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
    title: "EDIT USER",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "EDIT USER",
      items: [
        {
          text: "AudioTriki",
          href: "/"
        },
        {
          text: "User",
          href: "/admin/users"
        },
        {
          text: "Edit",
          active: true
        }
      ],
      typeform: {
        name: userData[0].name,
        password: "",
        confirmPassword: "",
        email: userData[0].email,
      },
      typesubmit: false,
    };
  },
  validations: {
    typeform: {
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
      email: { required, email },
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
            <form action="#" @submit.prevent="typeForm">
              <div class="form-group">
                <label>Name</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="name"
                  :class="{ 'is-invalid': typesubmit && $v.typeform.name.$error }"
                />
                <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.name.required">This value is required.</span>
                </div>
              </div>

              <div class="form-group">
                <label>E-Mail</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.email.$error }"
                    placeholder="Enter a valid email"
                  />
                  <div v-if="typesubmit && $v.typeform.email.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.email.required">This value is required.</span>
                    <span v-if="!$v.typeform.email.email">This value should be a valid email.</span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Password</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.password.$error }"
                    placeholder="Password"
                  />
                  <div v-if="typesubmit && $v.typeform.password.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.password.required">This value is required.</span>
                    <span
                      v-if="!$v.typeform.password.minLength"
                    >Password must be at least 6 characters.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <div>
                  <input
                    v-model="typeform.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.confirmPassword.$error }"
                    placeholder="Confirm Password"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.confirmPassword.required">This value is required.</span>
                    <span
                      v-else-if="!$v.typeform.confirmPassword.sameAsPassword"
                    >This value should be the same.</span>
                  </div>
                </div>
              </div>
              
              <div class="form-group mt-5 mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Save</button>
                  <router-link to="/admin/users" class="btn btn-secondary m-l-5 ml-1">Cancel</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>