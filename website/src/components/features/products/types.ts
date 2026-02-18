export interface Product{
    id:string,
    name:string,
    price:number,
    originalPrice?:number,
    image:string,
    images?:string[],
    description?:string,
    variants?:Variant[],
    stock:number,
    rating?:number,
    reviewCount?:number
}
export interface Variant{
    id:string,
    name:string,
    stock:number
}