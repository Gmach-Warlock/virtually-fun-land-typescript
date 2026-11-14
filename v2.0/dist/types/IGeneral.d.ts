export interface IIdentify {
    id: string;
    name: string;
}
export interface ICRUD<T> {
    add(value: T): void;
    remove?(value: T): void;
    update?(value: T): void;
    delete?(value: T): void;
    log?(): void;
}
export interface LoggableInstane<T> {
    log(value: T): void;
}
//# sourceMappingURL=IGeneral.d.ts.map