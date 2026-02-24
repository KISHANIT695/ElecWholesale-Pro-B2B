// server/utils/calculator.js
const calculateB2BPrice = (product, qty) => {
    let price = product.basePrice;

    // थोक स्लैब चेक करें
    if (product.bulkPricing.length > 0) {
        const slab = product.bulkPricing
            .filter(s => qty >= s.minQty)
            .sort((a, b) => b.minQty - a.minQty)[0];
        if (slab) price = slab.pricePerUnit;
    }

    const subtotal = price * qty;
    const gst = (subtotal * product.gstPercentage) / 100;
    
    return {
        unitPrice: price,
        taxable: subtotal,
        gstAmount: gst,
        total: subtotal + gst
    };
};
module.exports = { calculateB2BPrice };
