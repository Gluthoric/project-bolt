export interface Set {
  id: string;
  code: string;
  name: string;
  released_at: string;
  set_type: string;
  card_count: number;
  icon_svg_uri: string;
}

export interface Card {
  id: string;
  name: string;
  set: string;
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
}

export interface ScryfallResponse<T> {
  data: T[];
  has_more: boolean;
  next_page?: string;
  total_cards?: number;
}