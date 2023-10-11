import { defineStore } from "pinia"
import departments from "../data/departments.json"

export const useDepartmentStore = defineStore("DepartmentStore", {
    //state - data
    state: () => {
        return {
            departments
        }
    }
    //actions - methods

    //getters - computed properties
})