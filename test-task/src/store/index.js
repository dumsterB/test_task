import {defineStore} from "pinia";

export const useIndexStore = defineStore({
        id: "indexStore",
        state: () => ({
           checkboxes_data:[{id:1, isOpen:false, active:false,name:'Item 1',  data:[{name:'Item 1',active:false,count:2,id:1,color:'#000000'},{name:'Item 2',count:2,id:2,color:'#034000'},{name:'Item 2',count:3,id:2,active: false,color:'#222000'},{name:'Item 2',active:false,count:3,id:3,color:'#034340'}]},{id:1,active:false, name:'Item 2',  data:[{name:'Item 1',isOpen:false, active:false,count:'',id:2,color:'#000000'},{name:'Item 2',count:5,id:2,color:'#034000'},{name:'Item 2',count:4,id:2,active: false,color:'#222000'},{name:'Item 2',active:false,count:2,id:3,color:'#034340'}]},{id:3, isOpen:false, active:false,name:'Item 3',  data:[{name:'Item 1',active:false,count:1,id:1,color:'#000000'},{name:'Item 2',count:6,id:2,color:'#034000'},{name:'Item 2',count:2,id:2,active: false,color:'#222000'},{name:'Item 2',active:false,count:4,id:3,color:'#034340'}]}]
        }),
    getters: {
        checkboxes_data_list: (state) => state.checkboxes_data,
        theme_mode: (state) => state.theme
    },

    actions: {
        setTheme(payload) {
    localStorage.setItem('theme', payload)
    /*    useToggle(payload)*/
}
},
})