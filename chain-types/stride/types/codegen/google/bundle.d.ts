import * as _73 from "./api/http";
import * as _74 from "./api/httpbody";
import * as _75 from "./protobuf/any";
import * as _76 from "./protobuf/descriptor";
import * as _77 from "./protobuf/duration";
import * as _78 from "./protobuf/timestamp";
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
        Timestamp: {
            encode(message: _78.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Timestamp;
            fromPartial(object: Partial<_78.Timestamp>): _78.Timestamp;
        };
        Duration: {
            encode(message: _77.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Duration;
            fromPartial(object: Partial<_77.Duration>): _77.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _76.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _76.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _76.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _76.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _76.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _76.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _76.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _76.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _76.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _76.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _76.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _76.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _76.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _76.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _76.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _76.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _76.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _76.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _76.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _76.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _76.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _76.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _76.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _76.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _76.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FileDescriptorSet;
            fromPartial(object: Partial<_76.FileDescriptorSet>): _76.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _76.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FileDescriptorProto;
            fromPartial(object: Partial<_76.FileDescriptorProto>): _76.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _76.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DescriptorProto;
            fromPartial(object: Partial<_76.DescriptorProto>): _76.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _76.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_76.DescriptorProto_ExtensionRange>): _76.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _76.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_76.DescriptorProto_ReservedRange>): _76.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _76.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ExtensionRangeOptions;
            fromPartial(object: Partial<_76.ExtensionRangeOptions>): _76.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _76.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FieldDescriptorProto;
            fromPartial(object: Partial<_76.FieldDescriptorProto>): _76.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _76.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.OneofDescriptorProto;
            fromPartial(object: Partial<_76.OneofDescriptorProto>): _76.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _76.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EnumDescriptorProto;
            fromPartial(object: Partial<_76.EnumDescriptorProto>): _76.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _76.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_76.EnumDescriptorProto_EnumReservedRange>): _76.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _76.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EnumValueDescriptorProto;
            fromPartial(object: Partial<_76.EnumValueDescriptorProto>): _76.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _76.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ServiceDescriptorProto;
            fromPartial(object: Partial<_76.ServiceDescriptorProto>): _76.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _76.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MethodDescriptorProto;
            fromPartial(object: Partial<_76.MethodDescriptorProto>): _76.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _76.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FileOptions;
            fromPartial(object: Partial<_76.FileOptions>): _76.FileOptions;
        };
        MessageOptions: {
            encode(message: _76.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MessageOptions;
            fromPartial(object: Partial<_76.MessageOptions>): _76.MessageOptions;
        };
        FieldOptions: {
            encode(message: _76.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FieldOptions;
            fromPartial(object: Partial<_76.FieldOptions>): _76.FieldOptions;
        };
        OneofOptions: {
            encode(message: _76.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.OneofOptions;
            fromPartial(object: Partial<_76.OneofOptions>): _76.OneofOptions;
        };
        EnumOptions: {
            encode(message: _76.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EnumOptions;
            fromPartial(object: Partial<_76.EnumOptions>): _76.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _76.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EnumValueOptions;
            fromPartial(object: Partial<_76.EnumValueOptions>): _76.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _76.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ServiceOptions;
            fromPartial(object: Partial<_76.ServiceOptions>): _76.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _76.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MethodOptions;
            fromPartial(object: Partial<_76.MethodOptions>): _76.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _76.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.UninterpretedOption;
            fromPartial(object: Partial<_76.UninterpretedOption>): _76.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _76.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_76.UninterpretedOption_NamePart>): _76.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _76.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SourceCodeInfo;
            fromPartial(object: Partial<_76.SourceCodeInfo>): _76.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _76.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SourceCodeInfo_Location;
            fromPartial(object: Partial<_76.SourceCodeInfo_Location>): _76.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _76.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GeneratedCodeInfo;
            fromPartial(object: Partial<_76.GeneratedCodeInfo>): _76.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _76.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_76.GeneratedCodeInfo_Annotation>): _76.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _75.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Any;
            fromPartial(object: Partial<_75.Any>): _75.Any;
        };
    };
}
