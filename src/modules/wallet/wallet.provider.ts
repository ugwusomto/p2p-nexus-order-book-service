import { DataSource } from "typeorm";
import { INJECTION_TOKENS } from "src/constants/index.constant";
import Wallet from "src/entities/wallet.entity";

const WalletProvider = [
    {
        provide:INJECTION_TOKENS.WALLET_REPOSITORY,
        useFactory: (dataSource:DataSource) => (dataSource.getRepository(Wallet)),
        inject:[INJECTION_TOKENS.DATA_SOURCE]
    }
];

export default WalletProvider;