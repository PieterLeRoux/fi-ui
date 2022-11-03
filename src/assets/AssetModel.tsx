export interface AssetModel {
  id?: number;
  name: string;
  type: AssetType;
  startValue: number;
  contribution: number;
}

export enum AssetType {
  Saving,
  Investment,
  Liabilitiy,
  Property,
}
