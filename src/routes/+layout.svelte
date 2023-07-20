<script lang='ts'>
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
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
