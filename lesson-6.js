const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeelTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeelTemps];
console.log(allTemps);

const defaultSettings = {
  theme: 'light',
  showNotification: false,
  hideSidebar: false,
};

const userSettings = {
  showNotification: true,
  hideSidebar: true,
};

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);

const playlist = {
  name: 'My Playlist',
  raiting: 5,
  tracks: ['track-1'],
  trackCount: 1,
};

// const { name, raiting, tracks, trackCount } = playlist;
// console.log(name);
// console.log(raiting);
// console.log(tracks);
// console.log(trackCount);

const profileInfo = function (userProfile) {
  const { name, raiting, tracks, trackCount } = userProfile;
  console.log(name, raiting, tracks, trackCount);
};
console.log(profileInfo(playlist));

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = { ...product, quantity: 1 };

    return this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        // this.items.splice(i, 1);
        // console.log(this.items[i].quantity);
        this.items[i].quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        // this.items.splice(i, 1);
        this.items[i].quantity -= 1;
      }
    }
  },
};

// console.log(cart.getItems());

cart.add({ name: '🍓', price: 50 });
cart.add({ name: '🍍', price: 50 });
cart.add({ name: '🥑', price: 50 });
cart.add({ name: '🥑', price: 50 });
cart.add({ name: '🍏', price: 50 });
cart.add({ name: '🍏', price: 50 });
cart.add({ name: '🍏', price: 50 });

// cart.remove('🍓');
// cart.clear();
console.log('Total', cart.countTotalPrice());

console.log(cart.increaseQuantity('🍓'));
console.log(cart.increaseQuantity('🍓'));
console.log(cart.increaseQuantity('🍓'));
console.log(cart.decreaseQuantity('🍓'));
console.log(cart.decreaseQuantity('🍓'));

console.log(cart.getItems());
