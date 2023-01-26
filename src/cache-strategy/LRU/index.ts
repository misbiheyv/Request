import type { KeyType } from "../interface";
import {AbstractCacheStrategy} from "../AbstractCacheStrategy";

export default class LRU<V> extends AbstractCacheStrategy<V> {

    constructor(size: number) {
        super(size);
    }

    get(key: KeyType): V {
        if (!this.elementsMap.has(key))
            throw new Error('Element does not exist.');

        const value = this.elementsMap.get(key);
        this.elementsMap.delete(key);
        this.elementsMap.set(key, value);

        return value;
    }

    set(key: KeyType, value: V): void {
        if (this.maxSize === this.curSize) {
            const
                deletedEl = this.elementsMap[Symbol.iterator]().next();

            this.elementsMap.delete(deletedEl.value[0]);
            this.curSize--;
        }

        this.curSize++;
        this.elementsMap.set(key, value);
    }
}