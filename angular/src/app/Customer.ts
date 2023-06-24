export class Customer {
    
    constructor(
      public customerId?: number,
      public firstName: string = '',
      public lastName: string = '',
      public mobileNumber: string = '',
      public email: string = '',
      public addresses: Address[] = []
    ) {}
  }
  
  export class Address {
    constructor(
      public addressId?: number,
      public streetNo: string = '',
      public buildingName: string = '',
      public city: string = '',
      public state: string = '',
      public country: string = '',
      public pincode: string = ''
    ) {}
  }
  