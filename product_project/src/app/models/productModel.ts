export type Product = {
    id:string;
    title:string;
    description:string;
    thumbnail:string;
    handle:string;
    prices:any;
    amount:number;
    variants: [
        {
            options:[{
                value:string;
                
            }],
            prices: [{
                amount:number;
        }]
        }
    ];
    collection:string;
    
    
}