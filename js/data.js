const CATEGORIES = [
    { id: 'mammals', name: 'Naasley', icon: '🦁', color: '#FF8B94' },
    { id: 'birds', name: 'Shimbiraha', icon: '🦜', color: '#A8E6CF' },
    { id: 'reptiles', name: 'Xamaaratada', icon: '🐢', color: '#FFD3B6' },
    { id: 'sea', name: 'Xoolaha Badda', icon: '🐬', color: '#DCEDC1' },
    { id: 'insects', name: 'Cayayaanka', icon: '🦋', color: '#FFAAA5' }
];

const ANIMALS = {
    mammals: [
        { id: 'lion', name: 'Libaax', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&q=80', soundText: 'Roar! Waxaan ahay Libaax.' },
        { id: 'elephant', name: 'Maroodi', img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&q=80', soundText: 'Pawoo! Waxaan ahay Maroodi.' },
        { id: 'monkey', name: 'Daanyeer', img: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&q=80', soundText: 'Ooh ooh aah aah! Waxaan ahay Daanyeer.' },
        { id: 'tiger', name: 'Shabeel', img: 'https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Grrr! Waxaan ahay Shabeel.' },
        { id: 'giraffe', name: 'Gerri', img: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400&q=80', soundText: 'Waxaan ahay Gerri dheer.' },
        { id: 'zebra', name: 'Dameer Farow', img: 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Waxaan ahay Dameer Farow xariijimo leh.' },
        { id: 'cow', name: 'Lo', img: 'https://plus.unsplash.com/premium_photo-1668446123344-d7945fb07eaa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Moo! Waxaan ahay Lo' },
        { id: 'goat', name: 'Ri', img: 'https://plus.unsplash.com/premium_photo-1664304299664-a8e2e2f80290?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Baa! Waxaan ahay Ri' },
        { id: 'sheep', name: 'Ido', img: 'https://plus.unsplash.com/premium_photo-1666777246850-e18916172de7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Baa! Waxaan ahay Ido.' },
        { id: 'horse', name: 'Fardo', img: 'https://plus.unsplash.com/premium_photo-1661886008804-9e5b219fc587?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Neigh! Waxaan ahay Fardo.' },
        { id: 'cat', name: 'Bisad', img: 'https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Meow! Waxaan ahay Bisad.' },
        { id: 'camel', name: 'Geel', img: 'https://plus.unsplash.com/premium_photo-1661936495413-875706d59696?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Grunt! Waxaan ahay Geel.' },
        { id: 'rat', name: 'Jiir', img: 'https://plus.unsplash.com/premium_photo-1664304951108-c04911c42fbd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Squeak! Waxaan ahay Jiir.' }
    ],
    birds: [
        { id: 'parrot', name: 'Baqbaqaaq', img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Squawk! Waxaan ahay Baqbaqaaq.' },
        { id: 'penguin', name: 'Penguin', img: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=400&q=80', soundText: 'Honk! Waxaan ahay Penguin.' },
        { id: 'owl', name: 'Guumays', img: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?w=400&q=80', soundText: 'Hoot hoot! Waxaan ahay Guumays.' },
        { id: 'duck', name: 'Booli', img: 'https://images.unsplash.com/photo-1555852095-64e7428df0fa?w=400&q=80', soundText: 'Quack quack! Waxaan ahay Booli.' },
        { id: 'flamingo', name: 'Flamingo', img: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&q=80', soundText: 'Waxaan ahay Flamingo casaan ah.' },
        { id: 'chicken', name: 'Digaag', img: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Cluck cluck! Waxaan ahay Digaag.' }
    ],
    reptiles: [
        { id: 'turtle', name: 'Diin', img: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&q=80', soundText: 'Waxaan ahay Diin gaabis ah.' },
        { id: 'snake', name: 'Mas', img: 'https://plus.unsplash.com/premium_photo-1661897154120-5b27cd6a0bd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Hiss! Waxaan ahay Mas.' },
        { id: 'chameleon', name: 'Jirjiroole', img: 'https://plus.unsplash.com/premium_photo-1722827117771-51f0f24a9a1f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Midabkayga waan bedeli karaa! Waxaan ahay Jirjiroole.' },
        { id: 'crocodile', name: 'Yaxaas', img: 'https://plus.unsplash.com/premium_photo-1664302983066-8ea0ffd6af05?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Snap snap! Waxaan ahay Yaxaas.' }
    ],
    sea: [
        { id: 'dolphin', name: 'Hoonbaro', img: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=400&q=80', soundText: 'Click click! Waxaan ahay Hoonbaro.' },
        { id: 'shark', name: 'Libaax Badeed', img: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80', soundText: 'Chomp! Waxaan ahay Libaax Badeed.' },
        { id: 'whale', name: 'Nibiriga', img: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400&q=80', soundText: 'Whoosh! Waxaan ahay Nibiriga weyn.' },
        { id: 'clownfish', name: 'Kalluunka Clownfish', img: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&q=80', soundText: 'Glub glub! Waxaan ahay Kalluunka Clownfish.' },
        { id: 'octopus', name: 'Octopus', img: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=400&q=80', soundText: 'Waxaan leeyahay sideed gacmood! Waxaan ahay Octopus.' }
    ],
    insects: [
        { id: 'butterfly', name: 'Balanbaalis', img: 'https://images.unsplash.com/photo-1623615412998-c63b6d5fe9be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Flutter flutter! Waxaan ahay Balanbaalis.' },
        { id: 'bee', name: 'Shinni', img: 'https://plus.unsplash.com/premium_photo-1722763606721-c0f40a24255f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Buzz! Waxaan ahay Shinni.' },
        { id: 'ladybug', name: 'Abooto-caaro', img: 'https://plus.unsplash.com/premium_vector-1698192260964-612ff28ce222?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Waxaan ahay Abooto-caaro guduudan.' },
        { id: 'ant', name: 'Quraanjo', img: 'https://plus.unsplash.com/premium_photo-1723180646795-7e4ebb11200b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'March march! Waxaan ahay Quraanjo.' },
        { id: 'dragonfly', name: 'Dragonfly', img: 'https://plus.unsplash.com/premium_photo-1723001312850-cf4f18a73b82?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29uZmx5fGVufDB8fDB8fHww', soundText: 'Zip zip! Waxaan ahay Dragonfly.' },
        { id: 'fly', name: 'Duqsi', img: 'https://plus.unsplash.com/premium_photo-1664303959273-21d18b87b88a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', soundText: 'Buzz! Waxaan ahay Duqsi.' }
    ]
};
