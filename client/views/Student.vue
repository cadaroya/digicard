<template>
    <div>
        <button><router-link to='/home'> (back to home) </router-link></button>
        <h1> Some Student's Page </h1>
        <p> His student number is {{ $route.params.studNo }} </p>
        <stud-info :studNo="$route.params.studNo"></stud-info>
        <stud-log :studNo="$route.params.studNo"></stud-log>
    </div>
</template>

<script>
    import StudInfo from 'components/StudInfo'
    import StudLog from 'components/StudLog.vue'

    export default {
        components: { StudInfo, StudLog }
    }
</script>