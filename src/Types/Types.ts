export interface ArticleData {
    id: number;
    img: string;
    title: string;
    detail: string;
  }
  
  export interface BallType {
    mapType: {
      [key: string]: {
        bgColor: string;
        textColor: string;
        borderColor: string;
      };
    };
  }
  export interface TypeMap {
    [type: string]: string;
  }
  
  export interface PriceStatData {
    priceStatList: {
      minprice: number;
      maxprice: number;
      currentprice: number;
      type: string;
      range: number;
    }[];
    typeFull: TypeMap;
  }
  