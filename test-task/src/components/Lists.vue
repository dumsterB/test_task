<template>
  <div class="content-wrapper">
    <div v-html="arrow_bottom"></div>
    <div v-html="arrow_right"></div>
    <pre>{{ checkboxes_data }}</pre>
    <div class="list-checkbox">
      <div v-for="(element, index) of checkboxes_data" :key="index" class="checkbox-item">
        <label>
          <span @click="element.isOpen = !element.isOpen" v-html="element.isOpen ?  arrow_bottom : arrow_right"></span>
          <span>{{ element.name }}</span>
          <input @change="parentActiveHandler(element)" type="checkbox" v-model="element.active" class="checkbox-input" />
        </label>
        <div v-if="element.isOpen" class="list-checkbox-elements">
          <ul>
            <li v-for="(item, i) of element.data" :key="i" class="sub-checkbox-item">
              <div class="list-checkbox-elements-info">
                <label>
                  <span>{{ item.name }}</span>
                  <input   type="checkbox" @change="activeHandler(item,element)" v-model="item.active" class="sub-checkbox-input" />
                </label>
              </div>
              <div class="list-checkbox-elements-settings">
                <label>
                  <span>Count:</span>
                  <input style="width: 30px;margin-left: 5px" type="number" v-model="item.count" />
                </label>
                <label>
                  <span>Color:</span>
                  <input style="margin-left: 5px" type="color" v-model="item.color" />
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list-result">
      <div class="list-result-card" v-for="(element,index) of checkboxes_data" :key="index">
    {{element.name}}
        <div v-for="item of element.data" style="margin-top: 15px">
          <span v-if="element.active && item.active" v-for="color of item.count" style="height: 2px;width: 6px;padding: 5px;margin-left: 10px;margin-right: 10px;" :style="{background:item.color}"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIndexStore } from "../store/index.js";
import { computed } from "vue";
import {arrow_bottom,arrow_right} from "../helpers/icons.js";

const store = useIndexStore();

function activeHandler(item, parent) {
  if (parent.id) {
    if (item.active) {
      parent.active = true;
    } else {
      let isAnyChildActive = parent.data.some((child) => child.active);
      if (!isAnyChildActive) {
        parent.active = false;
      }
    }
  } else {
    item.data.forEach((child) => {
      child.active = item.active;
    });
  }
}
function parentActiveHandler(element){
  element.data.map((ell)=>ell.active = !ell.active)
}




const checkboxes_data = computed(() => {
  return store.checkboxes_data_list;
});
</script>

<style scoped>
.content-wrapper {
  display: flex;
  height: 100%;
  gap: 50px;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.list-checkbox {
  height: 600px;
  width: 500px;
  border: 1px solid gray;
  padding: 20px;
}

.checkbox-item {
  margin-bottom: 10px;
}

.checkbox-input {
  margin-left: 10px;
}

.list-result {
  height: 600px;
  width: 500px;
  border: 1px solid gray;
  padding: 20px;
}

.list-checkbox-elements {
  margin-left: 10px;
}

.sub-checkbox-item {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.sub-checkbox-input {
  margin-left: 10px;
}

.list-checkbox-elements-settings {
  margin-right: 20px;
}
.list-result-card{
  margin-top: 10px;
}
</style>
