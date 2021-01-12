export declare class Order {
    id: number;
    name: string;
    email: string;
    street: string;
    city: string;
    country: string;
    zip: string;
    card: string;
    date: string;
    cvc: string;
    createdOn?: Date;
    hashCard(): Promise<any>;
    hashDate(): Promise<any>;
    hashCVC(): Promise<any>;
}
