<script>
export default {
  props: {
    title1: String,
    title2: String,
  },

  data () {
    return {
      activeTab: "tab1", // set the default active tab
    };
  },
};
</script>

<template>
  <div class="tabs">
    <div class="tab-controls">
      <div
        class="tab"
        :class="{ active: activeTab === 'tab1' }"
        @click="activeTab = 'tab1'"
      >
        {{ title1 }}
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'tab2' }"
        @click="activeTab = 'tab2'"
      >
        {{ title2 }}
      </div>
    </div>
    <div v-if="activeTab === 'tab1'" class="tab-content">
      <slot name="tab1"></slot>
    </div>
    <div v-if="activeTab === 'tab2'" class="tab-content">
      <slot name="tab2"></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  width: 100%;
  .tab-controls {
    display: flex;
  }
}
.tab {
  width: 50%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  font-size: 0.75rem;
}
.tab.active {
  border-bottom: 2px solid #7572ff;
}
.tab-content {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 1px solid #ccc; */
}
</style>
