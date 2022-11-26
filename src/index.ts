import { MRU, LRU } from "./cache-strategy";

const mru = new LRU(4);

mru.set('A', null);
mru.set('B', null);
mru.set('C', null);
mru.set('D', null);
mru.set('E', null);
mru.get('D');
mru.set('F', null);

mru.display()