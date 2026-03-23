# Simple E-Commerce Store with WhatsApp Integration

A beginner-friendly full-stack e-commerce application built with Node.js (Express) backend and vanilla HTML/CSS/JavaScript frontend. Orders are sent directly via WhatsApp.

## Features

- Display products with images, names, prices, and descriptions
- Responsive design that works on mobile and desktop
- Order form with customer details validation
- WhatsApp integration for order processing
- No database required - simple and lightweight
- Railway-compatible deployment

## Project Structure

```
.
├── server.js              # Express server
├── package.json           # Dependencies and scripts
├── public/
│   ├── index.html        # Main HTML file
│   ├── style.css         # Styles
│   ├── script.js         # Frontend JavaScript with WhatsApp integration
│   └── images/           # Product images folder
│       └── README.md     # Image directory documentation
└── README.md             # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure WhatsApp Number

Open `public/script.js` and update the WhatsApp number on line 1:

```javascript
const WHATSAPP_NUMBER = '1234567890';  // Replace with your WhatsApp number
```

Use international format without + or spaces (e.g., 15551234567 for US number)

### 3. Run the Application

```bash
npm start
```

The server will start on the port specified in `process.env.PORT` or default to port 3000.

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## How It Works

1. **Product Display**: The homepage displays 3 products with images, names, prices, and "Order Now" buttons
2. **Order Form**: Clicking "Order Now" opens a modal with a form for customer details
3. **Form Validation**: The form validates that all fields are filled and phone number is valid
4. **WhatsApp Integration**: Upon submission, a formatted message is created with:
   - Product name and price
   - Customer name, phone, and address
5. **WhatsApp Redirect**: The user is redirected to WhatsApp with the pre-filled message

## Customization

### Adding/Modifying Products

Edit `public/index.html` to add or modify products. Each product card should have:

```html
<div class="product-card" data-product-id="1" data-product-name="Product Name" data-product-price="99.99">
    <div class="product-image">
        <img src="images/product1.jpg" alt="Product Name" onerror="this.src='fallback-url'">
    </div>
    <div class="product-info">
        <h3 class="product-name">Product Name</h3>
        <p class="product-description">Product description</p>
        <div class="product-footer">
            <span class="product-price">$99.99</span>
            <button class="btn-order" onclick="openOrderForm(this)">Order Now</button>
        </div>
    </div>
</div>
```

### Adding Product Images

1. Add images to the `public/images/` directory
2. Name them: `product1.jpg`, `product2.jpg`, etc.
3. Update the `src` attribute in the HTML

The application uses Pexels stock photos as fallback if local images are not available.

### Styling

Modify `public/style.css` to change colors, fonts, layout, etc.

## Deployment to Railway

1. Push your code to a Git repository
2. Connect your repository to Railway
3. Railway will automatically detect the Node.js project
4. The app will use `npm start` command automatically
5. Set your WhatsApp number in the environment if needed

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Integration**: WhatsApp Business API (web interface)
- **Deployment**: Railway-compatible

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

ISC

## Notes

- No database is used - this is a simple order forwarding system
- Orders are sent to a single WhatsApp number
- For production use, consider adding:
  - Backend validation
  - Rate limiting
  - Order tracking system
  - Database integration
