<template>
  <div class="text-start">
    <h2 class="pb-2 border-bottom text-info">About</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <p class="text-body-secondary">Web page made by Alonso Fallas Calderón for the purpose of learning the use of
          Vue.js.
          Here you can practice learning the regular and irregular verbs of the English language.</p>
        <p class="text-body-secondary">It consists of the system showing different verbs so that you indicate the
          translation into Spanish and the conjugated form of each verb.</p>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <h4 class="fw-semibold mb-0"><img title="Made with vue" src="@/assets/logoVue.png" width="32" height="32">
              Made with Vue</h4>
            <p class="text-body-secondary">The vue.js framework is used for learning purposes.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <h4 class="fw-semibold mb-0"><img title="Made with vue" src="@/assets/logoBootstrap.png" width="40"
                height="32"> Made with Bootstrap</h4>
            <p class="text-body-secondary">The bootstrap framework is used for design purposes.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <h4 class="fw-semibold mb-0"><i class="bi bi-chat-left-text text-primary"></i> Regular verbs</h4>
            <p class="text-body-secondary">Random regular verbs are shown.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <h4 class="fw-semibold mb-0"><i class="bi bi-chat-left-dots text-danger"></i> Irregular verbs</h4>
            <p class="text-body-secondary">Random irregular verbs are shown.</p>
          </div>
        </div>
      </div>
    </div>
</div></template>