<template>
  <v-list density="compact" nav>
    <v-list-item v-if="hasChildren" @click.stop="toggleChildren()">
      <v-icon
        size="medium"
        color="blue-darken-2"
        :icon="showChildren ? 'mdi-folder-open' : 'mdi-folder'"
        class="text-center"
      ></v-icon>
      {{ department.name }}
      <Department
        v-if="showChildren"
        v-for="subDepartment in getChildDepartments"
        :key="subDepartment.id"
        :department="subDepartment"
      />
    </v-list-item>
    <v-list-item v-else>
      <v-icon
        size="medium"
        color="grey-darken-2"
        icon="mdi-open-in-app"
        class="text-center mx-1"
      ></v-icon>
      <router-link :to="`/department/id`">{{ department.name }}</router-link>
    </v-list-item>
  </v-list>
</template>

<script>
import { useDepartmentStore } from "@/stores/DepartmentStore.js";

export default {
  name: "Department",
  props: {
    department: Object,
    // showChildren: Boolean,
  },
  data() {
    return {
      // showChildren: false, // Initialize showChildren for each department
    };
  },
  computed: {
    hasChildren() {
      return this.getChildDepartments.length > 0;
    },
    getChildDepartments() {
      const departmentStore = useDepartmentStore();
      return departmentStore.departments.filter(
        (dept) => dept.parentId === this.department.id
      );
    },
    showChildren() {
      return useDepartmentStore().getShowChildren(this.department.id);
      // get() {
      //     // Retrieve the 'showChildren' state from the store's showChildrenMap
      //     return useDepartmentStore().showChildrenMap.get(this.department.id) || false;
      // },
      // set(value) {
      //     // Update the 'showChildren' state in the store's showChildrenMap
      //     useDepartmentStore().showChildrenMap.set(this.department.idx`, value);
      // },
    },
  },
  methods: {
    toggleChildren() {
      useDepartmentStore().toggleShowChildren(this.department.id);
      // if (this.hasChildren) {
      //     this.showChildren = !this.showChildren;
      //     // this.$emit('toggle');
      // }
    },
  },
};
</script>
