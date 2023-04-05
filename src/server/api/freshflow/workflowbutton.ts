export default defineEventHandler((event) => {
    console.log("🦋 Call => /api/freshfllow/workflow-button")
    // console.log("🦋 event: ", event);
    // const config = useRuntimeConfig();
    // const body = await readBody(event);

    // console.log("🦋 config: ", config);
    // console.log("🦋 body: ", body);

// FRESHFLOW_BASE_URL
// https://smartsbaweb/freshflow/rest/flow/list/button/product=SBA_CASH&taskname=REQCMDEPOSIT
// smartsbaweb/freshflow/rest/flow/list/role/product=SBA_CASH&taskname=REQCMDEPOSIT&userid=ncit

    // const result = await fetch(`${config.apiUtil}/inqsbconfig/collect`, body)

    // const result: Response = await fetch(`https://10.22.26.75/freshflow/rest/flow/list/button/product=SBA_CASH&taskname=REQCMDEPOSIT`)

    // const mountains = await $fetch(`${config.apiUtil}`)
    // console.log("🦋 result: ", result);
    // return mountains;
    // return 'yahoo';
    return {
        "time_request": "2023-03-24 08:03:06",
        "time_response": "2023-03-24 08:03:06",
        "result_desc": "",
        "count": "2",
        "result_code": "",
        "result_list": [
            {
                "step": "000",
                "taskdesc": "REQCMDEPOSIT",
                "actionname": "Save Draft",
                "action": "11",
                "position": "left",
                "taskid": 15,
                "idname": "saveButton",
                "companyid": "STANDARD",
                "colorclass": "btn-green",
                "priority": 2,
                "taskname": "REQCMDEPOSIT",
                "product": "SBA_CASH",
                "actiontype": "0",
                "iconclass": "glyphicon glyphicon-floppy-disk",
                "nextstep": "010"
            },
            {
                "step": "000",
                "taskdesc": "REQCMDEPOSIT",
                "actionname": "Submit",
                "action": "20",
                "position": "right",
                "taskid": 15,
                "idname": "sendToApproveButton",
                "companyid": "STANDARD",
                "colorclass": "btn-green",
                "priority": 2,
                "taskname": "REQCMDEPOSIT",
                "product": "SBA_CASH",
                "actiontype": "S",
                "iconclass": "glyphicon glyphicon-send",
                "nextstep": "100"
            }
        ]
    }
})


// String baseUrl = (String)GlobalVariable.getVariable("FRESHFLOW_BASE_URL");
// 	String basepath = "/rest/flow/list/button/product=" + product + "&taskname=" + taskname;
// 	if (!"".equals(fsSBRE039Bean.getString("applicationid"))) {
// 		basepath = "/rest/app/" + fsSBRE039Bean.getString("applicationid") + "/list/button";
// 	}
// FRESHFLOW_BASE_URL