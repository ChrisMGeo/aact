<script lang="ts">
    import { Gender } from "../classes";
    export let gender: Gender;
</script>

<i
    class="fas {gender === Gender.Male
        ? 'fa-mars male-icon'
        : 'fa-venus female-icon'}"
/>

<style>
    .female-icon {
        color: #ff69b4;
    }
    .male-icon {
        color: #4666ff;
    }
</style>