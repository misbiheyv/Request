export interface CacheStrategy<V> {
    get(key: KeyType): V;

    set(key: KeyType, value: V): void;

    has(key: KeyType): boolean;
}

export interface HashTable<K, V> {
    set(key: K, value: V): void;

    get(key: K): V;

    has(key: K): boolean;

    delete(key: K): boolean;

    [Symbol.iterator](): IterableIterator<[K, V]>;
}

export interface IterableHashTable<K, V> extends HashTable<K, V> {

    [Symbol.iterator](): IterableIterator<[K, V]>;

}

export type KeyType = string | number;