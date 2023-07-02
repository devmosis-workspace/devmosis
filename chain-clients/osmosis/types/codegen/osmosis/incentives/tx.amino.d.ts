import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface MsgCreateGaugeAminoType extends AminoMsg {
    type: "osmosis/incentives/create-gauge";
    value: {
        is_perpetual: boolean;
        owner: string;
        distribute_to: {
            lock_query_type: number;
            denom: string;
            duration: {
                seconds: string;
                nanos: number;
            };
            timestamp: {
                seconds: string;
                nanos: number;
            };
        };
        coins: {
            denom: string;
            amount: string;
        }[];
        start_time: {
            seconds: string;
            nanos: number;
        };
        num_epochs_paid_over: string;
    };
}
export interface MsgAddToGaugeAminoType extends AminoMsg {
    type: "osmosis/incentives/add-to-gauge";
    value: {
        owner: string;
        gauge_id: string;
        rewards: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: ({ isPerpetual, owner, distributeTo, coins, startTime, numEpochsPaidOver }: MsgCreateGauge) => MsgCreateGaugeAminoType["value"];
        fromAmino: ({ is_perpetual, owner, distribute_to, coins, start_time, num_epochs_paid_over }: MsgCreateGaugeAminoType["value"]) => MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: ({ owner, gaugeId, rewards }: MsgAddToGauge) => MsgAddToGaugeAminoType["value"];
        fromAmino: ({ owner, gauge_id, rewards }: MsgAddToGaugeAminoType["value"]) => MsgAddToGauge;
    };
};
