```javascript
class DigitalProductStore {
    constructor(config = {}) {
        this.products = config.products || [];
        this.cart = [];
        this.licenseManager = new LicenseManager();
    }

    addProduct(product) {
        this.products.push({
            id: product.id || this.generateUniqueId(),
            name: product.name,
            description: product.description,
            price: product.price,
            type: product.type || 'digital',
            metadata: product.metadata || {}
        });
    }

    generateUniqueId() {
        return 'dp_' + Math.random().toString(36).substr(2, 9);
    }

    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.cart.push({
                product,
                quantity,
                timestamp: Date.now()
            });
        }
    }

    checkout() {
        const total = this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const license = this.licenseManager.generateLicense(this.cart);
        
        return {
            cart: this.cart,
            total,
            license,
            timestamp: Date.now()
        };
    }
}

class LicenseManager {
    generateLicense(cart) {
        const licenseKey = this.createLicenseKey();
        return {
            key: licenseKey,
            products: cart.map(item => item.product.id),
            issuedAt: Date.now(),
            expiresAt: Date.now() + (365 * 24 * 60 * 60 * 1000) // 1 year
        };
    }

    createLicenseKey() {
        return 'LIC-' + Math.random().toString(36).substr(2, 12).toUpperCase();
    }

    validateLicense(license) {
        return license.expiresAt > Date.now();
    }
}

export { DigitalProductStore, LicenseManager };
```