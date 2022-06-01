const showImage = () => {

  const link = "https://source.unsplash.com/collection/";

  const div = document.getElementById("div-container");

  div.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    const image = document.createElement("img");
    div.appendChild(image);
  }

  document.querySelectorAll("img").forEach((image) => {
    image.src = `${link}/${Math.floor(Math.random() * 100)}/200x200`;
  }
  );
  console.log(link);

} 




