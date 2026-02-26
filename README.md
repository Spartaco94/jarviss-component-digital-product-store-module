# Digital Product Store Module

## Caratteristiche
- Gestione prodotti digitali
- Carrello e checkout
- Generazione licenze
- Supporto per upselling

## Utilizzo

```javascript
import { DigitalProductStore } from './digital-product-store.js';

// Inizializzazione
const store = new DigitalProductStore();

// Aggiunta prodotto
store.addProduct({
    name: "Planner Settimanale",
    description: "Planner digitale per la produttività",
    price: 9.99
});

// Aggiunta al carrello
store.addToCart(productId);

// Checkout
const order = store.checkout();
```

## Metodi Principali
- `addProduct(product)`: Aggiunge un nuovo prodotto
- `addToCart(productId)`: Aggiunge prodotto al carrello
- `checkout()`: Finalizza l'ordine e genera licenza

## Licenze
Ogni prodotto genera una licenza unica con validità di 1 anno.
```