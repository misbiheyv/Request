import { AbstractCacheStrategy } from "../AbstractCacheStrategy";

export class Never<V extends any> extends AbstractCacheStrategy<V> {
    constructor(size = 0) {
        super(size);
    }
}