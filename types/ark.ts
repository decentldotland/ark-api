// import { timeStamp } from "console";

export interface Identity {
  addresses?:              Address[];
  arweave_address:         string;
  first_linkage:           number;
  is_verified:             boolean;
  last_modification:       number;
  primary_address:         string;
  public_key:              string;
  unevaluated_addresses?:  string[];
}

export interface Address {
  address:          string;
  ark_key:          string;
  is_evaluated:     boolean;
  is_verified:      boolean;
  network:          string;
  verification_req: string;
}


// interface NETWORK {
//   key: string;
//   ark_key: 'ARWEAVE' | 'EVM' | 'EXOTIC'; // Arweave is purely for the UI
//   name: string;
//   ticker: string;
//   icon_min: string;
//   icon_max: string;
// };

export interface POAP {
  event: {
    id: number;
    fancy_id: string;
    name: string;
    event_url: string;
    image_url: string;
    country: string;
    city: string;
    description: string;
    year: number;
    start_date: string;
    end_date: string;
    expiry_date: string;
    supply: number;
  };
  tokenId: string;
  owner: string;
  chain: string;
  created: string;
}

interface LensProtocol {
  id: number;
  name: string;
  fancy_id: string;
  image_url: string;
  contract: string;
  chain: string;
  created: string;
}

interface EVM {
  [address: string]: {
    GITPOAPS: POAP[];
    POAPS: POAP[];
    LENS_PROTOCOLS_ACTV: LensProtocol[];
  };
}

export interface Res {
  ARWEAVE: ARWEAVE;
  EVM: EVM,
  addresses: Address[];
  arweave_address: string;
  first_linkage: number;
  last_modification: number;
  is_verified: boolean;
  primary_address: string;
  public_key: string;
  unevaluated_addresses: any[];
}


export interface ARWEAVE {
  ANS: ANS,
  ARNS:                 false | string;
  ARWEAVE_TRANSACTIONS: ArweaveTransaction[];
  IS_VOUCHED:           boolean;
  STAMPS:               Stamp[];
}

export interface ANS {
  user:           string;
  currentLabel:   string;
  ownedLabels:    Label[];
  nickname:       string;
  address_color:  string;
  bio:            string;
  avatar:         string;
  links:          ANSLinks;
  subdomains:     any;
  freeSubdomains: number;
};

interface ANSLinks {
  customUrl: string;
  github:    string;
  instagram: string;
  twitter:   string;
}

interface Label {
  label: string;
  scarcity: string;
  acquisationBlock: number;
  mintedFor: number;
}

export interface IdentityLinks {
  ANS:   string[];
  NEAR:  string[];
  ENS:   string[];
  EVMOS: string[];
  AVVY:  string[];
  LENS:  string[];
  URBIT: string[];
}


/*
interface ArweaveTransaction {
  txid: string;
  timestamp: number;
  tags: Tag[];
  owner: string;
  reward: string;
  target: string;
  data: string;
  data_size: number;
  data_root: string;
  signature: string;
}
*/

interface Tag {
  name: string;
  value: string;
}

// arweave NFTs
export interface Anfts {
  koii:           Koii[] | NFT[];
  permapages_img: Permapage[] | NFT[];
}

// first attempt at a generalized NFT interface for generic NFT gallery view
// export interface NFT {
//   id:            string;
//   poster:        string;
//   timestamp:     number;
//   title:         string;
//   description:   string;
//   ticker?:       string;
//   content_type?: string;
//   chain?: ChainOptions;
// }

export type ChainOptions = "arweave" | "ethereum" | "evmos" | "near" | "fantom" | "polygon" | "avalanche" | "bsc";
export class NFT  {
  id?:           string;
  poster?:       string;
  timestamp?:    number;
  title?:        string;
  description?:  string;
  ticker?:       string;
  content_type?: string;
  chain?:        ChainOptions;
  
  constructor() {}

  add_id(id: string) {this.id  = id; return this;}
  add_poster(poster: string) {this.poster  = poster; return this;}
  add_timestamp(timestamp: number) {this.timestamp  = timestamp; return this;}
  add_title(title: string) {this.title  = title; return this;}
  add_description(description: string) {this.description  = description; return this;}
  add_ticker(ticker: string) {this.ticker  = ticker; return this;}
  add_content_type(content_type: string) {this.content_type  = content_type; return this;}
  add_chain(chain: ChainOptions) {this.chain  = chain; return this;}
}

export class Koii extends NFT {
  // id:            string;
  // poster:        string;
  // timestamp:     number;
  // title:         string;
  // description:   string;
  // ticker:        string;
  // chain:         ChainOptions;
}

export class Permapage extends NFT {
  // id:            string;
  // poster:        string;
  // timestamp:     number;
  // title:         string;
  // description:   string;
  // ticker:        string;
  // content_type:  string;
  // chain:         ChainOptions
}

export interface Ans {
  user:           string;
  currentLabel:   string;
  ownedLabels:    OwnedLabel[];
  nickname:       string;
  address_color:  string;
  bio:            string;
  avatar:         string;
  links:          Links;
  subdomains:     any;
  freeSubdomains: number;
}

export interface Links {
  github:    string;
  twitter:   string;
  customUrl: string;
  instagram: string;
}

export interface OwnedLabel {
  label:            string;
  scarcity:         string;
  acquisationBlock: number;
  mintedFor:        number;
}

export interface ArweaveTransaction {
  txid:      string;
  timestamp: number;
  tags:      TagElement[];
}

export interface TagElement {
  name:  string;
  value: string;
}

export interface GalaxyCreds {
  id:                  string;
  avatar:              string;
  username:            string;
  eligibleCredentials: EligibleCredentials;
}

export interface EligibleCredentials {
  list: any[];
}

