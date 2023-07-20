<script lang='ts'>
	import { type Todo, todos } from '../../stores/todo.store';

	export let currentTodo: Todo = {
		content: '',
		completed: false
	};

	export let showValidation = false;

	function addTodo() {
		if (!currentTodo.content){
			showValidation = true;
			return
		}
		todos.addTodo(currentTodo);
		currentTodo = {
			content: '',
			completed: false
		};
		showValidation = false;
	}
</script>

<div class='p-4 m-3 card border shadow-xl'>
	<form on:submit|preventDefault={addTodo}>
		<h3 class='text-2xl mb-3'>Add new todo</h3>
		<div class='flex items-center justify-between gap-2'>
			<input id='todoContent'
						 type='text'
						 bind:value={currentTodo.content}
						 placeholder='Type here'
						 class='input input-bordered flex-auto'
			/>
			<button
				type='button'
				class='btn btn-primary'
				on:click={addTodo}>Add
			</button>
		</div>
		{#if showValidation}
			<div class='mt-3 text-error text-sm'>Please type something</div>
		{/if}
	</form>
</div>

<div class='p-3'>
	<table class='table table-sm table-zebra'>
		<tbody>
		{#each $todos as todo, i}
			<tr>
				<td>
					<div class='form-control'>
						<input type='checkbox' class='checkbox' bind:checked={todo.completed}>
					</div>
				</td>
				<td>
					<div class:line-through={todo.completed}>{todo.content}</div>
				</td>
				<td>
					<div>
						<button
							type='button'
							class='btn btn-sm btn-accent'
							on:click={() => {
				todos.removeTodo(i);
			}}>Edit
						</button>
						<button
							type='button'
							class='btn btn-sm btn-error'
							on:click={() => {
				todos.removeTodo(i);
			}}>Delete
						</button>
					</div>
				</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>
