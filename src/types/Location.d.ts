export type Location = {
    name: string;
    address: string;
    coordinates: string
    amenities: {
        microwave: boolean,
        chair: boolean,
        wc: boolean
    };
}

export type MappedLocation = {
    name: string;
    address: string;
    coordinates: {
        coords:[string, string]
    };
    amenities: {
        microwave: boolean,
        chair: boolean,
        wc: boolean
    };
}