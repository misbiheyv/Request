export interface CacheStrategy<V> {
    get(key: KeyType): V;

    set(key: KeyType, value: V): void;
}

export interface HashTable<K, V> {
    set(key: K, value: V): void;

    get(key: K): V;

    has(key: K): boolean;

    delete(key: K): boolean;
}

export type KeyType = string | number;