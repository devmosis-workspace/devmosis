import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _99.AccessType;
            accessTypeToJSON(object: _99.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _99.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _99.ContractCodeHistoryOperationType): string;
            AccessType: typeof _99.AccessType;
            AccessTypeSDKType: typeof _99.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _99.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _99.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _99.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessTypeParam;
                fromPartial(object: Partial<_99.AccessTypeParam>): _99.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _99.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessConfig;
                fromPartial(object: Partial<_99.AccessConfig>): _99.AccessConfig;
            };
            Params: {
                encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromPartial(object: Partial<_99.Params>): _99.Params;
            };
            CodeInfo: {
                encode(message: _99.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfo;
                fromPartial(object: Partial<_99.CodeInfo>): _99.CodeInfo;
            };
            ContractInfo: {
                encode(message: _99.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractInfo;
                fromPartial(object: Partial<_99.ContractInfo>): _99.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _99.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_99.ContractCodeHistoryEntry>): _99.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _99.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AbsoluteTxPosition;
                fromPartial(object: Partial<_99.AbsoluteTxPosition>): _99.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _99.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Model;
                fromPartial(object: Partial<_99.Model>): _99.Model;
            };
            MsgStoreCode: {
                encode(message: _98.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCode;
                fromPartial(object: Partial<_98.MsgStoreCode>): _98.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _98.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCodeResponse;
                fromPartial(object: Partial<_98.MsgStoreCodeResponse>): _98.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _98.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContract;
                fromPartial(object: Partial<_98.MsgInstantiateContract>): _98.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _98.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_98.MsgInstantiateContractResponse>): _98.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _98.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContract;
                fromPartial(object: Partial<_98.MsgExecuteContract>): _98.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _98.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContractResponse;
                fromPartial(object: Partial<_98.MsgExecuteContractResponse>): _98.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _98.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContract;
                fromPartial(object: Partial<_98.MsgMigrateContract>): _98.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _98.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContractResponse;
                fromPartial(object: Partial<_98.MsgMigrateContractResponse>): _98.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _98.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdmin;
                fromPartial(object: Partial<_98.MsgUpdateAdmin>): _98.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _98.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_98.MsgUpdateAdminResponse>): _98.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _98.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdmin;
                fromPartial(object: Partial<_98.MsgClearAdmin>): _98.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _98.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdminResponse;
                fromPartial(_: Partial<_98.MsgClearAdminResponse>): _98.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _97.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoRequest;
                fromPartial(object: Partial<_97.QueryContractInfoRequest>): _97.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _97.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoResponse;
                fromPartial(object: Partial<_97.QueryContractInfoResponse>): _97.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _97.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryRequest;
                fromPartial(object: Partial<_97.QueryContractHistoryRequest>): _97.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _97.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryResponse;
                fromPartial(object: Partial<_97.QueryContractHistoryResponse>): _97.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _97.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_97.QueryContractsByCodeRequest>): _97.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _97.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_97.QueryContractsByCodeResponse>): _97.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _97.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateRequest;
                fromPartial(object: Partial<_97.QueryAllContractStateRequest>): _97.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _97.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateResponse;
                fromPartial(object: Partial<_97.QueryAllContractStateResponse>): _97.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _97.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateRequest;
                fromPartial(object: Partial<_97.QueryRawContractStateRequest>): _97.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _97.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateResponse;
                fromPartial(object: Partial<_97.QueryRawContractStateResponse>): _97.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _97.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_97.QuerySmartContractStateRequest>): _97.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _97.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_97.QuerySmartContractStateResponse>): _97.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _97.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeRequest;
                fromPartial(object: Partial<_97.QueryCodeRequest>): _97.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _97.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CodeInfoResponse;
                fromPartial(object: Partial<_97.CodeInfoResponse>): _97.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _97.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeResponse;
                fromPartial(object: Partial<_97.QueryCodeResponse>): _97.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _97.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesRequest;
                fromPartial(object: Partial<_97.QueryCodesRequest>): _97.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _97.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesResponse;
                fromPartial(object: Partial<_97.QueryCodesResponse>): _97.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _97.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_97.QueryPinnedCodesRequest>): _97.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _97.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_97.QueryPinnedCodesResponse>): _97.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _96.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.StoreCodeProposal;
                fromPartial(object: Partial<_96.StoreCodeProposal>): _96.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _96.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.InstantiateContractProposal;
                fromPartial(object: Partial<_96.InstantiateContractProposal>): _96.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _96.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MigrateContractProposal;
                fromPartial(object: Partial<_96.MigrateContractProposal>): _96.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _96.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SudoContractProposal;
                fromPartial(object: Partial<_96.SudoContractProposal>): _96.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _96.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ExecuteContractProposal;
                fromPartial(object: Partial<_96.ExecuteContractProposal>): _96.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _96.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UpdateAdminProposal;
                fromPartial(object: Partial<_96.UpdateAdminProposal>): _96.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _96.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClearAdminProposal;
                fromPartial(object: Partial<_96.ClearAdminProposal>): _96.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _96.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PinCodesProposal;
                fromPartial(object: Partial<_96.PinCodesProposal>): _96.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _96.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UnpinCodesProposal;
                fromPartial(object: Partial<_96.UnpinCodesProposal>): _96.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _95.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCSend;
                fromPartial(object: Partial<_95.MsgIBCSend>): _95.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _95.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCCloseChannel;
                fromPartial(object: Partial<_95.MsgIBCCloseChannel>): _95.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _94.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState_GenMsgs;
                fromPartial(object: Partial<_94.GenesisState_GenMsgs>): _94.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _94.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Code;
                fromPartial(object: Partial<_94.Code>): _94.Code;
            };
            Contract: {
                encode(message: _94.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Contract;
                fromPartial(object: Partial<_94.Contract>): _94.Contract;
            };
            Sequence: {
                encode(message: _94.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Sequence;
                fromPartial(object: Partial<_94.Sequence>): _94.Sequence;
            };
        };
    }
}
