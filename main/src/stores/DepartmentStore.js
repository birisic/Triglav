import { defineStore } from "pinia";
import departments from "../data/departments.json";
import noteData from "../data/noteData.json";
import department from "@/components/Department.vue";

export const useDepartmentStore = defineStore("DepartmentStore", {
  //state - data
  state: () => {
    return {
      departments,
      noteData,
      showChildrenMap: new Map(),
      activeDepartment: null,
      loginStatus: false,
    };
  },
  //getters - computed properties
  getters: {
    getShowChildren: (state) => (departmentId) => {
      return state.showChildrenMap.get(departmentId);
    },

    getNoteData: (state) => (noteId) => {
      return state.noteData.filter((note) => note.id === parseInt(noteId));
    },

    getDepartmentPosts: (state) => (postIds) => {
      return state.noteData.filter((note) => postIds.includes(note.id));
    },

    getActiveDepartment: (state) => () => {
      return state.activeDepartment;
    },

    getLoginStatus: (state) => (userStatus) => {
      console.log(userStatus);
      return (state.loginStatus = userStatus);
    },
  },
  //actions - methods
  actions: {
    toggleShowChildren(departmentId) {
      const currentValue = this.showChildrenMap.get(departmentId);
      this.showChildrenMap.set(departmentId, !currentValue);
    },
    setActiveDepartment(departmentId) {
      this.activeDepartment = this.departments.find(
        (dept) => departmentId === dept.id
      );
    },
    addNote(newNote) {
      this.noteData.unshift(newNote);
    },
    updateNoteData(updatedNote) {
      const updatedNoteId = updatedNote.id;
      const indexToUpdate = this.noteData.findIndex(
        (note) => note.id === updatedNoteId
      );

      if (indexToUpdate !== -1) {
        // If a note with the same ID is found, update it with the provided data
        this.noteData[indexToUpdate] = updatedNote;
      }
    },
  },
});
