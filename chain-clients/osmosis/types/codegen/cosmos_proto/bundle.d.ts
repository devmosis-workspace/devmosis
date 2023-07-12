import * as _173 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _173.ScalarType;
    scalarTypeToJSON(object: _173.ScalarType): string;
    ScalarType: typeof _173.ScalarType;
    ScalarTypeSDKType: typeof _173.ScalarType;
    InterfaceDescriptor: {
        encode(message: _173.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.InterfaceDescriptor;
        fromJSON(object: any): _173.InterfaceDescriptor;
        fromPartial(object: Partial<_173.InterfaceDescriptor>): _173.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _173.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ScalarDescriptor;
        fromJSON(object: any): _173.ScalarDescriptor;
        fromPartial(object: Partial<_173.ScalarDescriptor>): _173.ScalarDescriptor;
    };
};
