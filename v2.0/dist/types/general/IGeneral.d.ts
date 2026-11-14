export interface ICRUD<T> {
    add(value: T): void;
    remove?(value: T): void;
    update?(value: T): void;
    delete?(value: T): void;
    log?(): void;
}
export declare function addToInstance<T>(instance: ICRUD<T>, itm: T): void;
export interface LoggableInstane<T> {
    log(value: T): void;
}
//# sourceMappingURL=IGeneral.d.ts.map