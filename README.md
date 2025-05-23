# 🖼️ Carousel JS: A Simple Image Gallery 📸

**Showcase your images with elegance! This lightweight and responsive JavaScript-powered carousel provides a smooth, navigable viewing experience.**

## ✨ Features

* **Manual Navigation:** Easily browse through images using "Previous" (&#10094;) and "Next" (&#10095;) buttons.
* **Seamless Looping:** The carousel gracefully loops from the last image back to the first, and vice-versa, for continuous Browse.
* **Pure JavaScript:** Core functionality is implemented using vanilla JavaScript, ensuring high performance and broad browser compatibility.
* **Responsive Images:** Images adapt to fit their container, ensuring a great viewing experience on various screen sizes.
* **Clean Structure:** Minimal HTML and JavaScript for easy understanding and customization.

## 🚀 Technologies Used

This project is built using fundamental web technologies:

* **HTML5:** Structuring the image gallery and its navigation controls.
* **CSS3 (with SCSS assumed):** Styling the carousel container, images, and navigation buttons for a modern look.
  * Designed for responsiveness across devices.
* **JavaScript (ES6+):** Handling the slide transitions, button interactions, and looping logic.

## 🎮 How to Use

1. **Navigate:** Click the left (&#10094;) and right (&#10095;) arrow buttons to move between images.
2. **Looping:** The carousel will automatically loop back to the beginning when you reach the end, and vice-versa.

## ⚙️ Installation & Setup

To run this image carousel locally:

1. **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd carousel-js-project
    ```

2. **Place Images:** Ensure your images are located in the `img/carousel/` directory as referenced in `index.html`.
    * `./img/carousel/img-1/medium-basketball.jpg`
    * `./img/carousel/img-2/outside-court.jpg`
    * `./img/carousel/img-3/ai-mural.jpg`
3. **Open `index.html`:** Simply open the `index.html` file in your preferred web browser.

    *(Note: This is a client-side only application, so no web server is strictly required.)*

4. **Compile SCSS (if making changes):** If you modify any `.scss` files (assuming you're using SCSS for `css/style.css`), you will need a Sass compiler:

    ```bash
    # Example using npm:
    npm install -g sass # If you don't have it
    sass css/style.scss:css/style.css
    # Or for continuous watching during development:
    sass --watch css/style.scss:css/style.css
    ```

## 🗺️ Project Structure

.
├── index.html              # Main HTML file containing the carousel structure
├── js/
│   └── carousel.js         # JavaScript logic for carousel functionality
├── css/
│   └── style.css           # Main CSS file (compiled from SCSS if used)
│       # Potentially other SCSS files like:
│       # ├── main.scss
│       # ├── abstracts/
│       # ├── base/
│       # └── components/
└── img/
└── carousel/           # Directory for your image assets
├── img-1/
│   └── medium-basketball.jpg
├── img-2/
│   └── outside-court.jpg
└── img-3/
└── ai-mural.jpg

## 💡 Future Enhancements

* **Pagination Dots:** Add indicators for the current slide.
* **Image Captions:** Display descriptive text for each image.
* **Lazy Loading:** Improve performance by loading images only when needed.
* **Touch/Swipe Support:** Enable navigation via touch gestures on mobile devices.
* **Keyboard Navigation:** Allow users to navigate with arrow keys.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Hazel Cunuder
