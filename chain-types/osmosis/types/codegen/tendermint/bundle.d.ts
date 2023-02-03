import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _132.CheckTxType;
        checkTxTypeToJSON(object: _132.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _132.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _132.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _132.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _132.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _132.EvidenceType;
        evidenceTypeToJSON(object: _132.EvidenceType): string;
        CheckTxType: typeof _132.CheckTxType;
        CheckTxTypeSDKType: typeof _132.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _132.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _132.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _132.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _132.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _132.EvidenceType;
        EvidenceTypeSDKType: typeof _132.EvidenceTypeSDKType;
        Request: {
            encode(message: _132.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Request;
            fromPartial(object: Partial<_132.Request>): _132.Request;
        };
        RequestEcho: {
            encode(message: _132.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEcho;
            fromPartial(object: Partial<_132.RequestEcho>): _132.RequestEcho;
        };
        RequestFlush: {
            encode(_: _132.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestFlush;
            fromPartial(_: Partial<_132.RequestFlush>): _132.RequestFlush;
        };
        RequestInfo: {
            encode(message: _132.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInfo;
            fromPartial(object: Partial<_132.RequestInfo>): _132.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _132.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestSetOption;
            fromPartial(object: Partial<_132.RequestSetOption>): _132.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _132.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInitChain;
            fromPartial(object: Partial<_132.RequestInitChain>): _132.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _132.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestQuery;
            fromPartial(object: Partial<_132.RequestQuery>): _132.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _132.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestBeginBlock;
            fromPartial(object: Partial<_132.RequestBeginBlock>): _132.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _132.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCheckTx;
            fromPartial(object: Partial<_132.RequestCheckTx>): _132.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _132.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestDeliverTx;
            fromPartial(object: Partial<_132.RequestDeliverTx>): _132.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _132.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEndBlock;
            fromPartial(object: Partial<_132.RequestEndBlock>): _132.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _132.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCommit;
            fromPartial(_: Partial<_132.RequestCommit>): _132.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _132.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestListSnapshots;
            fromPartial(_: Partial<_132.RequestListSnapshots>): _132.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _132.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestOfferSnapshot;
            fromPartial(object: Partial<_132.RequestOfferSnapshot>): _132.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _132.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_132.RequestLoadSnapshotChunk>): _132.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _132.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_132.RequestApplySnapshotChunk>): _132.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _132.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Response;
            fromPartial(object: Partial<_132.Response>): _132.Response;
        };
        ResponseException: {
            encode(message: _132.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseException;
            fromPartial(object: Partial<_132.ResponseException>): _132.ResponseException;
        };
        ResponseEcho: {
            encode(message: _132.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEcho;
            fromPartial(object: Partial<_132.ResponseEcho>): _132.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _132.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseFlush;
            fromPartial(_: Partial<_132.ResponseFlush>): _132.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _132.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInfo;
            fromPartial(object: Partial<_132.ResponseInfo>): _132.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _132.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseSetOption;
            fromPartial(object: Partial<_132.ResponseSetOption>): _132.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _132.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInitChain;
            fromPartial(object: Partial<_132.ResponseInitChain>): _132.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _132.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseQuery;
            fromPartial(object: Partial<_132.ResponseQuery>): _132.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _132.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseBeginBlock;
            fromPartial(object: Partial<_132.ResponseBeginBlock>): _132.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _132.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCheckTx;
            fromPartial(object: Partial<_132.ResponseCheckTx>): _132.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _132.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseDeliverTx;
            fromPartial(object: Partial<_132.ResponseDeliverTx>): _132.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _132.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEndBlock;
            fromPartial(object: Partial<_132.ResponseEndBlock>): _132.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _132.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCommit;
            fromPartial(object: Partial<_132.ResponseCommit>): _132.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _132.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseListSnapshots;
            fromPartial(object: Partial<_132.ResponseListSnapshots>): _132.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _132.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseOfferSnapshot;
            fromPartial(object: Partial<_132.ResponseOfferSnapshot>): _132.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _132.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_132.ResponseLoadSnapshotChunk>): _132.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _132.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_132.ResponseApplySnapshotChunk>): _132.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _132.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusParams;
            fromPartial(object: Partial<_132.ConsensusParams>): _132.ConsensusParams;
        };
        BlockParams: {
            encode(message: _132.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BlockParams;
            fromPartial(object: Partial<_132.BlockParams>): _132.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _132.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LastCommitInfo;
            fromPartial(object: Partial<_132.LastCommitInfo>): _132.LastCommitInfo;
        };
        Event: {
            encode(message: _132.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Event;
            fromPartial(object: Partial<_132.Event>): _132.Event;
        };
        EventAttribute: {
            encode(message: _132.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EventAttribute;
            fromPartial(object: Partial<_132.EventAttribute>): _132.EventAttribute;
        };
        TxResult: {
            encode(message: _132.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TxResult;
            fromPartial(object: Partial<_132.TxResult>): _132.TxResult;
        };
        Validator: {
            encode(message: _132.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Validator;
            fromPartial(object: Partial<_132.Validator>): _132.Validator;
        };
        ValidatorUpdate: {
            encode(message: _132.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ValidatorUpdate;
            fromPartial(object: Partial<_132.ValidatorUpdate>): _132.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _132.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.VoteInfo;
            fromPartial(object: Partial<_132.VoteInfo>): _132.VoteInfo;
        };
        Evidence: {
            encode(message: _132.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Evidence;
            fromPartial(object: Partial<_132.Evidence>): _132.Evidence;
        };
        Snapshot: {
            encode(message: _132.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Snapshot;
            fromPartial(object: Partial<_132.Snapshot>): _132.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _134.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proof;
            fromPartial(object: Partial<_134.Proof>): _134.Proof;
        };
        ValueOp: {
            encode(message: _134.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ValueOp;
            fromPartial(object: Partial<_134.ValueOp>): _134.ValueOp;
        };
        DominoOp: {
            encode(message: _134.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.DominoOp;
            fromPartial(object: Partial<_134.DominoOp>): _134.DominoOp;
        };
        ProofOp: {
            encode(message: _134.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOp;
            fromPartial(object: Partial<_134.ProofOp>): _134.ProofOp;
        };
        ProofOps: {
            encode(message: _134.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOps;
            fromPartial(object: Partial<_134.ProofOps>): _134.ProofOps;
        };
        PublicKey: {
            encode(message: _133.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PublicKey;
            fromPartial(object: Partial<_133.PublicKey>): _133.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _135.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.BitArray;
                fromPartial(object: Partial<_135.BitArray>): _135.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _136.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ProtocolVersion;
            fromPartial(object: Partial<_136.ProtocolVersion>): _136.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _136.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfo;
            fromPartial(object: Partial<_136.NodeInfo>): _136.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _136.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfoOther;
            fromPartial(object: Partial<_136.NodeInfoOther>): _136.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _136.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerInfo;
            fromPartial(object: Partial<_136.PeerInfo>): _136.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _136.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerAddressInfo;
            fromPartial(object: Partial<_136.PeerAddressInfo>): _136.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _141.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ValidatorSet;
            fromPartial(object: Partial<_141.ValidatorSet>): _141.ValidatorSet;
        };
        Validator: {
            encode(message: _141.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Validator;
            fromPartial(object: Partial<_141.Validator>): _141.Validator;
        };
        SimpleValidator: {
            encode(message: _141.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SimpleValidator;
            fromPartial(object: Partial<_141.SimpleValidator>): _141.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _140.BlockIDFlag;
        blockIDFlagToJSON(object: _140.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _140.SignedMsgType;
        signedMsgTypeToJSON(object: _140.SignedMsgType): string;
        BlockIDFlag: typeof _140.BlockIDFlag;
        BlockIDFlagSDKType: typeof _140.BlockIDFlagSDKType;
        SignedMsgType: typeof _140.SignedMsgType;
        SignedMsgTypeSDKType: typeof _140.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _140.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.PartSetHeader;
            fromPartial(object: Partial<_140.PartSetHeader>): _140.PartSetHeader;
        };
        Part: {
            encode(message: _140.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Part;
            fromPartial(object: Partial<_140.Part>): _140.Part;
        };
        BlockID: {
            encode(message: _140.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockID;
            fromPartial(object: Partial<_140.BlockID>): _140.BlockID;
        };
        Header: {
            encode(message: _140.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Header;
            fromPartial(object: Partial<_140.Header>): _140.Header;
        };
        Data: {
            encode(message: _140.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Data;
            fromPartial(object: Partial<_140.Data>): _140.Data;
        };
        Vote: {
            encode(message: _140.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Vote;
            fromPartial(object: Partial<_140.Vote>): _140.Vote;
        };
        Commit: {
            encode(message: _140.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Commit;
            fromPartial(object: Partial<_140.Commit>): _140.Commit;
        };
        CommitSig: {
            encode(message: _140.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CommitSig;
            fromPartial(object: Partial<_140.CommitSig>): _140.CommitSig;
        };
        Proposal: {
            encode(message: _140.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Proposal;
            fromPartial(object: Partial<_140.Proposal>): _140.Proposal;
        };
        SignedHeader: {
            encode(message: _140.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SignedHeader;
            fromPartial(object: Partial<_140.SignedHeader>): _140.SignedHeader;
        };
        LightBlock: {
            encode(message: _140.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.LightBlock;
            fromPartial(object: Partial<_140.LightBlock>): _140.LightBlock;
        };
        BlockMeta: {
            encode(message: _140.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockMeta;
            fromPartial(object: Partial<_140.BlockMeta>): _140.BlockMeta;
        };
        TxProof: {
            encode(message: _140.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.TxProof;
            fromPartial(object: Partial<_140.TxProof>): _140.TxProof;
        };
        ConsensusParams: {
            encode(message: _139.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConsensusParams;
            fromPartial(object: Partial<_139.ConsensusParams>): _139.ConsensusParams;
        };
        BlockParams: {
            encode(message: _139.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.BlockParams;
            fromPartial(object: Partial<_139.BlockParams>): _139.BlockParams;
        };
        EvidenceParams: {
            encode(message: _139.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.EvidenceParams;
            fromPartial(object: Partial<_139.EvidenceParams>): _139.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _139.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ValidatorParams;
            fromPartial(object: Partial<_139.ValidatorParams>): _139.ValidatorParams;
        };
        VersionParams: {
            encode(message: _139.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.VersionParams;
            fromPartial(object: Partial<_139.VersionParams>): _139.VersionParams;
        };
        HashedParams: {
            encode(message: _139.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.HashedParams;
            fromPartial(object: Partial<_139.HashedParams>): _139.HashedParams;
        };
        Evidence: {
            encode(message: _138.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Evidence;
            fromPartial(object: Partial<_138.Evidence>): _138.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _138.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DuplicateVoteEvidence;
            fromPartial(object: Partial<_138.DuplicateVoteEvidence>): _138.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _138.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LightClientAttackEvidence;
            fromPartial(object: Partial<_138.LightClientAttackEvidence>): _138.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _138.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.EvidenceList;
            fromPartial(object: Partial<_138.EvidenceList>): _138.EvidenceList;
        };
        Block: {
            encode(message: _137.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Block;
            fromPartial(object: Partial<_137.Block>): _137.Block;
        };
    };
    const version: {
        App: {
            encode(message: _142.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.App;
            fromPartial(object: Partial<_142.App>): _142.App;
        };
        Consensus: {
            encode(message: _142.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Consensus;
            fromPartial(object: Partial<_142.Consensus>): _142.Consensus;
        };
    };
}
