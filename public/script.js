const WHATSAPP_NUMBER = '1234567890';

let selectedProduct = {
    name: '',
    price: ''
};

function openOrderForm(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.productName;
    const productPrice = productCard.dataset.productPrice;

    selectedProduct.name = productName;
    selectedProduct.price = productPrice;

    document.getElementById('orderProductName').textContent = productName;
    document.getElementById('orderProductPrice').textContent = `${productPrice} DH`;

    document.getElementById('orderModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('orderForm').reset();
}

window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderForm();
    }
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerAddress = document.getElementById('customerAddress').value.trim();

    if (!customerName || !customerPhone || !customerAddress) {
        alert('Please fill in all required fields');
        return;
    }

    if (customerPhone.length < 10) {
        alert('Please enter a valid phone number');
        return;
    }

    const message = createWhatsAppMessage(
        selectedProduct.name,
        selectedProduct.price,
        customerName,
        customerPhone,
        customerAddress
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    closeOrderForm();
});

function createWhatsAppMessage(productName, productPrice, customerName, customerPhone, customerAddress) {
    const message = `
New order from Storkom:

Product: ${productName}
Price: ${productPrice} DH
Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

Please confirm this order. Thank you!
    `.trim();

    return message;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Storkom store loaded successfully!');
});
