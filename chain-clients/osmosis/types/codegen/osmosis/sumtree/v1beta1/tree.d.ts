import * as _m0 from "protobufjs/minimal";
export interface Node {
    children: Child[];
}
export interface NodeSDKType {
    children: ChildSDKType[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildSDKType {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf?: Child;
}
export interface LeafSDKType {
    leaf?: ChildSDKType;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    fromPartial(object: Partial<Node>): Node;
};
export declare const Child: {
    encode(message: Child, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Child;
    fromJSON(object: any): Child;
    fromPartial(object: Partial<Child>): Child;
};
export declare const Leaf: {
    encode(message: Leaf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leaf;
    fromJSON(object: any): Leaf;
    fromPartial(object: Partial<Leaf>): Leaf;
};
