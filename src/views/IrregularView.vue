<template>
    <div>
        <div class="text-start">
            <h2 class="pb-2 border-bottom text-danger">Irregular Verbs</h2>
            <VerbForm :view="viewName" />
        </div>
    </div>
</template>

<script>
import VerbForm from '@/components/VerbForm.vue'

export default {
    name: 'IrregularView',
    components: {
        VerbForm
    },
    data(){
        return {
            viewName: 'IrregularView'
        }
    }
}
</script>