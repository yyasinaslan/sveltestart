<script lang="ts">
	import '../lib/assets/bootstrap.scss';
	import Nav from '$lib/components/nav.svelte';

	export const prerender = false;
</script>

<Nav
	items={[
		{ route: '/', label: 'Home' },
		{ route: '/auth', label: 'Auth' },
		{ route: '/user', label: 'User' },
		{ route: '/todos', label: 'Todos' }
	]}
/>

<slot />
