import LinkedList from "../../linked-list/LinkedList";
import type { KeyType } from "../interface";
import { AbstractCacheStrategy } from "../AbstractCacheStrategy";

export default class MRU<V> extends AbstractCacheStrategy<V> {

    #elementsList: LinkedList<KeyType> = new LinkedList();

    constructor(size: number) {
        super(size);
    }

    get(key: KeyType): V {
        if (!this.#elementsList.has(key))
            throw new Error('Element does not exist.');

        this.#elementsList.delete(key);
        this.#elementsList.insertLast(key);

        return this.elementsMap.get(key);
    }

    set(key: KeyType, value: V): void {
        if (this.maxSize === this.curSize) {
            const deletedKey = this.#elementsList.deleteLast();
            this.elementsMap.delete(deletedKey!);
            this.curSize--;
        }

        this.curSize++;
        this.#elementsList.insertLast(key);
        this.elementsMap.set(key, value);
    }
}