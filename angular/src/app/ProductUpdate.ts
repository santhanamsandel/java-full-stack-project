export class ProductUpdate {
    constructor(
      public productId?: number,
      public productName: string = '',
      public price?: number,
      public specification: string = '',
      public manufacturer: string = '',
      public quantity?: number,
      public category?: CategoryEnum
    ) {}
  }
  
  export enum CategoryEnum {
    MOBILES = 'MOBILES',
    LAPTOP = 'LAPTOP',
    TABLET = 'TABLET',
    SMARTTV = 'SMARTTV',
    CAMERA = 'CAMERA',
  }
  