<template>
  <!-- <div :id="`${id}-box`" :class="`accordion ${className}`">
    <div class="accordion-item">
      <h2 class="accordion-header" :id="`${id}-heading`">
        <button
          :class="`accordion-button ${visible ? '' : 'collapsed'}`"
          type="button"
          data-mdb-toggle="collapse"
          :data-mdb-target="`#${id}-body`"
          :aria-expanded="visible"
          :aria-controls="`${id}-body`"
        >
          <span class="material-icons-round me-2">comment</span>
          ระบุข้อคิดเห็น / Write a comment
        </button>
      </h2>
      <CommentBoxBody v-bind="$props" />
    </div>
  </div> -->

  <MDBAccordion v-model="activeItem">
    <MDBAccordionItem
      headerTitle='ระบุข้อคิดเห็น / Write a comment'
      :collapse-id="`${id}-commentbox-accordion`"
      @click.prevent
    >
    <i class="fa-solid fa-message-dots"></i>
      <CommentBoxBody v-bind="$props" />
    </MDBAccordionItem>
  </MDBAccordion>

  <!-- <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> -->
</template>

<script lang="ts" setup>
// comment
interface CommentBoxProps {
  id?: string;
  vModel: null | string;
  className?: string;
  visible?: boolean;
}
const props = withDefaults(defineProps<CommentBoxProps>(), {
    id: "comment",
    vModel: "",
    className: "",
    visible: false
});
</script>
<script lang="ts">
import CommentBoxBody from "./CommentBoxBody.vue";
import { MDBAccordion, MDBAccordionItem } from "mdb-vue-ui-kit";
  import { ref } from "vue";
  export default {
    components: {
      MDBAccordion,
      MDBAccordionItem
    },
    setup(){
      const activeItem = ref('collapseOne');

      return {
        activeItem
      }
    }
  };

onMounted(()=>{
  console.log('accordion: ', document.querySelector(".accordion-button"))
})
</script>

<style lang="scss" scoped>
:root{
  --mdb-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%234f4f4f'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --mdb-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%233b71ca'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

/* chevron_left */
.accordion-button {
  background: #f2f5f7;
  background-image: linear-gradient(35deg, transparent 50%, hsl(180deg 31% 60% / 15%));
  padding: 0.75em 2em 0.75em 1.25em;
  color: #4ab2bf;
  &.collapsed {
    color: #375777 !important;
  }
}
</style>
