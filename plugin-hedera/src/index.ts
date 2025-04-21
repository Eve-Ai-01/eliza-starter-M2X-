import type { Plugin } from "@elizaos/core";
import { hederaClientProvider } from "./providers/client";
import { balanceHbarAction } from "./actions/balance-hbar/balance-hbar";
import { balanceHtsAction } from "./actions/balance-hts/balance-hts";
import { balancesAllTokensAction } from "./actions/balances-all-tokens/balance-all-tokens";
import { transferAction } from "./actions/transfer/transfer";
import { createTokenAction } from "./actions/create-token/create-token";
import { associateTokenAction } from "./actions/associate-token/associate-token";
import { tokenHoldersAction } from "./actions/token-holders/token-holders";
import { airdropTokenAction } from "./actions/airdrop-token/airdrop-token";
import { rejectTokenAction } from "./actions/reject-token/reject-token";
import { pendingAirdropsAction } from "./actions/pending-airdrops/pending-airdrops";
import { claimAirdropAction } from "./actions/claim-airdrop/claim-airdrop";
import { transferTokenAction } from "./actions/transfer-token/transfer-token";
import { createTopicAction } from "./actions/create-topic/create-topic";
import { deleteTopicAction } from "./actions/delete-topic/delete-topic";
import { dissociateTokenAction } from "./actions/dissociate-token/dissociate-token";
import { topicInfoAction } from "./actions/topic-info/topic-info";
import { submitTopicMessageAction } from "./actions/submit-topic-message/submit-topic-message";
import { getTopicMessagesAction } from "./actions/get-topic-messages/get-topic-messages";
import { mintTokenAction } from "./actions/mint-token/mint-token";
import { setSpendingApprovalAction } from "./actions/set-spending-approval/set-spending-approval";
import { createNFTTokenAction } from "./actions/create-nft-token/create-nft-token";
import { mintNFTTokenAction } from "./actions/mint-nft-token/mint-token";

export const hederaPlugin: Plugin = {
    name: "Hedera",
    description: "Hedera blockchain integration plugin",
    providers: [hederaClientProvider],
    evaluators: [],
    services: [],
    actions: [
        balanceHbarAction,
        balanceHtsAction,
        balancesAllTokensAction,
        transferAction,
        createTokenAction,
        tokenHoldersAction,
        associateTokenAction,
        airdropTokenAction,
        rejectTokenAction,
        pendingAirdropsAction,
        claimAirdropAction,
        transferTokenAction,
        createTopicAction,
        deleteTopicAction,
        dissociateTokenAction,
        topicInfoAction,
        submitTopicMessageAction,
        getTopicMessagesAction,
        mintTokenAction,
        createNFTTokenAction,
        mintNFTTokenAction,
        setSpendingApprovalAction,
        createNFTTokenAction,
    ],
};

export default hederaPlugin;
export * from "./actions/index";
