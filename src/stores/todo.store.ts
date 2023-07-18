import { writable } from 'svelte/store';
import { LocalStorageHelper } from '$lib/helpers/localStorage';

export interface Todo {
	content: string;
	completed: boolean;
}

function todoStore(saveToStorage = true) {
	let initialTodos: Todo[] = [];
	if (saveToStorage)
		initialTodos = LocalStorageHelper.get('todos', []);
	const { set, update, subscribe } = writable<Todo[]>(initialTodos);

	function saveLocalStorage(todos: Todo[]) {
		LocalStorageHelper.set('todos', todos);
	}

	const customUpdate = (callback: (prev: Todo[]) => Todo[]) => {
		update((todos) => {
			const updated = callback(todos);

			if (saveToStorage){
				saveLocalStorage(updated);
			}
			return updated;
		});
	};

	return {
		set: (todos: Todo[]) => {
			set(todos);
			if (saveToStorage)
				saveLocalStorage(todos);
		},
		update: customUpdate,
		subscribe,
		addTodo: (todo: Todo) => {
			customUpdate((todos) => [...todos, todo]);
		},
		removeTodo: (index: number) => {
			customUpdate((todos) => {
				todos.splice(index, 1);
				return todos;
			});
		},
		markCompleted: (index: number) => {
			customUpdate((todos) => {
				todos[index].completed = true;
				return todos;
			});
		},
		markNotCompleted: (index: number) => {
			customUpdate((todos) => {
				todos[index].completed = false;
				return todos;
			});
		}
	};
}

export const todos = todoStore(true);
