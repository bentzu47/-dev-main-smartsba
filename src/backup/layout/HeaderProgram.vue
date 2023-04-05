<template>
  <div class="d-flex justify-content-between">
    <label class="head-title h6 mb-0" >
      <!-- <span v-if="props.head"><slot name="title"> Title </slot></span> -->
      <span v-if="props.title">{{ props.title }}</span>
      <span v-if="props.subtitle">{{ props.subtitle }}</span>
    </label>
    <div class="dropdown">
      <button
        id="aboutProgramMenu"
        type="button"
        class="btn btn-floating text-white shadow-0 position-absolute"
        :data-mdb-toggle="`${props.enableAboutVersion && 'dropdown'}`"
        aria-expanded="false"
      >
        <i class="fas fa-ellipsis-v"></i>
      </button>
      <ClientOnly v-if="props.enableAboutVersion">
        <ul class="dropdown-menu" aria-labelledby="aboutProgramMenu">
          <li>
            <button
              class="dropdown-item"
              type="button"
              data-mdb-toggle="modal"
              data-mdb-target="#about-program"
              :disable="!props.enableAboutVersion"
            >
              About Version
            </button>
          </li>
          <li v-if="enableReportIssue">
            <!-- :disable="!props.enableReportIssue" -->
            <button
              class="dropdown-item"
              type="button"
            >
              Report an issue
            </button>
          </li>
        </ul>
        <UtilsAboutProgram v-if="enableAboutVersion" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Main Title"
  },
  subtitle: {
    type: String,
    required: true,
  },
  enableAboutVersion: {
    type: Boolean,
    required: true,
    default: false,
  },
  enableReportIssue: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
#aboutProgramMenu {
  top: -10px;
  right: -20px;
}

.head-title > span:nth-child(2) {
    content: '|';
    padding: 0 4px;
}
</style>
