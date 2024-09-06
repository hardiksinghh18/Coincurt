const exchangeData = [
    {
      id: 1,
      name: "Binance",
      introduction: "Binance is the world’s largest cryptocurrency exchange by trading volume, founded by Changpeng Zhao in 2017. It offers a comprehensive suite of services such as spot trading, futures trading, savings, staking, and DeFi solutions. Its user-friendly platform and industry-leading liquidity make it a go-to choice for retail and institutional investors globally. Binance is known for its native token, Binance Coin (BNB), which is used for transaction fee discounts and other features within the ecosystem.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.9,
      listingFee: "Min. $100,000"
    },
    {
      id: 2,
      name: "Coinbase Exchange",
      introduction: "Coinbase, established in 2012 by Brian Armstrong and Fred Ehrsam, is one of the leading crypto exchanges in the United States. It is well-known for its compliance with regulatory standards and is publicly traded on the NASDAQ. The platform provides easy access for beginners while offering advanced features for institutional traders through its Coinbase Pro platform. Coinbase’s focus on security and ease of use has made it a popular choice for US-based investors.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.8,
      listingFee: "Min. $75,000"
    },
    {
      id: 3,
      name: "OKX",
      introduction: "OKX is a Seychelles-based crypto exchange launched in 2017. It offers a diverse set of services, including spot and derivatives trading, decentralized finance (DeFi) opportunities, staking, and an innovative marketplace for NFTs. The platform is known for its security features, innovative products, and support for a wide array of cryptocurrencies. OKX continues to expand its ecosystem by integrating blockchain technology into the trading experience.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.7,
      listingFee: "Min. $70,000"
    },
    {
      id: 4,
      name: "Bybit",
      introduction: "Bybit, founded in 2018, has quickly grown into one of the leading cryptocurrency exchanges for derivatives trading. With its emphasis on perpetual futures contracts, Bybit has gained popularity among traders looking for high-leverage products. The exchange also offers innovative features such as grid trading and copy trading, making it attractive to both experienced and new traders. Bybit prides itself on its 24/7 multilingual customer support and robust trading engine.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.6,
      listingFee: "Min. $60,000"
    },
    {
      id: 5,
      name: "Upbit",
      introduction: "Upbit, launched in 2017 in South Korea, is a top-tier cryptocurrency exchange with a strong presence in the Asian markets. Known for its partnership with Bittrex, Upbit offers a wide selection of cryptocurrencies for spot trading. The exchange is recognized for its strict adherence to regulatory guidelines, making it a trusted platform for traders seeking security and transparency. Upbit also has a solid reputation for liquidity and trading volume in the Korean market.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.5,
      listingFee: "Min. $65,000"
    },
    {
      id: 6,
      name: "Kraken",
      introduction: "Founded in 2011, Kraken is one of the oldest and most respected cryptocurrency exchanges in the world. Based in the US, Kraken offers a wide range of trading pairs and fiat currency support, including USD, EUR, and GBP. It is known for its robust security protocols, transparent operations, and deep liquidity. Kraken caters to both retail and institutional investors and provides advanced trading features like margin and futures trading.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.5,
      listingFee: "Min. $60,000"
    },
    {
      id: 7,
      name: "Gate.io",
      introduction: "Gate.io is a global cryptocurrency exchange that offers a diverse range of assets and trading products, including spot trading, futures, lending, and staking. Established in 2013, it has earned a reputation for listing new and emerging cryptocurrencies. Gate.io is known for its user-friendly interface, security features, and innovative tools like copy trading, making it accessible to both new and experienced traders.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.4,
      listingFee: "Min. $50,000"
    },
    {
      id: 8,
      name: "HTX (formerly Huobi)",
      introduction: "HTX, founded in 2013, is a globally recognized cryptocurrency exchange with a strong user base in Asia. It offers spot and derivatives trading, staking services, and a variety of financial products. HTX has been a pioneer in the crypto space, offering high liquidity and deep order books. It is well-regarded for its security features and strong commitment to regulatory compliance in various jurisdictions.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.4,
      listingFee: "Min. $80,000"
    },
    {
      id: 9,
      name: "Bitfinex",
      introduction: "Bitfinex, founded in 2012, is a major player in the cryptocurrency exchange space, particularly known for its liquidity and advanced trading features. The platform offers spot trading, margin trading, and lending services. Bitfinex is a go-to exchange for institutional traders due to its advanced features, customizable user interface, and extensive API for algorithmic trading. It has maintained a strong presence in the market despite challenges in its early years.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.3,
      listingFee: "Min. $60,000"
    },
    {
      id: 10,
      name: "KuCoin",
      introduction: "KuCoin is a globally recognized cryptocurrency exchange launched in 2017. It offers a vast range of services, including spot trading, futures, staking, and lending. KuCoin has gained popularity for its user-friendly interface, high liquidity, and a wide variety of altcoins. With over 600 cryptocurrencies listed, KuCoin is a great platform for users seeking lesser-known assets. It also provides features like KuCoin Shares (KCS), offering discounts and rewards.",
      exchangeType: "CEX",
      category: "Tier 1",
      trustRating: 9.2,
      listingFee: "Min. $50,000"
    },

    {
        id: 11,
        name: "MEXC",
        introduction: "MEXC, established in 2018, has quickly grown into a popular exchange among traders, particularly those seeking altcoins. Known for listing new and emerging tokens, MEXC provides a wide variety of trading options including spot, futures, and staking. The platform’s global presence and competitive fees make it a favorite among both retail and institutional investors.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 9.2,
        listingFee: "Min. $50,000"
      },
      {
        id: 12,
        name: "Bitget",
        introduction: "Bitget is a centralized exchange that offers users a diverse range of trading services, including derivatives, copy trading, and staking. Launched in 2018, Bitget has grown rapidly, particularly in the Asian markets. It is well-known for its social trading features, where users can copy the strategies of top traders. Its user-friendly platform, security measures, and liquidity have made it a popular choice among retail traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 9.2,
        listingFee: "Min. $60,000"
      },
      {
        id: 13,
        name: "Crypto.com Exchange",
        introduction: "Crypto.com, founded in 2016, is a complete crypto ecosystem offering not only an exchange but also services like a crypto debit card, wallet, and DeFi staking. It has a global presence and is known for its aggressive marketing campaigns, including sponsorship deals with major sports organizations. The platform is highly user-friendly, offering both beginner and advanced features, making it accessible to a broad audience.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 9.1,
        listingFee: "Min. $75,000"
      },
      {
        id: 14,
        name: "BingX",
        introduction: "BingX is a centralized exchange focused on derivatives and spot trading. Launched in 2018, it has gained a reputation for its robust trading engine and support for leverage trading. BingX provides copy trading, allowing users to mirror the trades of successful traders, which has made it popular among new and seasoned traders alike. Its focus on innovative trading features and security makes it a trusted exchange.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 9.0,
        listingFee: "Min. $50,000"
      },
      {
        id: 15,
        name: "Bitstamp",
        introduction: "Bitstamp, established in 2011, is one of the longest-running cryptocurrency exchanges in the world. Based in Luxembourg, Bitstamp offers a secure and regulated platform for trading cryptocurrencies with fiat currencies like USD and EUR. It is known for its deep liquidity, competitive fees, and strong security measures, making it a trusted platform for retail and institutional traders alike.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 9.0,
        listingFee: "Min. $60,000"
      },
      {
        id: 16,
        name: "BitMart",
        introduction: "BitMart is a centralized exchange offering a wide range of cryptocurrencies, including newly launched tokens. Established in 2017, BitMart has grown rapidly and now serves millions of users globally. The platform is known for its competitive fees, diverse crypto offerings, and security features, making it a popular choice for altcoin traders. BitMart also offers staking and lending services to enhance user experience.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.9,
        listingFee: "Min. $50,000"
      },
      {
        id: 17,
        name: "Bithumb",
        introduction: "Bithumb is one of South Korea's largest cryptocurrency exchanges, founded in 2014. It is known for its deep liquidity, extensive fiat support, and wide selection of cryptocurrencies. Bithumb plays a key role in the Korean crypto market and is heavily regulated, offering a secure and user-friendly trading experience. The platform caters to retail traders and institutional investors alike.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.9,
        listingFee: "Min. $60,000"
      },
      {
        id: 18,
        name: "LBank",
        introduction: "LBank, founded in 2015, is a globally recognized cryptocurrency exchange known for its wide selection of cryptocurrencies, especially altcoins. The platform offers spot trading, futures, and staking services. LBank has a strong presence in Asia and has built a reputation for listing emerging tokens. Its competitive fees and liquidity make it an attractive platform for retail traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.8,
        listingFee: "Min. $50,000"
      },
      {
        id: 19,
        name: "Gemini",
        introduction: "Gemini, founded in 2014 by the Winklevoss twins, is a US-based cryptocurrency exchange that places a strong emphasis on regulatory compliance and security. Gemini is known for offering a secure and regulated environment for trading digital assets and has built a reputation for its user-friendly interface and institutional-grade features. Gemini offers custody services, which are popular among institutional clients.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.8,
        listingFee: "Min. $60,000"
      },
      {
        id: 20,
        name: "bitFlyer",
        introduction: "bitFlyer is one of Japan’s largest and most trusted cryptocurrency exchanges. Established in 2014, it offers a secure platform for buying, selling, and trading Bitcoin and other cryptocurrencies. bitFlyer operates globally, with branches in the US and Europe, and is known for its stringent regulatory compliance and security features, making it a top choice for institutional and retail traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.7,
        listingFee: "Min. $50,000"
      },

      {
        id: 21,
        name: "XT.COM",
        introduction: "XT.COM, established in 2018, is a fast-growing global cryptocurrency exchange known for its diverse range of services, including spot trading, derivatives, and staking. It is popular among traders looking for liquidity and access to a variety of altcoins. XT.COM also has a user-friendly interface and offers trading in multiple fiat currencies, making it accessible to a broad range of users.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.6,
        listingFee: "Min. $50,000"
      },
      {
        id: 22,
        name: "ProBit Global",
        introduction: "ProBit Global is a cryptocurrency exchange launched in 2018 that offers users access to a wide variety of altcoins, with over 300 listed cryptocurrencies. It is particularly known for its initial exchange offerings (IEOs) and competitive fee structure. ProBit has built a reputation for listing emerging tokens and providing deep liquidity, making it a go-to platform for altcoin enthusiasts.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.5,
        listingFee: "Min. $50,000"
      },
      {
        id: 23,
        name: "P2B",
        introduction: "P2B is a centralized exchange known for its support of new projects and its focus on providing liquidity for altcoins. It offers spot trading, margin trading, and IEO services, making it a hub for token launches. P2B is particularly popular among projects looking for exposure and initial liquidity, while traders appreciate its wide selection of cryptocurrencies.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.4,
        listingFee: "Min. $50,000"
      },
      {
        id: 24,
        name: "CoinW",
        introduction: "CoinW is a globally oriented cryptocurrency exchange, launched in 2017, offering spot and derivatives trading, staking, and yield farming. Known for its strong liquidity and comprehensive range of cryptocurrencies, CoinW is popular among retail traders. The platform is user-friendly and offers various financial products, making it attractive to both beginners and experienced traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.4,
        listingFee: "Min. $50,000"
      },
      {
        id: 25,
        name: "Hotcoin",
        introduction: "Hotcoin is an Australia-based cryptocurrency exchange offering a wide variety of cryptocurrencies and competitive fees. Established in 2017, it has built a reputation for its strong liquidity and deep order books. Hotcoin supports a range of crypto and fiat trading pairs and provides staking and lending services, making it a well-rounded platform for both new and seasoned traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.3,
        listingFee: "Min. $50,000"
      },
      {
        id: 26,
        name: "DigiFinex",
        introduction: "DigiFinex, founded in 2017, is a global cryptocurrency exchange offering spot and margin trading, staking, and futures. It is widely known for its liquidity and strong security measures. The platform has gained popularity due to its competitive fees and support for a wide range of cryptocurrencies, making it a preferred choice for retail traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.3,
        listingFee: "Min. $50,000"
      },
      {
        id: 27,
        name: "LATOKEN",
        introduction: "LATOKEN is a cryptocurrency exchange known for its focus on liquidity for new projects and tokens. Established in 2017, it offers a range of services including spot trading, staking, and initial exchange offerings (IEOs). LATOKEN is popular among new projects looking to gain exposure, while traders appreciate its user-friendly interface and wide selection of altcoins.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.2,
        listingFee: "Min. $50,000"
      },
      {
        id: 28,
        name: "WhiteBIT",
        introduction: "WhiteBIT is a European cryptocurrency exchange that focuses on providing liquidity and security for both retail and institutional traders. Established in 2018, WhiteBIT offers spot trading, staking, and advanced trading features. Its regulatory compliance and strong security measures make it a popular choice among European traders. The platform also supports a wide range of fiat currencies.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.1,
        listingFee: "Min. $50,000"
      },
      {
        id: 29,
        name: "Biconomy.com",
        introduction: "Biconomy.com is a centralized exchange offering spot and margin trading, staking, and lending services. The platform is known for its low fees, strong liquidity, and wide range of supported cryptocurrencies. Biconomy.com is popular among retail traders looking for an accessible platform with a strong emphasis on security and regulatory compliance.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.0,
        listingFee: "Min. $45,000"
      },
      {
        id: 30,
        name: "AscendEX (BitMax)",
        introduction: "AscendEX, formerly known as BitMax, is a centralized exchange offering advanced trading services including spot, margin, and futures trading. It is popular among institutional investors and professional traders due to its deep liquidity and advanced features. AscendEX also offers staking services and is known for listing new and emerging tokens, making it a hub for altcoin trading.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.0,
        listingFee: "Min. $50,000"
      },
      {
        id: 31,
        name: "Bitrue",
        introduction: "Bitrue is a centralized cryptocurrency exchange known for its support of new and emerging tokens, as well as its competitive fees. Launched in 2018, Bitrue has quickly grown in popularity due to its user-friendly platform and diverse range of crypto assets. The platform offers spot trading, staking, and lending services, making it a comprehensive platform for both new and experienced traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.0,
        listingFee: "Min. $50,000"
      },
      {
        id: 32,
        name: "Coinstore",
        introduction: "Coinstore is a centralized cryptocurrency exchange offering a wide range of trading pairs, staking, and lending services. The platform is known for its competitive fees, strong liquidity, and advanced security features. Toobit caters to both retail and institutional traders, offering a user-friendly interface and advanced trading tools.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 7.0,
        listingFee: "Min. $45,000"
      },
      {
        id: 33,
        name: "Coincheck",
        introduction: "Coincheck is one of Japan’s leading cryptocurrency exchanges, offering a wide range of crypto assets and fiat pairs. Established in 2014, Coincheck is known for its regulatory compliance and user-friendly platform. It is particularly popular in Japan due to its integration with local fiat currencies and its strong security features, making it a trusted platform for retail traders.",
        exchangeType: "CEX",
        category: "Tier 1",
        trustRating: 8.0,
        listingFee: "Min. $50,000"
      }
  ];
  

  const dexData = [
    {
      id: 1,
      name: "Uniswap",
      introduction: "Uniswap is the largest decentralized exchange built on the Ethereum blockchain. Launched in 2018 by Hayden Adams, Uniswap popularized the Automated Market Maker (AMM) model, allowing users to trade directly from their wallets. With a vast range of supported tokens and deep liquidity pools, Uniswap has become the go-to platform for trading ERC-20 tokens and liquidity provision.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 9.9,
      listingFee: "Min. $0"
    },
    {
      id: 2,
      name: "SushiSwap",
      introduction: "SushiSwap is a decentralized exchange that originated as a fork of Uniswap. It offers similar functionality but with additional features like staking and yield farming through its native token, SUSHI. Since its launch in 2020, SushiSwap has grown into a multi-chain decentralized exchange, providing liquidity across various blockchains and offering users governance rights over the protocol.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 9.5,
      listingFee: "Min. $0"
    },
    {
      id: 3,
      name: "PancakeSwap",
      introduction: "PancakeSwap is the leading decentralized exchange on the Binance Smart Chain (BSC). It offers low fees and high-speed transactions, making it a popular alternative to Ethereum-based DEXs. PancakeSwap provides features like staking, yield farming, and token swapping, making it a comprehensive DeFi platform. Its native token, CAKE, is used for governance and rewards.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 9.4,
      listingFee: "Min. $0"
    },
    {
      id: 4,
      name: "1inch",
      introduction: "1inch is a decentralized exchange aggregator that sources liquidity from multiple DEXs to provide users with the best prices. Launched in 2019, 1inch has quickly gained popularity for its efficient routing algorithm, which minimizes slippage and optimizes trade execution. The platform supports multiple blockchains, including Ethereum, Binance Smart Chain, and Polygon.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 9.2,
      listingFee: "Min. $0"
    },
    {
      id: 5,
      name: "Curve Finance",
      introduction: "Curve Finance is a decentralized exchange specializing in stablecoin trading with low slippage and low fees. Launched in 2020, Curve’s automated market maker (AMM) is designed to minimize impermanent loss, making it popular among liquidity providers. Curve is highly regarded for its deep liquidity and its governance token, CRV, which allows users to participate in protocol decisions.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 9.0,
      listingFee: "Min. $0"
    },
    {
      id: 6,
      name: "Balancer",
      introduction: "Balancer is a decentralized exchange and automated portfolio manager built on the Ethereum network. It allows users to create customizable liquidity pools with multiple tokens, offering a more flexible way to earn fees from providing liquidity. Balancer’s innovative design and governance structure, powered by the BAL token, have made it a popular choice for both traders and liquidity providers.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 8.9,
      listingFee: "Min. $0"
    },
    {
      id: 7,
      name: "KyberSwap",
      introduction: "KyberSwap is a decentralized exchange aggregator that provides liquidity from multiple DEXs. Launched in 2018, it allows for seamless token swaps at competitive rates. KyberSwap offers users the ability to provide liquidity and earn fees, while its governance token, KNC, allows holders to participate in protocol governance.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 8.8,
      listingFee: "Min. $0"
    },
    {
      id: 8,
      name: "MDEX",
      introduction: "MDEX is a decentralized exchange on both the Huobi Eco Chain (HECO) and Binance Smart Chain (BSC). It provides high liquidity and low transaction fees, focusing on DeFi services like staking, liquidity mining, and token swaps. MDEX has gained popularity for its dual-chain model and its governance token, MDX, which allows users to participate in the platform’s development.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 8.5,
      listingFee: "Min. $0"
    },
    {
      id: 9,
      name: "Bancor",
      introduction: "Bancor is a decentralized exchange launched in 2017 that pioneered the concept of automated market makers (AMMs). Bancor allows users to trade tokens directly from their wallets without needing a counterparty. Its focus on impermanent loss protection and single-sided liquidity has attracted a large number of liquidity providers. The platform’s native token, BNT, is used for governance and liquidity rewards.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 8.3,
      listingFee: "Min. $0"
    },
    {
      id: 10,
      name: "QuickSwap",
      introduction: "QuickSwap is a decentralized exchange built on the Polygon network, offering fast and low-cost transactions. It uses the AMM model to facilitate token swaps and liquidity provision. QuickSwap’s low fees and high-speed transactions have made it a popular choice for users looking to avoid Ethereum’s high gas fees while still interacting with DeFi protocols.",
      exchangeType: "DEX",
      category: "Tier 1",
      trustRating: 8.1,
      listingFee: "Min. $0"
    }
  ];
 
  
  const launchpads = [
    {
      id: 1,
      name: "DAO Maker",
      introduction: "DAO Maker, established in 2018, is a leading crypto launchpad and investment platform. It allows users to participate in early-stage token sales, providing retail investors access to promising projects. DAO Maker has a rigorous vetting process and helps projects with strategic advisory and marketing support.",
      category: "Tier 1",
      trustRating: 9.8,
      listingFee: "Negotiable"
    },
    {
      id: 2,
      name: "Polkastarter",
      introduction: "Polkastarter is a decentralized launchpad that enables projects to raise funds through initial decentralized offerings (IDOs). Launched in 2020, it is known for its cross-chain compatibility and a wide variety of vetted token sales. Polkastarter has become a go-to platform for early-stage DeFi projects.",
      category: "Tier 1",
      trustRating: 9.7,
      listingFee: "Negotiable"
    },
    {
      id: 3,
      name: "TrustSwap",
      introduction: "TrustSwap is a multi-service platform that includes a launchpad for token offerings. Established in 2020, TrustSwap enables projects to conduct secure and transparent token launches. It offers smart contract services, token locks, and staking, making it a comprehensive solution for new crypto projects.",
      category: "Tier 1",
      trustRating: 9.5,
      listingFee: "Negotiable"
    },
    {
      id: 4,
      name: "BSCPad",
      introduction: "BSCPad is the first decentralized launchpad built on the Binance Smart Chain. It is designed to facilitate fair and decentralized token sales, providing a multi-tiered staking mechanism for participants. BSCPad is known for its robust community and exclusive access to Binance Smart Chain projects.",
      category: "Tier 1",
      trustRating: 9.4,
      listingFee: "Negotiable"
    },
    {
      id: 5,
      name: "Avalaunch",
      introduction: "Avalaunch is the launchpad native to the Avalanche blockchain. Launched in 2021, it allows users to participate in IDOs with fast transaction speeds and low fees. Avalaunch is known for its curated project listings and emphasis on community participation.",
      category: "Tier 1",
      trustRating: 9.3,
      listingFee: "Negotiable"
    }
  ];

  const securityFirms = [
    {
      id: 1,
      name: "CertiK",
      introduction: "CertiK, founded in 2018, is one of the leading blockchain security companies. It provides smart contract auditing and blockchain security solutions for DeFi projects, helping prevent hacks and vulnerabilities. CertiK’s deep expertise and rigorous auditing process make it a trusted name in the crypto space.",
      category: "Tier 1",
      trustRating: 9.9,
      auditFee: "Min. $10,000"
    },
    {
      id: 2,
      name: "Quantstamp",
      introduction: "Quantstamp is a blockchain security firm offering end-to-end auditing solutions for decentralized applications. Established in 2017, Quantstamp is known for its comprehensive smart contract audits and has audited some of the largest DeFi protocols.",
      category: "Tier 1",
      trustRating: 9.8,
      auditFee: "Min. $7500"
    },
    {
      id: 3,
      name: "Hacken",
      introduction: "Hacken is a cybersecurity company that specializes in blockchain security. Founded in 2017, Hacken provides smart contract auditing, penetration testing, and bug bounty services. The firm has worked with numerous DeFi projects and has built a strong reputation for its thorough security assessments.",
      category: "Tier 1",
      trustRating: 9.7,
      auditFee: "Min. $5000"
    },
    {
      id: 4,
      name: "SlowMist",
      introduction: "SlowMist, established in 2018, is a blockchain security firm known for its rigorous auditing services and extensive threat intelligence reports. The firm offers services like smart contract audits, penetration testing, and security consulting for crypto projects.",
      category: "Tier 1",
      trustRating: 9.6,
      auditFee: "Min. $6000"
    },
    {
      id: 5,
      name: "PeckShield",
      introduction: "PeckShield is a blockchain security company that provides auditing and real-time threat detection for smart contracts. Founded in 2018, the firm has become one of the top security audit firms, known for identifying vulnerabilities and providing post-audit monitoring solutions.",
      category: "Tier 1",
      trustRating: 9.5,
      auditFee: "Min. $5500"
    }
  ];

  const marketMakingFirms = [
    {
      id: 1,
      name: "CLS",
      introduction: "CLS is a global leader in market making for digital assets. The firm provides liquidity solutions to crypto exchanges and DeFi projects, ensuring tight spreads and deep liquidity across a wide range of trading pairs.",
      category: "Tier 1",
      trustRating: 9.9,
      serviceFee: "Negotiable"
    },
    {
      id: 2,
      name: "GotBit",
      introduction: "GotBit is a market-making and liquidity provider with deep expertise in algorithmic trading, works with exchanges and token issuers to provide liquidity and ensure efficient market operations, particularly for high-volume assets.",
      category: "Tier 1",
      trustRating: 9.8,
      serviceFee: "Negotiable"
    },
    {
      id: 3,
      name: "Alameda Research",
      introduction: "Alameda Research, founded by Sam Bankman-Fried in 2017, is a quantitative cryptocurrency trading firm that provides liquidity and market-making services. Alameda plays a key role in maintaining liquidity across major crypto exchanges and token projects.",
      category: "Tier 1",
      trustRating: 9.7,
      serviceFee: "Negotiable"
    },
    {
      id: 4,
      name: "Kairon Labs",
      introduction: "Kairon Labs is a professional market maker specializing in providing liquidity solutions for token projects. Founded in 2017, the firm works closely with both centralized and decentralized exchanges to maintain market efficiency and reduce slippage.",
      category: "Tier 1",
      trustRating: 9.6,
      serviceFee: "Negotiable"
    },
    {
      id: 5,
      name: "DWF Labs",
      introduction: "DWF Labs is a market-making firm that specializes in providing algorithmic trading solutions and liquidity services. Established in 2017, DWF Labs is known for its transparent operations and providing liquidity across multiple asset classes and exchanges.",
      category: "Tier 1",
      trustRating: 9.5,
      serviceFee: "Negotiable"
    }
  ];
  
  const kols = [
    {
      id: 1,
      name: "Ivan on Tech",
      introduction: "Ivan on Tech is one of the most influential YouTubers in the crypto space, providing insights on blockchain technology, DeFi, and crypto markets. With a large following, he serves as a significant opinion leader in the Web3 and crypto education space.",
      category: "Tier 1",
      trustRating: 9.8,
      fee: "Min. Negotiable"
    },
    {
      id: 2,
      name: "BitBoy Crypto",
      introduction: "BitBoy Crypto, run by Ben Armstrong, is a popular YouTube channel and social media presence that covers crypto news, project reviews, and investment strategies. With millions of followers, BitBoy Crypto is a trusted source for many retail investors.",
      category: "Tier 1",
      trustRating: 9.7,
      fee: "Min. $30,000"
    },
    {
      id: 3,
      name: "Crypto Lark",
      introduction: "Crypto Lark, led by Lark Davis, is a popular crypto influencer and YouTuber who focuses on investment strategies and market updates. His analytical content has made him a key figure among crypto traders and investors.",
      category: "Tier 1",
      trustRating: 9.6,
      fee: "Min. $20,000"
    },
    {
      id: 4,
      name: "The Moon",
      introduction: "The Moon, run by Carl Runefelt, is a prominent crypto influencer known for providing market analysis and investment tips. He is well-known for his Bitcoin price predictions and has built a massive following in the crypto space.",
      category: "Tier 1",
      trustRating: 9.5,
      fee: "Min. $30,000"
    },
    {
      id: 5,
      name: "Altcoin Daily",
      introduction: "Altcoin Daily is a popular crypto channel run by brothers Aaron and Austin Arnold. They focus on altcoin market trends, project reviews, and general crypto news, making them a trusted source for retail investors.",
      category: "Tier 1",
      trustRating: 9.4,
      fee: "Min. $25,000"
    }
  ];
  

  const pressRelease = [
    {
      id: 1,
      name: "CoinTelegraph",
      introduction: "CoinTelegraph is one of the most widely recognized news platforms in the cryptocurrency industry, offering news, analysis, and expert opinion on blockchain and digital currencies. It provides press release services to help projects reach a global audience.",
      category: "Tier 1",
      trustRating: 9.9,
      serviceFee: "Min. $10,000"
    },
    {
      id: 2,
      name: "CoinDesk",
      introduction: "CoinDesk is a leading media outlet that provides in-depth coverage of blockchain technology and crypto markets. Established in 2013, it offers press release services to help blockchain projects gain exposure to its global audience.",
      category: "Tier 1",
      trustRating: 9.8,
      serviceFee: "Min. $12,000"
    },
    {
      id: 3,
      name: "Bitcoin.com News",
      introduction: "Bitcoin.com News is a major platform for crypto-related news and analysis. It offers press release services to help projects increase visibility within the blockchain and cryptocurrency ecosystem.",
      category: "Tier 1",
      trustRating: 9.7,
      serviceFee: "Min. $8,000"
    },
    {
      id: 4,
      name: "NewsBTC",
      introduction: "NewsBTC is a cryptocurrency news platform founded in 2013, providing news, analysis, and opinions on the blockchain industry. It offers press release services for projects looking to reach a wider crypto audience.",
      category: "Tier 1",
      trustRating: 9.6,
      serviceFee: "Min. $7,000"
    },
    {
      id: 5,
      name: "CryptoSlate",
      introduction: "CryptoSlate is a blockchain news and data platform that offers press release services to help crypto projects gain global exposure. It is known for its detailed reports on digital assets, making it a valuable platform for new projects.",
      category: "Tier 1",
      trustRating: 9.5,
      serviceFee: "Min. $6,500"
    }
  ];
  const aggregator=[
    {
      name: "CoinMarketCap",
      introduction: "CoinMarketCap, founded in 2013, is the most widely used cryptocurrency market data aggregator. It provides real-time information on coin prices, market capitalization, and trading volume across hundreds of exchanges. Known for its reliability, CoinMarketCap is a go-to resource for both retail and institutional investors.",
      category: "Tier 1",
      trustRating: 9.9,
      listingFee: 5000
    },
    {
      name: "CoinGecko",
      introduction: "CoinGecko is a leading crypto data aggregator launched in 2014. It tracks over 6,000 cryptocurrencies and provides comprehensive information such as market cap, price, and trading volume, along with additional metrics like developer activity and community engagement.",
      category: "Tier 1",
      trustRating: 9.8,
      listingFee: "N.A."
    },
    {
      name: "CoinRanking",
      introduction: "CoinRanking is a global cryptocurrency data platform that provides real-time price information, market cap, and trading volume for a wide range of tokens. Launched in 2017, CoinRanking offers an intuitive interface and regularly updates its listings with new projects.",
      category: "Tier 1",
      trustRating: 9.7,
      listingFee: "N.A."
    },
    {
      name: "Coinpaprika",
      introduction: "Coinpaprika is a cryptocurrency market research platform launched in 2018. It offers detailed insights into coin prices, market performance, and historical data. Coinpaprika is known for its focus on accurate data and comprehensive project descriptions.",
      category: "Tier 1",
      trustRating: 9.6,
      listingFee: "N.A."
    },
    {
      name: "Coinopsy",
      introduction: "Coinopsy is a cryptocurrency data aggregator that tracks active and dead crypto projects. Launched in 2018, it offers detailed project histories and price data, focusing on helping users identify potential risks by highlighting failing or dead tokens.",
      category: "Tier 1",
      trustRating: 9.5,
      listingFee: "N.A."
    }
  ]


  export {exchangeData,dexData,launchpads,securityFirms,marketMakingFirms,kols,pressRelease,aggregator};