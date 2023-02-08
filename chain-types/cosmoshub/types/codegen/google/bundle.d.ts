import * as _73 from "./api/http";
import * as _74 from "./api/httpbody";
import * as _75 from "./protobuf/any";
import * as _76 from "./protobuf/timestamp";
import * as _77 from "./protobuf/duration";
import * as _78 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _74.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.HttpBody;
            fromPartial(object: Partial<_74.HttpBody>): _74.HttpBody;
        };
        Http: {
            encode(message: _73.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Http;
            fromPartial(object: Partial<_73.Http>): _73.Http;
        };
        HttpRule: {
            encode(message: _73.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.HttpRule;
            fromPartial(object: Partial<_73.HttpRule>): _73.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _73.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CustomHttpPattern;
            fromPartial(object: Partial<_73.CustomHttpPattern>): _73.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _78.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _78.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _78.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _78.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _78.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _78.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _78.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _78.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _78.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _78.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _78.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _78.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _78.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _78.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _78.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _78.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _78.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _78.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _78.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _78.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _78.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _78.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _78.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _78.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _78.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FileDescriptorSet;
            fromPartial(object: Partial<_78.FileDescriptorSet>): _78.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _78.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FileDescriptorProto;
            fromPartial(object: Partial<_78.FileDescriptorProto>): _78.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _78.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.DescriptorProto;
            fromPartial(object: Partial<_78.DescriptorProto>): _78.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _78.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_78.DescriptorProto_ExtensionRange>): _78.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _78.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_78.DescriptorProto_ReservedRange>): _78.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _78.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ExtensionRangeOptions;
            fromPartial(object: Partial<_78.ExtensionRangeOptions>): _78.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _78.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FieldDescriptorProto;
            fromPartial(object: Partial<_78.FieldDescriptorProto>): _78.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _78.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.OneofDescriptorProto;
            fromPartial(object: Partial<_78.OneofDescriptorProto>): _78.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _78.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EnumDescriptorProto;
            fromPartial(object: Partial<_78.EnumDescriptorProto>): _78.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _78.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_78.EnumDescriptorProto_EnumReservedRange>): _78.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _78.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EnumValueDescriptorProto;
            fromPartial(object: Partial<_78.EnumValueDescriptorProto>): _78.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _78.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ServiceDescriptorProto;
            fromPartial(object: Partial<_78.ServiceDescriptorProto>): _78.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _78.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MethodDescriptorProto;
            fromPartial(object: Partial<_78.MethodDescriptorProto>): _78.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _78.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FileOptions;
            fromPartial(object: Partial<_78.FileOptions>): _78.FileOptions;
        };
        MessageOptions: {
            encode(message: _78.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MessageOptions;
            fromPartial(object: Partial<_78.MessageOptions>): _78.MessageOptions;
        };
        FieldOptions: {
            encode(message: _78.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FieldOptions;
            fromPartial(object: Partial<_78.FieldOptions>): _78.FieldOptions;
        };
        OneofOptions: {
            encode(message: _78.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.OneofOptions;
            fromPartial(object: Partial<_78.OneofOptions>): _78.OneofOptions;
        };
        EnumOptions: {
            encode(message: _78.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EnumOptions;
            fromPartial(object: Partial<_78.EnumOptions>): _78.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _78.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.EnumValueOptions;
            fromPartial(object: Partial<_78.EnumValueOptions>): _78.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _78.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ServiceOptions;
            fromPartial(object: Partial<_78.ServiceOptions>): _78.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _78.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MethodOptions;
            fromPartial(object: Partial<_78.MethodOptions>): _78.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _78.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.UninterpretedOption;
            fromPartial(object: Partial<_78.UninterpretedOption>): _78.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _78.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_78.UninterpretedOption_NamePart>): _78.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _78.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SourceCodeInfo;
            fromPartial(object: Partial<_78.SourceCodeInfo>): _78.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _78.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.SourceCodeInfo_Location;
            fromPartial(object: Partial<_78.SourceCodeInfo_Location>): _78.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _78.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GeneratedCodeInfo;
            fromPartial(object: Partial<_78.GeneratedCodeInfo>): _78.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _78.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_78.GeneratedCodeInfo_Annotation>): _78.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _77.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Duration;
            fromPartial(object: Partial<_77.Duration>): _77.Duration;
        };
        Timestamp: {
            encode(message: _76.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Timestamp;
            fromPartial(object: Partial<_76.Timestamp>): _76.Timestamp;
        };
        Any: {
            encode(message: _75.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Any;
            fromPartial(object: Partial<_75.Any>): _75.Any;
        };
    };
}
