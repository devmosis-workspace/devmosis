import * as _69 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _69.HashOp;
    hashOpToJSON(object: _69.HashOp): string;
    lengthOpFromJSON(object: any): _69.LengthOp;
    lengthOpToJSON(object: _69.LengthOp): string;
    HashOp: typeof _69.HashOp;
    HashOpSDKType: typeof _69.HashOpSDKType;
    LengthOp: typeof _69.LengthOp;
    LengthOpSDKType: typeof _69.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _69.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ExistenceProof;
        fromPartial(object: Partial<_69.ExistenceProof>): _69.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _69.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.NonExistenceProof;
        fromPartial(object: Partial<_69.NonExistenceProof>): _69.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _69.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CommitmentProof;
        fromPartial(object: Partial<_69.CommitmentProof>): _69.CommitmentProof;
    };
    LeafOp: {
        encode(message: _69.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.LeafOp;
        fromPartial(object: Partial<_69.LeafOp>): _69.LeafOp;
    };
    InnerOp: {
        encode(message: _69.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.InnerOp;
        fromPartial(object: Partial<_69.InnerOp>): _69.InnerOp;
    };
    ProofSpec: {
        encode(message: _69.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ProofSpec;
        fromPartial(object: Partial<_69.ProofSpec>): _69.ProofSpec;
    };
    InnerSpec: {
        encode(message: _69.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.InnerSpec;
        fromPartial(object: Partial<_69.InnerSpec>): _69.InnerSpec;
    };
    BatchProof: {
        encode(message: _69.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.BatchProof;
        fromPartial(object: Partial<_69.BatchProof>): _69.BatchProof;
    };
    BatchEntry: {
        encode(message: _69.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.BatchEntry;
        fromPartial(object: Partial<_69.BatchEntry>): _69.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _69.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CompressedBatchProof;
        fromPartial(object: Partial<_69.CompressedBatchProof>): _69.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _69.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CompressedBatchEntry;
        fromPartial(object: Partial<_69.CompressedBatchEntry>): _69.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _69.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CompressedExistenceProof;
        fromPartial(object: Partial<_69.CompressedExistenceProof>): _69.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _69.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CompressedNonExistenceProof;
        fromPartial(object: Partial<_69.CompressedNonExistenceProof>): _69.CompressedNonExistenceProof;
    };
};
