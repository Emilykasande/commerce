// --------- DATA ---------
    //             const products1 = [
    //             {id: 1, name: "Wooden bed", price: 550000, img: "./Images/Bed 3.jpeg" },
    //             {id: 2, name: "Bed", price: 500000, img: "./Images/Bed 2.jpeg" },
    //             {id: 3, name: "Bunk bed", price: 600000, img: "./Images/Deker Bed.jpeg" },
    //             {id: 4, name: "Master bed", price: 700000, img: "./Images/Bed1.jpeg" },
    //             {id: 5, name: "Kids bed", price: 400000, img: "./Images/Kids bed.jpeg" }
    //             ];

    //             const products2 = [
    //             {id: 6, name: "Book case", price: 350000, img: "./Images/Book case1.jpeg" },
    //             {id: 7, name: "Book case", price: 300000, img: "./Images/Book case2.jpeg" },
    //             {id: 8, name: "Plant Rack", price: 150000, img: "./Images/Designer 1.jpeg" },
    //             {id: 9, name: "Shoe Rack", price: 200000, img: "./Images/Shoe rack.jpeg" }
    //             ];

    //             const products3 = [
    //             {id: 10, name: "Dining Table", price: 700000, img: "./Images/Dining 6.jpeg" },
    //             {id: 11, name: "Dining Set", price: 400000, img: "./Images/Dining 2.jpeg" },
    //             {id: 12, name: "Luxury Dining", price: 600000, img: "./Images/Dining 4.jpeg" },
    //             {id: 13, name: "Dining", price: 500000, img: "./Images/Dining 7.jpeg" },
    //             {id: 14, name: "Best Dining", price: 800000, img: "./Images/Dining 5.jpeg" }
    //             ];

    //             const products4 = [
    //             {id: 15, name: "Sofa set", price: 700000, img: "./Images/Sofa set.jpeg" },
    //             {id: 16, name: "Single seater", price: 300000, img: "./Images/Chair design.jpeg" },
    //             {id: 17, name: "Luxury Sofa", price: 800000, img: "./Images/Blue sofa.jpeg" },
    //             {id: 18, name: "Best Sofa", price: 400000, img: "./Images/Sofa.jpeg" }
    //             ];

    //             const products5 = [
    //             {id: 19, name: "Blue Table", price: 800000, img: "./Images/Blue table.jpeg" },
    //             {id: 20, name: "Center Table", price: 700000, img: "./Images/Center table 3.jpeg" },
    //             {id: 21, name: "Center Table", price: 900000, img: "./Images/Center Table1.jpeg" },
    //             {id: 22, name: "Table Design", price: 450000, img: "./Images/Table design.jpeg" },
    //             {id: 23, name: "Mirror table", price: 500000, img: "./Images/Mirror table.jpeg" }
    //             ];

    //             const products6 = [
    //             {id: 24, name: "Kitchen 1", price: 500000, img: "./Images/Kitchen 1.jpeg" },
    //             {id: 25, name: "Kitchen 2", price: 450000, img: "./Images/Kitchen 2.jpeg" },
    //             {id: 26, name: "Kitchen 3", price: 390000, img: "./Images/Kitchen 3.jpeg" },
    //             {id: 27, name: "Kitchen unit", price: 250000, img: "./Images/Kitchen unit.jpeg" }
    //             ];

    //             // --------- ADD TO CART ---------
    //             function addToCart(id, name, price) {
    //                 let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //     const existing = cart.find(item => item.id === id);
    //             if (existing) {
    //                 existing.qty += 1;
    //     } else {
    //                 cart.push({ id, name, price, qty: 1 });
    //     }
    //             localStorage.setItem("cart", JSON.stringify(cart));

    //             // ✅ Redirect to cart page after adding
    //             window.location.href = "cart.html";
    // }

    //             // --------- HELPERS ---------
    //             function handleImageError(imgEl) {
    //                 imgEl.alt = "Image not found";
    //             imgEl.closest('.image-box').style.background = "#eee";
    // }

    //             // --------- CAROUSEL ---------
    //             function initCarousel(products, trackId, prevBtnId, nextBtnId) {
    //     const track = document.getElementById(trackId);
    //     track.innerHTML = products.map(p => `
    //             <div class="product-card">
    //                 <div class="image-box">
    //                     <img loading="lazy" src="${p.img}" alt="${p.name}" onerror="handleImageError(this)">
    //                 </div>
    //                 <h3>${p.name}</h3>
    //                 <p>UGX ${p.price.toLocaleString()}</p>
    //                 <button onclick="addToCart(${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price})">Add to Cart</button>
    //         </div>
    //         `).join("");

    //     let currentIndex = 0;
    //     const prevButton = document.getElementById(prevBtnId);
    //     const nextButton = document.getElementById(nextBtnId);

    //     function updateCarousel() {
    //         const width = track.clientWidth;
    //         track.style.transform = `translateX(-${ currentIndex * width}px)`;
    //     }

    //     prevButton.addEventListener("click", () => {
    //         currentIndex = (currentIndex - 1 + products.length) % products.length;
    //         updateCarousel();
    //     });

    //     nextButton.addEventListener("click", () => {
    //         currentIndex = (currentIndex + 1) % products.length;
    //         updateCarousel();
    //     });

    //     setInterval(() => {
    //         currentIndex = (currentIndex + 1) % products.length;
    //         updateCarousel();
    //     }, 3000);

    //     updateCarousel();
    //     window.addEventListener('resize', updateCarousel);
    // }

    //   // --------- INIT ALL CAROUSELS ---------
    //   initCarousel(products1, "carousel-track-1", "prev-1", "next-1");
    //   initCarousel(products2, "carousel-track-2", "prev-2", "next-2");
    //   initCarousel(products3, "carousel-track-3", "prev-3", "next-3");
    //   initCarousel(products4, "carousel-track-4", "prev-4", "next-4");
    //   initCarousel(products5, "carousel-track-5", "prev-5", "next-5");
    //   initCarousel(products6, "carousel-track-6", "prev-6", "next-6");
