<template>
  <MDBModal
    class="modal fade"
    id="exampleModalLong"
    tabindex="-1"
    labelledby="exampleModalLongTitle"
    v-model="exampleModalLong"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLongTitle"> Modal title </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody> ... long body </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModalLong = false"> Close </MDBBtn>
      <MDBBtn color="primary"> Save changes </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBBtn
    color="primary"
    aria-controls="exampleModalScrollableTitle"
    @click="exampleModalScrollable = true"
  >
    Launch demo modal
  </MDBBtn>
  <MDBModal
    id="exampleModalScrollable"
    tabindex="-1"
    labelledby="exampleModalScrollableTitle"
    v-model="exampleModalScrollable"
    scrollable
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalScrollableTitle"> Modal title </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody> ... long content </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModalScrollable = false"> Close </MDBBtn>
      <MDBBtn color="primary"> Save changes </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>


//     <div class="modal fade" id="about-program" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1"
//         aria-labelledby="staticBackdropLabel" aria-hidden="true">
//         <!-- Modal -->
//         <div class="modal-dialog modal-dialog-centered">
//             <div class="modal-content">
//                 <div class="modal-header border-bottom-0 p-4">
//                     <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body py-0">
//                     <header class="d-flex align-items-center">
//                         <img src="~/assets/images/freewill-icon.png" alt="Freewill Solutions Logo">
//                         <h5 class="fw-bold mb-0 ps-2 text-midnight-blue">About Program</h5>
//                     </header>
//                     <main>
//                         <div class="border rounded px-3 py-2 my-3">
//                             <div class="row g-0">
//                                 <div class="col-sm-12 col-md-5">
//                                     <div class="div-block">
//                                         <label class="fw-bold text-midnight-blue"> Program ID </label>
//                                         <div id="fsabout_progid">{{ props.progid }}</div>
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-12 col-md-7">
//                                     <div class="div-block">
//                                         <label class="fw-bold text-midnight-blue">Name</label>
//                                         <div id="fsabout_progid">{{ props.progname }}</div>
//                                     </div>
//                                 </div>
//                                 <div class="col-sm-12 col-md-5">
//                                     <div class="div-block">
//                                         <label class="fw-bold text-midnight-blue">UI Version</label>
//                                         <div id="fsabout_uiversion">{{ props.progversion }}</div>
//                                     </div>
//                                 </div>

//                                 <div class="col-sm-12 col-md-auto">
//                                     <div class="div-block">
//                                         <label class="fw-bold text-midnight-blue">MENU Version</label>
//                                         <div id="fsabout_uiversion">{{ props.menuversion }}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="border rounded px-3 py-2">
//                             <div class="div-block">
//                                 <label class="fw-bold">List of API</label>
//                                 <div id="fsapi_list">
//                                     <ul class="list-group list-group-light">
//                                         <li class="list-group-item d-flex justify-content-between align-items-start">
//                                             <div class="ms-2 me-auto">
//                                                 <div class="fw-bold">api-cash</div>
//                                                 Api for Cash Management
//                                             </div>
//                                             <h5><span class="badge badge-primary rounded-pill">dev</span></h5>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//                 <div class="modal-footer justify-content-between border-top-0">
//                     <small class="copyright-footer p-0">
//                         <div>SMART SBA</div>
//                         <div>Copyright 2020 Freewill Solutions Co.,Ltd All right reserved.</div>
//                     </small>
//                     <button type="button" class="btn btn-light btn-floating btn-lg text-midnight-blue">
//                         <i class="fas fa-download fa-lg"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </template>

<script lang="ts" setup>
export interface Props {
    progid: string
    progname: string
    progversion: string
    menuversion?: string
}

const props = withDefaults(defineProps<Props>(), {
    progid: '-',
    progname: '-',
    progversion: '-',
    menuversion: '-'
})

// const { data: mountain } = await useFetch('/api/utils/get-version', { pick: ['title', 'description'] })
</script>


<style scoped>
.text-midnight-blue {
    color: var(--midnight-blue)
}

.modal-body>header>img {
    width: 40px;
}

#fsapi_list {
    min-height: 15em;
    height: 15em;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>