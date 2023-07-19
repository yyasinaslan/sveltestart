<script lang='ts'>
	import { type Todo, todos } from '../../stores/todo.store';

	export let currentTodo: Todo = {
		content: '',
		completed: false
	};
</script>

<div class='form-control mb-3'>
	<label for='todoContent' class='label'>Content</label>
	<input id='todoContent'
				 type='text'
				 bind:value={currentTodo.content}
				 class='input input-primary'
	/>
</div>

<!--<div class='mb-3'>-->
<!--	<label for='todoCompleted' class='form-label'>Completed</label>-->
<!--	<input id='todoCompleted'-->
<!--				 type='checkbox'-->
<!--				 bind:value={currentTodo.completed}-->
<!--				 class='form-check'-->
<!--	/>-->
<!--</div>-->

<button
	type='button'
	class='btn btn-primary'
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
