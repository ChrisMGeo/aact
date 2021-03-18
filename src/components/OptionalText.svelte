<script lang="ts">
    export let content: string;
    export let empty: string = "(empty)";
</script>

{content !== "" ? content : empty}
