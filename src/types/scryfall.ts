export interface Set {
  object: string;
  id: string;
  code: string;
  mtgo_code?: string;
  arena_code?: string;
  tcgplayer_id?: number;
  name: string;
  set_type: string;
  released_at?: string;
  block_code?: string;
  block?: string;
  parent_set_code?: string;
  card_count: number;
  printed_size?: number;
  digital: boolean;
  foil_only: boolean;
  nonfoil_only: boolean;
  scryfall_uri: string;
  uri: string;
  icon_svg_uri: string;
  search_uri: string;
}

export interface Card {
  id: string;
  name: string;
  set: string;
  set_name: string;
  collector_number: string;
  image_uris?: {
    normal: string;
  };
  card_faces?: Array<{
    image_uris: {
      normal: string;
    };
  }>;
  prices: {
    usd: string | null;
    usd_foil: string | null;
  };
  rarity: string;
  type_line: string;
  oracle_text: string;
}

export interface ScryfallResponse<T> {
  data: T[];
  has_more: boolean;
  next_page?: string;
  total_cards?: number;
}
