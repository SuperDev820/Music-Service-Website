<script>
	import Layout from "./subcomponent/layout";
	import appConfig from "@/app.config";
  import PageHeader from "@/components/page-header";

  import { mapActions, mapGetters } from 'vuex';

	export default {
		page: {
        title: "Users",
        meta: [{ name: "description", content: appConfig.description }]
    },
    components: {
      Layout,
      PageHeader
    },
    data() {
      return {
        title: "Users",
        items: [
          {
            text: "AudioTriki",
            href: "/"
          },
          {
            text: "Users",
            active: true
          }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [10, 25, 50, 100],
        filter: null,
        filterOn: [],
        sortBy: "name",
        sortDesc: false,
        fields: [
          { key: "name", sortable: true },
          { key: "email", sortable: false },
          { key: "created_at", sortable: true },
          { key: "actions", sortable: false }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'getUsers'
      ]),
      /**
       * Total no. of records
       */
      rows() {
        return this.getUsers.length;
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.getUsers.length;
      this.initUsers();
    },
    methods: {
      ...mapActions([
        'initUsers',
        'deleteUser',
      ]),
      /**
       * Search the table data with search input
       */
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      }
    }
	};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items">
      <div class="float-right">
        <router-link to="/admin/user/create"
          class="btn btn-info btn-block d-inline-block"
        >
          <i class="fas fa-plus mr-1"></i> ADD USER
        </router-link>
      </div>
    </PageHeader>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">User Table</h4>
            <p class="card-title-desc"></p>
            <div class="row mb-md-2">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                :items="getUsers"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template #cell(actions)="row">
                  <router-link :to="{ name: 'UserEdit', params: { userId: row.item.id }}" class="btn btn-sm btn-secondary mr-2">
                    <i class="far fa-edit"></i>
                  </router-link>
                  <b-button size="sm" @click="deleteUser(row.item.id)">
                    <i class="fas fa-trash"></i>
                  </b-button>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>