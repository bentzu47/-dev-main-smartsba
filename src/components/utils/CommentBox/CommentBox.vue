<template>
    <div :id="`${id}-box`" :class="`accordion ${className}`">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`${id}-heading`">
                <button :class="`accordion-button ${isEdit ? '' : 'collapsed'}`" type="button" data-mdb-toggle="collapse"
                    :data-mdb-target="`#${id}-body`" :aria-expanded="isEdit" :aria-controls="`${id}-body`">
                    <span class="material-icons-round me-2">comment</span>
                    ระบุข้อคิดเห็น / Write a comment
                </button>
            </h2>
            <BodyContent :content="props"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface CommentBoxProps {
    id?: string,
    name?: string,
    className?: string;
    isEdit?: boolean
}
const props = withDefaults(defineProps<CommentBoxProps>(), {
    id: "comment",
    name: "comment",
    className: "",
    isEdit: false
});
</script>
<script lang="ts">
import BodyContent from "./CommentBoxBody.vue";
export default {
  components: {
    BodyContent
  },
};
</script>

<style lang="scss" scoped>
/* chevron_left */
.accordion-button {
    background: #f2f5f7;
    background-image: linear-gradient(35deg,transparent 50%,hsl(180deg 31% 60% / 15%));
    padding: .75em 2em .75em 1.25em;
    color: #4ab2bf;
    &.collapsed{
        color: #375777 !important;
    }
}
</style>