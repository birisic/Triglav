<template>
    <v-list>
<!--        <v-list-item>{{ department.name }}</v-list-item>-->
        <v-list-item v-if="hasChildren">
            {{ department.name }}
            <Department
                v-for="subDepartment in getChildDepartments"
                :key="subDepartment.id"
                :department="subDepartment"
            />
        </v-list-item>
        <v-list-item v-else>
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
    },
    computed: {
        hasChildren() {
            return this.getChildDepartments.length > 0;
        },
        hasParent() {
            return this.department.parentId !== null;
        },
        getChildDepartments() {
            const departmentStore = useDepartmentStore();
            return departmentStore.departments.filter(dept => dept.parentId === this.department.id);
        },
    },
};
</script>
