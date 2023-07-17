<script lang="ts">
	export let username: string;
</script>

<div class="d-flex justify-content-center">
	<div>{username}</div>
	<div>World</div>
</div>

{#if username == 'yasin'}
	<div>Welcome</div>
{/if}
