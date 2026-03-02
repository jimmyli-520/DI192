((userName) => {

  const navbar = document.getElementById("navbar");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user-info");

  const name = document.createElement("span");
  name.textContent = userName;

  const img = document.createElement("img");
  img.src = "https://socialitelife.com/wp-content/uploads/2025/11/jonathan-bailey-lede-11092025.jpg"; // sample profile picture
  img.alt = "Profile Picture";

  userDiv.appendChild(name);
  userDiv.appendChild(img);

  navbar.appendChild(userDiv);

})("Jonathan Bailey");