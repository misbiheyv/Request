import { HashTable, KeyType } from "./interface";
import type { CacheStrategy } from "./interface";

export abstract class AbstractCacheStrategy<V> implements CacheStrategy<V> {

    protected maxSize: number;

    protected curSize: number = 0;

    protected elementsMap: HashTable<KeyType, V> = new Map();

    protected constructor(size: number) {
        this.maxSize = size;
    }

    get(key: KeyType) : V {
        return null as any;
    }

    set(key: KeyType, value: any): void {}

    has(key: KeyType): boolean {
        return this.elementsMap.has(key);
    }

    display(): void {
        console.log(this.elementsMap)
    }
}
