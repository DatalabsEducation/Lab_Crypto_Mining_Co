document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
  
        products.forEach(product => {
          if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
  
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  
    document.querySelector('[data-category="all"]').click();
  });
  