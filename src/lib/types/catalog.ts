export interface ICatalog {
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  uuid: string;
  nomenclature_category_type: INomenclatureCategoryType | null;
  title: string;
  index: number;
  is_public: boolean;
  categories: ICategory[] | null;
  seo_url: string;
  nomenclatures: INomenclature[] | null;
}

export interface INomenclatureCategoryType {
  id: number;
  name: string;
  tag: string;
}

export interface INomenclature {
  id: number;
  uuid: string;
  name: string;
  article: string;
  measurement_unit_type: IMeasurementUnitType | null;
  value: number;
  price: number;
  quantity: number;
  description: string;
  structure: string;
  seo_url: string;
  recommend: string;
  is_new: boolean;
  is_buyer_choice: boolean;
  is_published: boolean;
  is_published_opt: boolean;
  price_opt: number;
  nomenclature_category: ICategory | null;
  photos: IPhoto[] | null;
  nomenclatures: INomenclature[] | null;
}

export interface IMeasurementUnitType {
  designation: string;
  ratio: number;
  tag: string;
}

export interface IPhoto {
  id: number;
  created_at: string;
  updated_at: string;
  uuid: string;
  name: string;
  extension: string;
  mime_type: string;
  width: number;
  height: number;
  size: number;
  data: string | null;
}
