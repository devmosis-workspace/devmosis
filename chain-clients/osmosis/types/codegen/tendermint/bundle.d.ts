import * as _162 from "./abci/types";
import * as _163 from "./crypto/keys";
import * as _164 from "./crypto/proof";
import * as _165 from "./libs/bits/types";
import * as _166 from "./p2p/types";
import * as _167 from "./types/block";
import * as _168 from "./types/evidence";
import * as _169 from "./types/params";
import * as _170 from "./types/types";
import * as _171 from "./types/validator";
import * as _172 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _162.CheckTxType;
        checkTxTypeToJSON(object: _162.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _162.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _162.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _162.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _162.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _162.EvidenceType;
        evidenceTypeToJSON(object: _162.EvidenceType): string;
        CheckTxType: typeof _162.CheckTxType;
        CheckTxTypeSDKType: typeof _162.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _162.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _162.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _162.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _162.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _162.EvidenceType;
        EvidenceTypeSDKType: typeof _162.EvidenceType;
        Request: {
            encode(message: _162.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Request;
            fromJSON(object: any): _162.Request;
            fromPartial(object: Partial<_162.Request>): _162.Request;
        };
        RequestEcho: {
            encode(message: _162.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestEcho;
            fromJSON(object: any): _162.RequestEcho;
            fromPartial(object: Partial<_162.RequestEcho>): _162.RequestEcho;
        };
        RequestFlush: {
            encode(_: _162.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestFlush;
            fromJSON(_: any): _162.RequestFlush;
            fromPartial(_: Partial<_162.RequestFlush>): _162.RequestFlush;
        };
        RequestInfo: {
            encode(message: _162.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestInfo;
            fromJSON(object: any): _162.RequestInfo;
            fromPartial(object: Partial<_162.RequestInfo>): _162.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _162.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestSetOption;
            fromJSON(object: any): _162.RequestSetOption;
            fromPartial(object: Partial<_162.RequestSetOption>): _162.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _162.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestInitChain;
            fromJSON(object: any): _162.RequestInitChain;
            fromPartial(object: Partial<_162.RequestInitChain>): _162.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _162.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestQuery;
            fromJSON(object: any): _162.RequestQuery;
            fromPartial(object: Partial<_162.RequestQuery>): _162.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _162.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestBeginBlock;
            fromJSON(object: any): _162.RequestBeginBlock;
            fromPartial(object: Partial<_162.RequestBeginBlock>): _162.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _162.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestCheckTx;
            fromJSON(object: any): _162.RequestCheckTx;
            fromPartial(object: Partial<_162.RequestCheckTx>): _162.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _162.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestDeliverTx;
            fromJSON(object: any): _162.RequestDeliverTx;
            fromPartial(object: Partial<_162.RequestDeliverTx>): _162.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _162.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestEndBlock;
            fromJSON(object: any): _162.RequestEndBlock;
            fromPartial(object: Partial<_162.RequestEndBlock>): _162.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _162.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestCommit;
            fromJSON(_: any): _162.RequestCommit;
            fromPartial(_: Partial<_162.RequestCommit>): _162.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _162.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestListSnapshots;
            fromJSON(_: any): _162.RequestListSnapshots;
            fromPartial(_: Partial<_162.RequestListSnapshots>): _162.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _162.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestOfferSnapshot;
            fromJSON(object: any): _162.RequestOfferSnapshot;
            fromPartial(object: Partial<_162.RequestOfferSnapshot>): _162.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _162.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestLoadSnapshotChunk;
            fromJSON(object: any): _162.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_162.RequestLoadSnapshotChunk>): _162.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _162.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RequestApplySnapshotChunk;
            fromJSON(object: any): _162.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_162.RequestApplySnapshotChunk>): _162.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _162.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Response;
            fromJSON(object: any): _162.Response;
            fromPartial(object: Partial<_162.Response>): _162.Response;
        };
        ResponseException: {
            encode(message: _162.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseException;
            fromJSON(object: any): _162.ResponseException;
            fromPartial(object: Partial<_162.ResponseException>): _162.ResponseException;
        };
        ResponseEcho: {
            encode(message: _162.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseEcho;
            fromJSON(object: any): _162.ResponseEcho;
            fromPartial(object: Partial<_162.ResponseEcho>): _162.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _162.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseFlush;
            fromJSON(_: any): _162.ResponseFlush;
            fromPartial(_: Partial<_162.ResponseFlush>): _162.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _162.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseInfo;
            fromJSON(object: any): _162.ResponseInfo;
            fromPartial(object: Partial<_162.ResponseInfo>): _162.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _162.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseSetOption;
            fromJSON(object: any): _162.ResponseSetOption;
            fromPartial(object: Partial<_162.ResponseSetOption>): _162.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _162.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseInitChain;
            fromJSON(object: any): _162.ResponseInitChain;
            fromPartial(object: Partial<_162.ResponseInitChain>): _162.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _162.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseQuery;
            fromJSON(object: any): _162.ResponseQuery;
            fromPartial(object: Partial<_162.ResponseQuery>): _162.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _162.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseBeginBlock;
            fromJSON(object: any): _162.ResponseBeginBlock;
            fromPartial(object: Partial<_162.ResponseBeginBlock>): _162.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _162.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseCheckTx;
            fromJSON(object: any): _162.ResponseCheckTx;
            fromPartial(object: Partial<_162.ResponseCheckTx>): _162.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _162.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseDeliverTx;
            fromJSON(object: any): _162.ResponseDeliverTx;
            fromPartial(object: Partial<_162.ResponseDeliverTx>): _162.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _162.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseEndBlock;
            fromJSON(object: any): _162.ResponseEndBlock;
            fromPartial(object: Partial<_162.ResponseEndBlock>): _162.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _162.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseCommit;
            fromJSON(object: any): _162.ResponseCommit;
            fromPartial(object: Partial<_162.ResponseCommit>): _162.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _162.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseListSnapshots;
            fromJSON(object: any): _162.ResponseListSnapshots;
            fromPartial(object: Partial<_162.ResponseListSnapshots>): _162.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _162.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseOfferSnapshot;
            fromJSON(object: any): _162.ResponseOfferSnapshot;
            fromPartial(object: Partial<_162.ResponseOfferSnapshot>): _162.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _162.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _162.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_162.ResponseLoadSnapshotChunk>): _162.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _162.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ResponseApplySnapshotChunk;
            fromJSON(object: any): _162.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_162.ResponseApplySnapshotChunk>): _162.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _162.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConsensusParams;
            fromJSON(object: any): _162.ConsensusParams;
            fromPartial(object: Partial<_162.ConsensusParams>): _162.ConsensusParams;
        };
        BlockParams: {
            encode(message: _162.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.BlockParams;
            fromJSON(object: any): _162.BlockParams;
            fromPartial(object: Partial<_162.BlockParams>): _162.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _162.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.LastCommitInfo;
            fromJSON(object: any): _162.LastCommitInfo;
            fromPartial(object: Partial<_162.LastCommitInfo>): _162.LastCommitInfo;
        };
        Event: {
            encode(message: _162.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Event;
            fromJSON(object: any): _162.Event;
            fromPartial(object: Partial<_162.Event>): _162.Event;
        };
        EventAttribute: {
            encode(message: _162.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EventAttribute;
            fromJSON(object: any): _162.EventAttribute;
            fromPartial(object: Partial<_162.EventAttribute>): _162.EventAttribute;
        };
        TxResult: {
            encode(message: _162.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.TxResult;
            fromJSON(object: any): _162.TxResult;
            fromPartial(object: Partial<_162.TxResult>): _162.TxResult;
        };
        Validator: {
            encode(message: _162.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Validator;
            fromJSON(object: any): _162.Validator;
            fromPartial(object: Partial<_162.Validator>): _162.Validator;
        };
        ValidatorUpdate: {
            encode(message: _162.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ValidatorUpdate;
            fromJSON(object: any): _162.ValidatorUpdate;
            fromPartial(object: Partial<_162.ValidatorUpdate>): _162.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _162.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.VoteInfo;
            fromJSON(object: any): _162.VoteInfo;
            fromPartial(object: Partial<_162.VoteInfo>): _162.VoteInfo;
        };
        Evidence: {
            encode(message: _162.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Evidence;
            fromJSON(object: any): _162.Evidence;
            fromPartial(object: Partial<_162.Evidence>): _162.Evidence;
        };
        Snapshot: {
            encode(message: _162.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Snapshot;
            fromJSON(object: any): _162.Snapshot;
            fromPartial(object: Partial<_162.Snapshot>): _162.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _164.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Proof;
            fromJSON(object: any): _164.Proof;
            fromPartial(object: Partial<_164.Proof>): _164.Proof;
        };
        ValueOp: {
            encode(message: _164.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValueOp;
            fromJSON(object: any): _164.ValueOp;
            fromPartial(object: Partial<_164.ValueOp>): _164.ValueOp;
        };
        DominoOp: {
            encode(message: _164.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.DominoOp;
            fromJSON(object: any): _164.DominoOp;
            fromPartial(object: Partial<_164.DominoOp>): _164.DominoOp;
        };
        ProofOp: {
            encode(message: _164.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ProofOp;
            fromJSON(object: any): _164.ProofOp;
            fromPartial(object: Partial<_164.ProofOp>): _164.ProofOp;
        };
        ProofOps: {
            encode(message: _164.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ProofOps;
            fromJSON(object: any): _164.ProofOps;
            fromPartial(object: Partial<_164.ProofOps>): _164.ProofOps;
        };
        PublicKey: {
            encode(message: _163.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.PublicKey;
            fromJSON(object: any): _163.PublicKey;
            fromPartial(object: Partial<_163.PublicKey>): _163.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _165.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BitArray;
                fromJSON(object: any): _165.BitArray;
                fromPartial(object: Partial<_165.BitArray>): _165.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _166.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.NetAddress;
            fromJSON(object: any): _166.NetAddress;
            fromPartial(object: Partial<_166.NetAddress>): _166.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _166.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ProtocolVersion;
            fromJSON(object: any): _166.ProtocolVersion;
            fromPartial(object: Partial<_166.ProtocolVersion>): _166.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _166.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.DefaultNodeInfo;
            fromJSON(object: any): _166.DefaultNodeInfo;
            fromPartial(object: Partial<_166.DefaultNodeInfo>): _166.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _166.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.DefaultNodeInfoOther;
            fromJSON(object: any): _166.DefaultNodeInfoOther;
            fromPartial(object: Partial<_166.DefaultNodeInfoOther>): _166.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _171.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ValidatorSet;
            fromJSON(object: any): _171.ValidatorSet;
            fromPartial(object: Partial<_171.ValidatorSet>): _171.ValidatorSet;
        };
        Validator: {
            encode(message: _171.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Validator;
            fromJSON(object: any): _171.Validator;
            fromPartial(object: Partial<_171.Validator>): _171.Validator;
        };
        SimpleValidator: {
            encode(message: _171.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.SimpleValidator;
            fromJSON(object: any): _171.SimpleValidator;
            fromPartial(object: Partial<_171.SimpleValidator>): _171.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _170.BlockIDFlag;
        blockIDFlagToJSON(object: _170.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _170.SignedMsgType;
        signedMsgTypeToJSON(object: _170.SignedMsgType): string;
        BlockIDFlag: typeof _170.BlockIDFlag;
        BlockIDFlagSDKType: typeof _170.BlockIDFlag;
        SignedMsgType: typeof _170.SignedMsgType;
        SignedMsgTypeSDKType: typeof _170.SignedMsgType;
        PartSetHeader: {
            encode(message: _170.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PartSetHeader;
            fromJSON(object: any): _170.PartSetHeader;
            fromPartial(object: Partial<_170.PartSetHeader>): _170.PartSetHeader;
        };
        Part: {
            encode(message: _170.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Part;
            fromJSON(object: any): _170.Part;
            fromPartial(object: Partial<_170.Part>): _170.Part;
        };
        BlockID: {
            encode(message: _170.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BlockID;
            fromJSON(object: any): _170.BlockID;
            fromPartial(object: Partial<_170.BlockID>): _170.BlockID;
        };
        Header: {
            encode(message: _170.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Header;
            fromJSON(object: any): _170.Header;
            fromPartial(object: Partial<_170.Header>): _170.Header;
        };
        Data: {
            encode(message: _170.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Data;
            fromJSON(object: any): _170.Data;
            fromPartial(object: Partial<_170.Data>): _170.Data;
        };
        Vote: {
            encode(message: _170.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Vote;
            fromJSON(object: any): _170.Vote;
            fromPartial(object: Partial<_170.Vote>): _170.Vote;
        };
        Commit: {
            encode(message: _170.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Commit;
            fromJSON(object: any): _170.Commit;
            fromPartial(object: Partial<_170.Commit>): _170.Commit;
        };
        CommitSig: {
            encode(message: _170.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.CommitSig;
            fromJSON(object: any): _170.CommitSig;
            fromPartial(object: Partial<_170.CommitSig>): _170.CommitSig;
        };
        Proposal: {
            encode(message: _170.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Proposal;
            fromJSON(object: any): _170.Proposal;
            fromPartial(object: Partial<_170.Proposal>): _170.Proposal;
        };
        SignedHeader: {
            encode(message: _170.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.SignedHeader;
            fromJSON(object: any): _170.SignedHeader;
            fromPartial(object: Partial<_170.SignedHeader>): _170.SignedHeader;
        };
        LightBlock: {
            encode(message: _170.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.LightBlock;
            fromJSON(object: any): _170.LightBlock;
            fromPartial(object: Partial<_170.LightBlock>): _170.LightBlock;
        };
        BlockMeta: {
            encode(message: _170.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BlockMeta;
            fromJSON(object: any): _170.BlockMeta;
            fromPartial(object: Partial<_170.BlockMeta>): _170.BlockMeta;
        };
        TxProof: {
            encode(message: _170.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.TxProof;
            fromJSON(object: any): _170.TxProof;
            fromPartial(object: Partial<_170.TxProof>): _170.TxProof;
        };
        ConsensusParams: {
            encode(message: _169.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ConsensusParams;
            fromJSON(object: any): _169.ConsensusParams;
            fromPartial(object: Partial<_169.ConsensusParams>): _169.ConsensusParams;
        };
        BlockParams: {
            encode(message: _169.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.BlockParams;
            fromJSON(object: any): _169.BlockParams;
            fromPartial(object: Partial<_169.BlockParams>): _169.BlockParams;
        };
        EvidenceParams: {
            encode(message: _169.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.EvidenceParams;
            fromJSON(object: any): _169.EvidenceParams;
            fromPartial(object: Partial<_169.EvidenceParams>): _169.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _169.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ValidatorParams;
            fromJSON(object: any): _169.ValidatorParams;
            fromPartial(object: Partial<_169.ValidatorParams>): _169.ValidatorParams;
        };
        VersionParams: {
            encode(message: _169.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.VersionParams;
            fromJSON(object: any): _169.VersionParams;
            fromPartial(object: Partial<_169.VersionParams>): _169.VersionParams;
        };
        HashedParams: {
            encode(message: _169.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.HashedParams;
            fromJSON(object: any): _169.HashedParams;
            fromPartial(object: Partial<_169.HashedParams>): _169.HashedParams;
        };
        Evidence: {
            encode(message: _168.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Evidence;
            fromJSON(object: any): _168.Evidence;
            fromPartial(object: Partial<_168.Evidence>): _168.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _168.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.DuplicateVoteEvidence;
            fromJSON(object: any): _168.DuplicateVoteEvidence;
            fromPartial(object: Partial<_168.DuplicateVoteEvidence>): _168.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _168.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.LightClientAttackEvidence;
            fromJSON(object: any): _168.LightClientAttackEvidence;
            fromPartial(object: Partial<_168.LightClientAttackEvidence>): _168.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _168.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.EvidenceList;
            fromJSON(object: any): _168.EvidenceList;
            fromPartial(object: Partial<_168.EvidenceList>): _168.EvidenceList;
        };
        Block: {
            encode(message: _167.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Block;
            fromJSON(object: any): _167.Block;
            fromPartial(object: Partial<_167.Block>): _167.Block;
        };
    };
    const version: {
        App: {
            encode(message: _172.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.App;
            fromJSON(object: any): _172.App;
            fromPartial(object: Partial<_172.App>): _172.App;
        };
        Consensus: {
            encode(message: _172.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Consensus;
            fromJSON(object: any): _172.Consensus;
            fromPartial(object: Partial<_172.Consensus>): _172.Consensus;
        };
    };
}
