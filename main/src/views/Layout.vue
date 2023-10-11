<template>
  <Sidebar />
  <v-main>
    <router-view></router-view>
      <div>
          <h2>Departments:</h2>
          <Department v-for="department in filteredDepartments" :key="department.name" :department="department"/>
      </div>
  </v-main>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Department from "../components/Department.vue";
import { useDepartmentStore } from "@/stores/DepartmentStore";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Department,
  },
  computed: {
        departmentStore() {
            // Access your Pinia store in the computed property
            return useDepartmentStore();
        },
      filteredDepartments() {
          // Filter the departments with parentId equal to null
          return this.departmentStore.departments.filter((department) => department.parentId === null);
      },
  }
};
</script>
