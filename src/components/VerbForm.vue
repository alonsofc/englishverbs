<template>
    <div class="text-center" @keydown.enter="checkAnswer">
        <h1 class="display-2 mt-5">{{ verbItem.infinitive }}</h1>
        <span class="text-muted">Base form</span>

        <div class="card border-primary mx-auto mt-5" :class="{ 'border-danger': isIrregularView }"
            style="max-width: 540px">
            <div class="card-body">
                <div class="input-group">
                    <input ref="txtConjugated" type="text" class="form-control" placeholder="Write it in the past tense."
                        aria-label="Write it in the past tense." aria-describedby="btnShowConjugated"
                        v-model="txtConjugated" :disabled="isReadOnlyConjugated" required />
                    <button class="btn btn-outline-primary" :class="{ 'btn-outline-danger': isIrregularView }" type="button"
                        id="btnShowConjugated" title="See answer" @click="showConjugated">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                </div>
                <div class="text-start"
                    :class="{ 'text-success': msgConjugated === 'Correct.', 'text-danger': msgConjugated === 'Incorrect.', }">
                    {{ msgConjugated }}
                </div>

                <div class="input-group mt-3" v-if="isIrregularView">
                    <input type="text" class="form-control" placeholder="Write it in the past participle."
                        aria-label="Write it in the past participle." aria-describedby="btnShowConjugatedPP"
                        v-model="txtConjugatedPP" :disabled="isReadOnlyConjugatedPP" required />
                    <button class="btn btn-outline-primary" :class="{ 'btn-outline-danger': isIrregularView }" type="button"
                        id="btnShowConjugatedPP" title="See answer" @click="showConjugatedPP">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                </div>
                <div class="text-start" v-if="isIrregularView"
                    :class="{ 'text-success': msgConjugatedPP === 'Correct.', 'text-danger': msgConjugatedPP === 'Incorrect.', }">
                    {{ msgConjugatedPP }}
                </div>

                <div class="input-group mt-3">
                    <input type="text" class="form-control" placeholder="Write it in Spanish."
                        aria-label="Write it in Spanish." aria-describedby="btnShowTranslate" v-model="txtTranslate"
                        :disabled="isReadOnlyTranslate" required />
                    <button class="btn btn-outline-primary" :class="{ 'btn-outline-danger': isIrregularView }" type="button"
                        id="btnShowTranslate" title="See answer" @click="showTranslate">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                </div>
                <div class="text-start"
                    :class="{ 'text-success': msgTranslate === 'Correct.', 'text-danger': msgTranslate === 'Incorrect.', }">
                    {{ msgTranslate }}
                </div>
            </div>
        </div>

        <button class="btn btn-success btn-lg mt-5 me-4" @click="checkAnswer">
            Check Answers <i class="bi bi-check2-circle"></i>
        </button>

        <button class="btn btn-primary btn-lg mt-5" v-bind:class="{ 'btn-danger': isIrregularView }" @click="showVerb">
            Next Verb <i class="bi bi-shuffle"></i>
        </button>
    </div>
</template>

<script>
import regularVerbsData from "@/backend/regularVerbs.json";
import irregularVerbsData from "@/backend/mostUsedIrregularVerbs.json";

export default {
    props: ["view"],
    computed: {
        jsonData() {
            if (this.view === "RegularView") {
                this.isIrregularView = false;
                return regularVerbsData;
            } else {
                this.isIrregularView = true;
                return irregularVerbsData;
            }
        },
    },
    methods: {
        initValues() {
            this.isReadOnlyTranslate = false;
            this.isReadOnlyConjugated = false;
            this.isReadOnlyConjugatedPP = false;
            this.txtTranslate = "";
            this.txtConjugated = "";
            this.txtConjugatedPP = "";
            this.msgTranslate = "";
            this.msgConjugated = "";
            this.msgConjugatedPP = "";
        },
        showVerb() {
            this.initValues();
            const totalElements = Object.keys(this.jsonData).length;
            const randomNumber = Math.floor(Math.random() * totalElements) + 1;
            this.verbItem = this.jsonData.find((n) => n.id === randomNumber);
        },
        checkAnswer() {
            if (this.msgTranslate === "Correct." && this.msgConjugated === "Correct." && this.msgConjugatedPP === "Correct.") {
                this.showVerb();
                this.$refs.txtConjugated.focus();
            } else {
                var valTranslate = this.txtTranslate.trim();
                this.msgTranslate = valTranslate === "" ? "Incorrect." : "";
                if (this.msgTranslate === "")
                    this.msgTranslate = valTranslate.toLowerCase() === this.verbItem.translation.toLowerCase() ? "Correct." : "Incorrect.";

                var valConjugated = this.txtConjugated.trim();
                this.msgConjugated = valConjugated === "" ? "Incorrect." : "";
                if (this.msgConjugated === "")
                    this.msgConjugated = valConjugated.toLowerCase() === this.verbItem.pastSimple.toLowerCase() ? "Correct." : "Incorrect.";

                var valConjugatedPP = this.txtConjugatedPP.trim();
                this.msgConjugatedPP = valConjugatedPP === "" ? "Incorrect." : "";
                if (this.msgConjugatedPP === "")
                    this.msgConjugatedPP = valConjugatedPP.toLowerCase() === this.verbItem.pastParticiple.toLowerCase() ? "Correct." : "Incorrect.";
            }
        },
        showTranslate() {
            this.isReadOnlyTranslate = true;
            this.txtTranslate = this.verbItem.translation;
        },
        showConjugated() {
            this.isReadOnlyConjugated = true;
            this.txtConjugated = this.verbItem.pastSimple;
        },
        showConjugatedPP() {
            this.isReadOnlyConjugatedPP = true;
            this.txtConjugatedPP = this.verbItem.pastParticiple;
        },
    },
    data() {
        return {
            verbItem: null,
            isIrregularView: null,
            txtTranslate: "",
            txtConjugated: "",
            txtConjugatedPP: "",
            isReadOnlyTranslate: false,
            isReadOnlyConjugated: false,
            isReadOnlyConjugatedPP: false,
            msgTranslate: "",
            msgConjugated: "",
            msgConjugatedPP: ""
        };
    },
    watch: {
        jsonData: {
            immediate: true,
            handler() {
                this.showVerb();
            },
        },
    },
    mounted() {
        this.showVerb();

        setTimeout(() => {
            this.$refs.txtConjugated.focus();
        }, 0);
    },
};
</script>