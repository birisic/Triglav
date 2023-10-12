import { defineStore } from "pinia";
import departments from "../data/departments.json";
import noteData from "../data/noteData.json";

export const useDepartmentStore = defineStore("DepartmentStore", {
  //state - data
  state: () => {
    return {
      departments,
      noteData,
      showChildrenMap: new Map(),
    };
  },
  //getters - computed properties
  getters: {
    getShowChildren: (state) => (departmentId) => {
      return state.showChildrenMap.get(departmentId);
    },

    getNoteData: (state) => (noteId) => {
      console.log(noteId);
      return state.noteData.get(noteId);
    },
  },
  //actions - methods
  actions: {
    toggleShowChildren(departmentId) {
      const currentValue = this.showChildrenMap.get(departmentId);
      this.showChildrenMap.set(departmentId, !currentValue);
    },
  },
});
