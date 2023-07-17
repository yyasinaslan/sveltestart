<script lang="ts">
	import { page } from '$app/stores';

	export let items: Array<{ route: string; label: string }> = [];
</script>

<div class="p-1 bg-secondary m-2 rounded text-white">
	{$page.url.pathname}
</div>
<ul class="nav nav-pills">
	{#each items as { route, label }, i}
		<li class="nav-item">
			<a
				class="nav-link"
				class:active={$page.url.pathname == route}
				href={route}>{label}</a
			>
		</li>
	{/each}
</ul>
