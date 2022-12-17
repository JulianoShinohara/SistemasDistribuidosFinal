interface Image {
    id: string;
    image: string;
}

export interface IPlace {
    id: string;
    name: string;
    images: Image[];
    commentary: string;
    address: {
        city: string;
        state: string;
        street: string;
    }
}