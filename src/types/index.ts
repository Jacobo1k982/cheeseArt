export interface Product {
    id: number;
    name: string;
    category: string;
    price: number; // Precio base por 1kg
    unit: string;
    image: string;
    description: string;
    origin: string;
}

export interface CartItem extends Product {
    quantity: number;
    selectedWeight: string; // Ej: "1/4 kg", "1/2 kg"
    weightMultiplier: number; // 0.25, 0.5, 1
    calculatedPrice: number; // Precio final (price * multiplier)
}