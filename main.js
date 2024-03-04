let container = document.getElementById("container");
//console.log(container);
let items = document.getElementsByClassName("box");
let price = document.getElementsByClassName("price");
let totalprice = document.getElementById("totalprice");

let total = 0;
for (let i = 0; i < items.length; i++) {
  let item = items[i];
  //console.log(item);
  let plusbtn = item.getElementsByClassName("plusbtn")[0];
  let minusbtn = item.getElementsByClassName("minusbtn")[0];
  let quantity = item.getElementsByClassName("quantity")[0];
  let deletebtn = item.getElementsByClassName("deletebtn")[0];
  let likebtn = item.getElementsByClassName("likebtn")[0];

  let price = parseInt(
    item.getElementsByClassName("price")[0].innerText.substring(1)
  );
  console.log(price);

  plusbtn.addEventListener("click", () => {
    quantity.value++;
    total += price;
    totalprice.innerText = `Total Price: $${total}`;
  });

  minusbtn.addEventListener("click", () => {
    if (quantity.value > 0) {
      quantity.value--;
      total -= price;
      totalprice.innerText = `Total Price: $${total}`;
    }
  });
  deletebtn.addEventListener("click", () => {
    item.remove();
    total -= price * quantityInput.value;
    totalprice.innerText = `Total Price: $${total}`;
  });
  likebtn.addEventListener("click", function toggle() {
    if (likebtn.style.color == "red") {
      likebtn.style.color = "grey";
    } else {
      likebtn.style.color = "red";
    }
  });
}

