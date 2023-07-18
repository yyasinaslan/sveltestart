import { browser } from '$app/environment';

export class LocalStorageHelper {

	public static set(key: string, data: any): void {
		if (!browser) return;
		try {
			window.localStorage.setItem(key, JSON.stringify(data));
		} catch (e) {
			console.error('Error saving to localStorage', e);
		}
	}

	public static get(key: string, defaultValue: any) {
		if (!browser) return defaultValue;

		try {
			const data = window.localStorage.getItem(key);
			if (data === undefined || data === 'undefined' || data === null) {
				return defaultValue;
			} else {
				return JSON.parse(window.localStorage.getItem(key) ?? '');
			}
		} catch (e) {
			console.error('Error getting data from localStorage', e);
			return defaultValue;
		}
	}

	public static remove(key: string) {
		if (!browser) return;
		try {
			window.localStorage.removeItem(key);
		} catch (e) {
			console.error('Error removing data from localStorage', e);
			return;
		}
	}
}
