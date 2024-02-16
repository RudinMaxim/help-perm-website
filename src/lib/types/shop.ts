export interface IShop {
  basket: IBasketItem[];
}

export interface IBasketItem {
  uuid: string;
  count: number;
}
