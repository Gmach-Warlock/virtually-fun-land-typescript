export type TAll = string | number | boolean | object;
export declare function itemExistsInArray<type>(arr: type[], itm: type): boolean;
export declare function itemExistsByKeyValue<Type extends any, Key extends keyof Type>(arr: Type[], prop: Key, value: TAll): boolean;
//# sourceMappingURL=itemExists.d.ts.map