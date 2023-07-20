<script lang='ts'>
	import { page } from '$app/stores';

	export let items: Array<{ route: string; label: string }> = [];
</script>

<div class='p-3 bg-base-300'>
	{$page.url.pathname}
</div>
<div class='p-3'>
	<div class='navbar bg-accent-content/20 rounded-2xl'>
		{#each items as { route, label }, i}
			<a
				class='btn btn-ghost'
				class:active={$page.url.pathname == route}
				href={route}>{label}</a
			>
		{/each}
	</div>

</div>
