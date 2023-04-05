<template>
    <div :id="`${id}-box`" :class="`accordion ${className}`">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`${id}-heading`">
                <button :class="`accordion-button ${isEdit ? '' : 'collapsed'}`" type="button" data-mdb-toggle="collapse"
                    :data-mdb-target="`#${id}-body`" :aria-expanded="isEdit" :aria-controls="`${id}-body`">
                    <i class="fa-solid fa-comment-dots fa-lg me-2"></i>
                    ระบุข้อคิดเห็น / Write a comment
                </button>
            </h2>
            <BodyContent />
        </div>
    </div>
</template>

<script lang="ts" setup>
const isEdit = ref(false);

interface WorkflowButtonProps {
    id: string,
    name: string,
    className?: string;

    useBackBtn?: boolean;
    useCloseBtn?: boolean;
    useCancelBtn?: boolean;
    defaultBtn?: string | false;
}

type ResultListType = {
    id: string;
    name: string;
    className: string;
};

const props = withDefaults(defineProps<WorkflowButtonProps>(), {
    id: "commentBox",
    name: "comment",
    className: "",
    
    isEdit: false,
    useCloseBtn: false,
    useCancelBtn: false,
    defaultBtn: false,
});
</script>
<script lang="ts">
import BodyContent from "./Body.vue";
export default {
  components: {
    BodyContent
  },
};
</script>

<style scoped>
textarea {
    min-height: 86.58px !important;
}
.div-circle {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    min-width: 50px;
    min-height: 50px;
    background-color: #d8d8d8;
    background-image: linear-gradient(141deg, #c5dcd2 0, #ececec 51%, #e1e4e3 75%);
    box-shadow: 1px 0 7px -2px #565656;
    display: flex;
    transition: .3s;
}

.accordion-button {
    background: #f2f5f7;
    background-image: linear-gradient(35deg,transparent 50%,hsl(180deg 31% 60% / 15%));
    padding: .75em 2em .75em 1.25em;
    color: #5a738e;
}
</style>