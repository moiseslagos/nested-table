export interface Idata{
  name: string,
  type: string,
  email: string,
  phoneNo: string,
  companyName: string,
  address: string,
  children?: Idata[]
}