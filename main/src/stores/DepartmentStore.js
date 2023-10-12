import { defineStore } from "pinia"
import departments from "../data/departments.json"

export const useDepartmentStore = defineStore("DepartmentStore", {
    //state - data
    state: () => {
        return {
            departments,
            showChildrenMap: new Map(),
        }
    },
    //getters - computed properties
    getters: {
        getShowChildren: (state) => (departmentId) => {
            return state.showChildrenMap.get(departmentId);
        }
    },
    //actions - methods
    actions: {
        toggleShowChildren(departmentId) {
            const currentValue = this.showChildrenMap.get(departmentId);
            this.showChildrenMap.set(departmentId, !currentValue);
        }
    }
})