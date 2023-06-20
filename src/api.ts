const getBatteries = () => {
    return {
      'Megapack 2XL': { quantity: 0, width: 40, length: 10, energy: 4, cost: 120000, releaseDate: "2022", color: "bg-blue-500"},
      'Megapack 2': { quantity: 0, width: 30, length: 10, energy: 3, cost: 80000, releaseDate: "2021", color: "bg-red-500" },
      'Megapack': { quantity: 0, width: 30, length: 10, energy: 2, cost: 50000, releaseDate: "2005", color: "bg-green-500" },
      'Powerpack':  { quantity: 0, width: 10, length: 10, energy: 1, cost: 20000, releaseDate: "2000", color: "bg-yellow-500" },
      'Transformer':  { quantity: 0, width: 10, length: 10, energy: -0.25, cost: 10000, releaseDate: "", color: "bg-purple-500"},
    };
}

export default {
  getBatteries
}