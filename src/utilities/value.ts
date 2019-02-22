export const exists = <T>(value: undefined | null | T): value is T => value !== undefined && value !== null;
export const valueOrDefault = <T>(value: undefined | null | T, defaultValue: T): T => exists(value) ? value : defaultValue;