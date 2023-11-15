<template>
    <div>
        <div class="text-start">
            <h2 class="pb-2 border-bottom text-primary">Regular Verbs</h2>
            <VerbForm :view="viewName" />
        </div>
    </div>
</template>

<script>
import VerbForm from '@/components/VerbForm.vue'

export default {
    name: 'RegularView',
    components: {
        VerbForm
    },
    data(){
        return {
            viewName: 'RegularView'
        }
    }
}
</script>