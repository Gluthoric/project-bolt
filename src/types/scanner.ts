export interface ScanResult {
  results: {
    card_id: string;
    name: string;
    set_name: string;
    confidence: number;
  }[];
}

export interface ScanError {
  error: {
    message: string;
    code: string;
  };
}