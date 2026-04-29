        let currentPrice = 0;
        let currentQty = 1;

        function openOrderModal(title, price) {
            currentPrice = price;
            currentQty = 1;
            document.getElementById('modalBookTitle').innerText = title;
            document.getElementById('quantity').innerText = currentQty;
            calculateTotal();
            document.getElementById('orderModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('orderModal').classList.add('hidden');
        }

        function updateQty(val) {
            currentQty += val;
            if (currentQty < 1) currentQty = 1;
            document.getElementById('quantity').innerText = currentQty;
            calculateTotal();
        }

        function calculateTotal() {
            const total = currentPrice * currentQty;
            document.getElementById('totalPrice').innerText = total.toLocaleString();
        }

        function confirmOrder() {
            const title = document.getElementById('modalBookTitle').innerText;
            const total = document.getElementById('totalPrice').innerText;
            alert(`ຢືນຢັນການສັ່ງຊື້: ${title}\nຈຳນວນ: ${currentQty}\nລາຄາທັງໝົດ: ฿${total}`);
            closeModal();
        }

        // ປິດ modal ເມື່ອກົດນອກກອບ
        window.onclick = function(event) {
            const modal = document.getElementById('orderModal');
            if (event.target == modal) closeModal();
        }