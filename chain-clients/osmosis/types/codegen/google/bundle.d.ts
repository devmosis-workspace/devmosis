import * as _176 from "./protobuf/any";
import * as _177 from "./protobuf/duration";
import * as _178 from "./protobuf/timestamp";
import * as _179 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _179.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _179.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _179.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _179.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _179.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _179.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _179.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _179.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _179.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _179.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _179.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _179.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _179.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _179.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _179.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _179.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _179.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _179.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _179.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _179.FieldOptions_CType;
        FieldOptions_JSType: typeof _179.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _179.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _179.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _179.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _179.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.FileDescriptorSet;
            fromJSON(object: any): _179.FileDescriptorSet;
            fromPartial(object: Partial<_179.FileDescriptorSet>): _179.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _179.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.FileDescriptorProto;
            fromJSON(object: any): _179.FileDescriptorProto;
            fromPartial(object: Partial<_179.FileDescriptorProto>): _179.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _179.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.DescriptorProto;
            fromJSON(object: any): _179.DescriptorProto;
            fromPartial(object: Partial<_179.DescriptorProto>): _179.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _179.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _179.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_179.DescriptorProto_ExtensionRange>): _179.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _179.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.DescriptorProto_ReservedRange;
            fromJSON(object: any): _179.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_179.DescriptorProto_ReservedRange>): _179.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _179.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ExtensionRangeOptions;
            fromJSON(object: any): _179.ExtensionRangeOptions;
            fromPartial(object: Partial<_179.ExtensionRangeOptions>): _179.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _179.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.FieldDescriptorProto;
            fromJSON(object: any): _179.FieldDescriptorProto;
            fromPartial(object: Partial<_179.FieldDescriptorProto>): _179.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _179.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.OneofDescriptorProto;
            fromJSON(object: any): _179.OneofDescriptorProto;
            fromPartial(object: Partial<_179.OneofDescriptorProto>): _179.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _179.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EnumDescriptorProto;
            fromJSON(object: any): _179.EnumDescriptorProto;
            fromPartial(object: Partial<_179.EnumDescriptorProto>): _179.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _179.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _179.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_179.EnumDescriptorProto_EnumReservedRange>): _179.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _179.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EnumValueDescriptorProto;
            fromJSON(object: any): _179.EnumValueDescriptorProto;
            fromPartial(object: Partial<_179.EnumValueDescriptorProto>): _179.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _179.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ServiceDescriptorProto;
            fromJSON(object: any): _179.ServiceDescriptorProto;
            fromPartial(object: Partial<_179.ServiceDescriptorProto>): _179.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _179.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MethodDescriptorProto;
            fromJSON(object: any): _179.MethodDescriptorProto;
            fromPartial(object: Partial<_179.MethodDescriptorProto>): _179.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _179.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.FileOptions;
            fromJSON(object: any): _179.FileOptions;
            fromPartial(object: Partial<_179.FileOptions>): _179.FileOptions;
        };
        MessageOptions: {
            encode(message: _179.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MessageOptions;
            fromJSON(object: any): _179.MessageOptions;
            fromPartial(object: Partial<_179.MessageOptions>): _179.MessageOptions;
        };
        FieldOptions: {
            encode(message: _179.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.FieldOptions;
            fromJSON(object: any): _179.FieldOptions;
            fromPartial(object: Partial<_179.FieldOptions>): _179.FieldOptions;
        };
        OneofOptions: {
            encode(message: _179.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.OneofOptions;
            fromJSON(object: any): _179.OneofOptions;
            fromPartial(object: Partial<_179.OneofOptions>): _179.OneofOptions;
        };
        EnumOptions: {
            encode(message: _179.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EnumOptions;
            fromJSON(object: any): _179.EnumOptions;
            fromPartial(object: Partial<_179.EnumOptions>): _179.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _179.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EnumValueOptions;
            fromJSON(object: any): _179.EnumValueOptions;
            fromPartial(object: Partial<_179.EnumValueOptions>): _179.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _179.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ServiceOptions;
            fromJSON(object: any): _179.ServiceOptions;
            fromPartial(object: Partial<_179.ServiceOptions>): _179.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _179.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MethodOptions;
            fromJSON(object: any): _179.MethodOptions;
            fromPartial(object: Partial<_179.MethodOptions>): _179.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _179.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.UninterpretedOption;
            fromJSON(object: any): _179.UninterpretedOption;
            fromPartial(object: Partial<_179.UninterpretedOption>): _179.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _179.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.UninterpretedOption_NamePart;
            fromJSON(object: any): _179.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_179.UninterpretedOption_NamePart>): _179.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _179.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SourceCodeInfo;
            fromJSON(object: any): _179.SourceCodeInfo;
            fromPartial(object: Partial<_179.SourceCodeInfo>): _179.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _179.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.SourceCodeInfo_Location;
            fromJSON(object: any): _179.SourceCodeInfo_Location;
            fromPartial(object: Partial<_179.SourceCodeInfo_Location>): _179.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _179.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.GeneratedCodeInfo;
            fromJSON(object: any): _179.GeneratedCodeInfo;
            fromPartial(object: Partial<_179.GeneratedCodeInfo>): _179.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _179.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _179.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_179.GeneratedCodeInfo_Annotation>): _179.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _178.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Timestamp;
            fromJSON(object: any): _178.Timestamp;
            fromPartial(object: Partial<_178.Timestamp>): _178.Timestamp;
        };
        Duration: {
            encode(message: _177.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Duration;
            fromJSON(object: any): _177.Duration;
            fromPartial(object: Partial<_177.Duration>): _177.Duration;
        };
        Any: {
            encode(message: _176.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Any;
            fromJSON(object: any): _176.Any;
            fromPartial(object: Partial<_176.Any>): _176.Any;
        };
    };
}
