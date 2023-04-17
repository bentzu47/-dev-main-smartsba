import axios, { AxiosResponse } from "axios";

// AxiosResponse<any, any>
export const getJSONResponse = async (url: string, datas: object = {}):Promise<null | object> => {
  const { $Axios } = useNuxtApp();
  // console.log("# $Axios: ", $Axios)

    // const response: Array<null | object> = reactive([]);
    console.log("# getJSONResponse | url: ", url);
    console.log("# getJSONResponse | datas: ", datas);

    const response = await $Axios.post(url, datas)
    .then(({data: resp}): AxiosResponse<any> => {
      // handle success
      console.log(`# Success ✨`);
      let bodyResp = {};
      let errorflag = (resp.hasOwnProperty('head'))? resp.head.errorflag: 'Y';
      let result = (resp.hasOwnProperty('body'))? resp.body.result: 'N';
      if('N' == errorflag && 'Y' == result){
        bodyResp = resp.body;
      }
      return bodyResp;
    })
    .catch(function (error: Error) {
      // handle error
      console.log("# error ❌")
      // console.log(error);
      if("ERR_NETWORK" == error.code){
        throw new Error(error.message)
      }
    })
    .finally(function () {
      // always executed
      // handle success
      console.log(`[End] Get Response from url: ${url} 👌🏻`);
    });
    return response;
}


// const validateResponseType = (resp, enablePopup = true) => {
// 	// console.log("[validateResponseType]")
// 	try {
// 		let isValid = false;
// 		let head = resp.head;
// 		let body = resp.body;
// 		let errorflag = head.errorflag;
// 		let result = body.result;
// 		let msgtype;
// 		console.log("# errorflag: " + errorflag);
// 		console.log("# result: " + result);
// 		if(errorflag){
// 			msgtype = body.msgtype;
// 			if ("Y" == result) {
// 				isValid = true;
// 			} else if(result == "N") {
// 				let msgtype_p1 = msgtype.charAt(0);
// 				let msgtype_p2 = msgtype.charAt(1);
// 				let reason = body.reason;
// 				let errorDesc = head.errordesc;
// 				if("P" == msgtype_p1){
// 					if(enablePopup){
// 						stopWaiting();
// 						popupValidationResponse(msgtype_p2, errorDesc);
// 					}
// 				} else if("F" == msgtype_p1){
// 					throw reason || "Something went wrong.";
// 				}
// 				return false;
// 			} else {
// 				if(body?.errorMessage){
// 					throw errorMessage;
// 				}
// 				throw reason || "'result' in body is undefined";
// 			}
// 		}else{
// 			throw "'errorflag' in header is undefined";
// 		}
// 		return isValid;
// 	}catch(errorMessage) {
// 		if(enablePopup){
// 			popupValidationResponse("E", err);
// 		}
// 		throw errorMessage;
// 	}
// }

// function popupValidationResponse(msgtype,reason){
// 	console.log("[popupValidationResponse]")
// 	var modal_type = "dialog",
// 		modal_title = "", modal_icon = "", modal_msg = "", modal_button = {}, btn_class = "";

// 	modal_msg = "Are you sure you want to continue?"

// 	if(msgtype == "C" || msgtype == "W"){
// 		btn_class = (msgtype == "C")?"btn-primary":"btn-warning";// btn-yes-add
// 		modal_button = {
// 			confirm: {
// 	            label: '<i class="fa fa-check"></i> Yes',
// 	            className: btn_class + ' waves-effect waves-light'
// 	        },
// 			cancel: {
// 	            label: '<i class="fa fa-times"></i> No',
// 	            className: 'btn-no waves-effect waves-light'
// 	        }
// 		}
// 		if(msgtype == "C"){
// 			modal_title = "<i class='fas fa-question-circle text-primary mr-2'></i> Confirm Message";
// 		}else if(msgtype == "W"){
// 			modal_title = "<i class='fas fa-exclamation-triangle text-warning mr-2'></i> Warning Message";
// 			modal_msg = reason;
// 		}
// 	}else{
// 		modal_type = "alert"
// 		modal_msg = reason;
// 		if(msgtype == "E"){
// 			modal_title = "<i class='fas fa-exclamation-circle text-danger mr-2'></i> Error Message";
// 			btn_class = "btn-yes-del"
// 		}else if(msgtype == "N"){
// 			modal_title = "<i class='fas fa-info-circle text-info mr-2'></i> Notify Message";
// 			btn_class = "btn-info"
// 		}

// 		modal_button = {
// 			ok: {
// 	            label: "OK",
// 	            className: btn_class + ' btn-no waves-effect waves-light',
// 	        }
// 	    }
// 	}

// 	console.log("# modal_button: ", modal_button)
// 	console.log("# modal_type: ", modal_type)
// 	createBootBoxModal(true,modal_type, modal_title, modal_msg, modal_button)
// }

// function popupErrorMessage(errorMessage){ popupValidationResponse("E", errorMessage) }
// function popupWarningMessage(errorMessage){ popupValidationResponse("W", errorMessage) }