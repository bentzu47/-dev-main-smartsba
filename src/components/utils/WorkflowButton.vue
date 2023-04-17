<template>
    <div id="workflow-button" :class="`utils-workflow-btn row ${className}`">
        <div
            v-for="(list, index) in btnPositionList"
            :key="index"
            :class="contentSizeCalculate(index, list[0].position)"
        >
            <template v-if="list.length > 0" v-for="item of list">
                <button
                    v-if="index == 0 && defaultBtn"
                    type="button"
                    :id="`${defaultBtn}`"
                    class="btn btn-grey waves-effect"
                    @click="defaultButtonFlow(defaultBtn)"
                >
                    {{ defaultBtn }}
                </button>
                <button
                    type="button"
                    :id="`${item.idname}`"
                    :class="`${item.idname} btn ${item.colorclass} waves-effect`"
                    @click="
                        emit(
                            'action-flow',
                            item.step,
                            item.action,
                            item.actiontype
                        )
                    "
                >
                    <i :class="`${item.iconclass} me-2`"></i>
                    {{ item.actionname }}
                </button>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
console.log("========== [START] WORKFLOW-BUTTON ==========");
const { $Axios } = useNuxtApp();
interface WorkflowButtonProps {
    applicationid?: string;
    className?: string;
    useBackBtn?: boolean;
    useCloseBtn?: boolean;
    useCancelBtn?: boolean;
    defaultBtn?: string | false;
}

type ResultListType = {
    position: string;
    step: string;
    actionname: string;
    action: string;
    colorclass: string;
    actiontype: string;
    iconclass: string;
    idname: string;
};

const props = withDefaults(defineProps<WorkflowButtonProps>(), {
    className: "",
    applicationid: "",
    useBackBtn: false,
    useCloseBtn: false,
    useCancelBtn: false,
    defaultBtn: false,
});


const getWorkflowButtonList = async (): Promise<void | object[]> => {
  console.log("# call | getWorkflowButtonList")
  try {
    // const request = await $Axios.post('http://localhost:5689/api/freshflow/workflow-button');
    const request = await $Axios.post('https://10.22.26.75/freshflow/rest/flow/list/button/product=SBA_CASH&taskname=REQCMDEPOSIT')
    console.log("# getWorkflowButtonList: ", request);
    console.log(request.data);

  } catch (error) {
    console.error(error);
  }
}

const result_list = await getWorkflowButtonList();
console.log("# getWorkflowButtonList | result_list: ", result_list);



const { data: response } = await useFetch("/api/freshflow/workflow-button", {
    pick: ["result_list"],
    body: {
        product: "SBA_CASH",
        taskname: "REQCMDEPOSIT",
        userid: "ncit",
    },
});


console.log("# response: ", response.value);
// const buttonFuncList:Ref<ResultListType[]> = ref([]);
// const result_list2: Array<null | ResultListType> = response.value?.result_list ?? [];
// const btnPositionList: Ref<ResultListType[]> = ref([]);



// const btnLeftCount: Ref<number> = ref(0);
// const btnCenterCount: Ref<number> = ref(0);
// const btnRightCount: Ref<number> = ref(0);
// const getButtonByPosition = (position: string): ResultListType[] => {
//     return result_list.filter((item) => position == item.position);
// };
// if (result_list.length > 0) {
//     let leftList = getButtonByPosition("left");
//     let centerList = getButtonByPosition("center");
//     let rightList = getButtonByPosition("right");
//     btnLeftCount.value = props.defaultBtn
//         ? leftList.length + 1
//         : leftList.length;
//     btnCenterCount.value = centerList.length;
//     btnRightCount.value = rightList.length;
//     if (btnLeftCount.value > 0) btnPositionList.value.push(leftList);
//     if (btnCenterCount.value > 0) btnPositionList.value.push(centerList);
//     if (btnRightCount.value > 0) btnPositionList.value.push(rightList);
// }
// const btnTotal: number = props.defaultBtn
//     ? result_list.length + 1
//     : result_list.length;
// const btnRatio:any = {
//     left: (btnLeftCount.value * 100) / btnTotal,
//     center: (btnCenterCount.value * 100) / btnTotal,
//     right: (btnRightCount.value * 100) / btnTotal,
// };
// const fsAccessor = {
//     sbse003_product: "sbse003",
//     sbse003_taskname: "sbse003",
//     getFsVar: (name: string): string => {
//         const str: string = name;
//         return str;
//     },
// };
// const product: string = fsAccessor.getFsVar("sbse003_product");
// const taskname: string = fsAccessor.getFsVar("sbse003_taskname");
// const GlobalVariable = useRuntimeConfig();
// const baseUrl: string = GlobalVariable.FRESHFLOW_BASE_URL;
// try {
//     console.log("# baseUrl: " + baseUrl);
//     const basepath: Ref<string> = ref(
//         "/rest/flow/list/button/product=" + product + "&taskname=" + taskname
//     );
//     if ("" != props.applicationid) {
//         basepath.value = "/rest/app/" + props.applicationid + "/list/button";
//     }
// } catch (e) {
//     console.error(e);
// }

// const contentSizeCalculate = (current: number, position: string): string => {
//     let ratio: number = btnRatio[position];
//     let classes = "";
//     if (ratio > 0 && ratio < 20) {
//         classes = "col-md-2";
//     } else if (ratio < 40) {
//         classes = "col-md-4";
//     } else if (ratio < 60) {
//         classes = "col-md-6";
//     } else if (ratio < 80) {
//         classes = "col-md-8";
//     } else if (ratio < 100) {
//         classes = "col-md-10";
//     } else if (ratio == 100) {
//         classes = "col-md-12";
//     }
//     return "left" != position ? "text-" + position + " " + classes : classes;
// };

// const defaultButtonFlow = (btn:string|boolean): void => {
//     console.log(`# default '${btn}' ButtonFlow!!`);
// };

// const emit = defineEmits<{
//   (e: 'action-flow', step: string, action: string, actiontype: string): void
// }>()

console.log("========== [END] WORKFLOW-BUTTON ==========");
</script>
