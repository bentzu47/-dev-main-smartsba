export default {
    _insert: {
        taskname: null,//Accessor: taskname
        actionmode: "I",/* Strict */
        action: "",//workflow-btn
        actiontype: "",//workflow-btn
        comment: "",//Commentbox
        applicationid: "",//ไม่ต้องส่งค่า
        refapplicationid: "",//ไม่ต้องส่งค่า
        reftype: "TC",/* Strict */
        sharecode: "",//ค่าจากฟิลด์ Symbol
        purpose: "",//ค่าจากฟิลด์ To Purpose
        /* ค่าจาก Transferee */
        custtype: "",
        custacct: "",
        custcode: "",
        account: "",
        dpaccount: "",
        title: "",
        /* ค่าจาก Transferer */
        sharecode2: "",
        purpose2: "",
        custtype2: "",
        custacct2: "",
        custcode2: "",
        account2: "",
        dpaccount2: "",
        title2: "",

        unit: "",
        avgprice: "",
        xdate: "",
        tradeflag: "",
        corptxndt: "",//Choose CA Information
        corptxntype: "",//Choose CA Information
        corptxnno: "",//Choose CA Information
        objective: "",//Objective Lookup
        remark: "",//Remark Lookup
        shortrefer: "",//ไม่ต้องส่งค่า
        userid: null,//Accessor: fsUser
        progname: null,//Accessor: itemname : "SBRE038"
        channel: "SBA Entry"/* Strict */
    }
}

// const sbse003 = {
//     _insert: reactive({

//     }),
//     _editdraft: reactive({

//     })
// }
