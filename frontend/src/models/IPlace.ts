export interface IPlace {
    id: string;
    name: string;
    image: string;
    commentary: string;
    address: {
        city: string;
        state: string;
        street: string;
    }
}