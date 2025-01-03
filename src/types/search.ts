export type ViewMode = 'grid' | 'list';

export type PriceFilter = 'market' | 'low' | 'average' | 'high';
export type CollectionStatus = 'all' | 'complete' | 'partial' | 'empty';
export type SetType = 'all' | 'expansion' | 'core' | 'masters';

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterState {
  priceFilter: PriceFilter;
  collectionStatus: CollectionStatus;
  setType: SetType;
  [key: string]: string;
}