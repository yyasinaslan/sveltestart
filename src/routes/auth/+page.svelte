<script lang="ts">
	export let data: any;

	data = 'hello';

	export function changeText() {
		data = 'world';
	}
</script>

<h1>Login</h1>

{data}
<button class="btn btn-danger" on:click={changeText}>Click</button>
<form action="">
	<input type="text" placeholder="Username" />

	<input type="password" name="" id="" placeholder="password" />
</form>
