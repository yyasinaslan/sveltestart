<script lang='ts'>
	import { type Todo, todos } from '../../stores/todo.store';

	export let currentTodo: Todo = {
		content: '',
		completed: false
	};
</script>

<div class='mb-3'>
	<label for='todoContent' class='form-label'>Content</label>
	<input id='todoContent'
				 type='text'
				 bind:value={currentTodo.content}
				 class='form-control'
	/>
</div>

<div class='mb-3'>
	<label for='todoCompleted' class='form-label'>Completed</label>
	<input id='todoCompleted'
				 type='checkbox'
				 bind:value={currentTodo.completed}
				 class='form-check'
	/>
</div>

<button
	type='button'
	class='btn btn-success'
	on:click={() => {
		todos.addTodo(currentTodo);
		currentTodo = {
			content: '',
			completed: false
		};
	}}>Add
</button
>

<div class='p-3'>
	<table class='table table-bordered'>
		{#each $todos as todo, i}
			<tr>
				<td><input style='width: 20px' type='checkbox' class='form-check m-0' bind:checked={todo.completed}></td>
				<td>
					<div class:text-decoration-line-through={todo.completed}>{todo.content}</div>
				</td>
				<td>
					<button
						type='button'
						class='btn btn-sm btn-danger'
						on:click={() => {
				todos.removeTodo(i);
			}}>Delete
					</button>
				</td>
			</tr>
		{/each}
	</table>
</div>
