        function calculateTotalPrice() {
            const size = parseFloat(document.querySelector('input[name="size"]:checked').getAttribute("data-price"));
            const toppings = document.querySelectorAll('input[name="topping"]:checked').length - 4;
            const deliveryOption = document.getElementById("delivery-select").value;
        
            let totalToppingsPrice = 0;
            if (toppings > 0) {
                totalToppingsPrice = toppings * 0.5;
            }
        
            let deliveryPrice = 0;
            if (deliveryOption === "delivery") {
                deliveryPrice = 5;
            }
        
            const total = size + totalToppingsPrice + deliveryPrice;
            document.getElementById("total-price").textContent = `Total Price: €${total.toFixed(2)}`;
        }
        
        // Add event listener to the form elements
        const form = document.getElementById("pizza-order-form");
        form.addEventListener("input", calculateTotalPrice);