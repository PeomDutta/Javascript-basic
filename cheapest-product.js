// Find the cheapest product from Objects

const phones = [
    {
        name: "Xiaomi",
        price: 120000,
        storage: 64,
        camera: 32
    },

    {
        name: "Nokia",
        price: 200000,
        storage: 32,
        camera: 11
    },

    {
        name: "Oppo",
        price: 210000,
        storage: 16,
        camera: 8
    },

    {
        name: "Lenovo",
        price: 20500,
        storage: 12,
        camera: 10
    },

];

console.log(phones);

let cheapest = phones[0];
for (const device of phones) {
    if (device.price < cheapest.price) {
        cheapest = device;
    }
}
console.log("Cheapest Device:");
console.log(cheapest);