export interface Gitpoap {
  gitPoapId:        number;
  gitPoapEventId:   number;
  poapTokenId:      string;
  poapEventId:      number;
  poapEventFancyId: string;
  name:             string;
  year:             number;
  description:      string;
  imageUrl:         string;
  repositories:     string[];
  earnedAt:         string;
  mintedAt:         string;
}

export interface Poap {
  event:   Event;
  tokenId: string;
  owner:   string;
  chain:   string;
  created: string;
}

export interface Event {
  id:          number;
  fancy_id:    string;
  name:        string;
  event_url:   string;
  image_url:   string;
  country:     string;
  city:        string;
  description: string;
  year:        number;
  start_date:  string;
  end_date:    string;
  expiry_date: string;
  supply:      number;
}

export interface Attribute {
  value:      number | string;
  trait_type: string;
}

export interface Telegram {
  username:     string | null;
  is_verified:  boolean;
  is_evaluated: boolean;
}

export interface Stamp {
  stampedAsset:     string;
  stamper:          string;
  timestamp:        number;
  stampedAssetType: string;
  title:            string;
  description:      string;
}

export interface LensProtocolsActv {
  timestamp:    string;
  hash:         string;
  owner:        string;
  fee:          string;
  address_from: string;
  address_to:   string;
  network:      Network | string;
  platform:     string;
  tag:          TagEnum | string;
  type:         Type | string;
  success:      boolean;
  actions:      LensAction[];
}

export interface LensAction {
  tag:          TagEnum | string;
  type:         Type | string;
  index:        number;
  address_from: string;
  address_to?:  string;
  metadata:     LensActionMetadata;
  platform:     string;
  related_urls: string[];
}

export interface LensActionMetadata {
  body?:     string;
  summary?:  string;
  bio?:      string;
  name?:     string;
  type?:     Type | string;
  handle?:   string;
  source?:   string;
  address?:  string;
  network?:  Network | string;
  platform?: string;
}

export interface Event {
  id:          number;
  fancy_id:    string;
  name:        string;
  event_url:   string;
  image_url:   string;
  country:     string;
  city:        string;
  description: string;
  year:        number;
  start_date:  string;
  end_date:    string;
  expiry_date: string;
  supply:      number;
}


// RSS3 stuff goes here
export interface Rss3 {
  profile:      Profile[];
  transactions: Transaction[];
}

export interface Profile {
  address:   string;
  network:   Network;
  platform:  string;
  source:    string;
  name:      string;
  handle:    string;
  bio:       string;
  expire_at: string;
}

export interface Transaction {
  timestamp:    string;
  hash:         string;
  owner:        string;
  fee?:         string;
  address_from: string;
  address_to?:  string;
  network:      Network | string;
  tag:          TagEnum | string;
  type:         Type | string;
  success:      boolean;
  actions:      TransactionAction[];
  platform?:    string;
}

export interface TransactionAction {
  tag:          TagEnum | string;
  type:         Type;
  index:        number;
  address_from: string;
  address_to?:  string;
  metadata:     FluffyMetadata | any;
  related_urls: string[];
  platform?:    string;
}

export interface FluffyMetadata {
  id?:               string;
  cost?:             Cost;
  name?:             string;
  image?:            string;
  value?:            string;
  symbol?:           string;
  standard?:         Standard;
  attributes?:       Attribute[];
  collection?:       string;
  description?:      string;
  value_display?:    null | string;
  contract_address?: string;
  decimals?:         number;
  to?:               Cost;
  from?:             Cost;
  protocol?:         string | Protocol;
  body?:             string;
  summary?:          string;
  bio?:              string;
  type?:             Type;
  handle?:           string;
  source?:           string;
  address?:          string;
  network?:          Network;
  platform?:         string;
  animation_url?:    string;
  external_link?:    string;
  choice?:           string;
  proposal?:         Proposal;
  type_on_platform?: Type[];
}


export interface Cost {
  name:              string;
  image:             string;
  value:             string;
  symbol:            string;
  decimals:          number;
  standard:          Standard | string;
  value_display?:    string;
  contract_address?: string;
}

export interface Proposal {
  id:           string;
  body:         string;
  title:        string;
  end_at:       string;
  options:      string[];
  start_at:     string;
  organization: Organization;
}

export interface Organization {
  id:     string;
  name:   string;
  about?: string;
}

// RSS3 stuff stops here

// Warning! All the following Enums are not exhaustive, and only work as an approximation.
// Feel free to create a PR to add more values to them.

export enum Standard {
  Erc1155 = "ERC-1155",
  Erc20 = "ERC-20",
  Erc721 = "ERC-721",
  Native = "Native",
}

export enum Network {
  BinanceSmartChain = "binance_smart_chain",
  Ethereum = "ethereum",
  Polygon = "polygon",
  Xdai = "xdai",
}

export enum Type {
  Burn = "burn",
  Create = "create",
  Mint = "mint",
  Poap = "poap",
  Post = "post",
  Profile = "profile",
  Swap = "swap",
  Trade = "trade",
  Transfer = "transfer",
  Vote = "vote",
}

export enum TagEnum {
  Collectible = "collectible",
  Exchange = "exchange",
  Governance = "governance",
  Social = "social",
  Transaction = "transaction",
}

export enum Protocol {
  MetamaskV1 = "Metamask V1",
  UniswapV2 = "Uniswap V2",
  UniswapV3 = "Uniswap V3",
}

export type ChainProps = {
  activeChain: string;
  onClick?: (e: any) => void;
};

export type NetworkButtonProps = {
  onClick?: (e: any) => void;
  src: string;
  className?: string;
  name: string;
  scale: string;
}

export type SortChronProps = {
  onClick?: () => void;
  text: string;
  className?: string;
}
