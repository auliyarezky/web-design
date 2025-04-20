// Update the story content to include image paths
const storyContent = {
  "Di ruangan lain": {
    category: "Cerita Pendek",
    description:
      "Fatil sering melihat sosok aneh ketika melewati gedung itu. Hingga suatu ketika, ia berhadapan dengan sosok itu",
    content:
      "Semilir angin dingin menerpa wajah Fani ketika ia melangkah keluar dari gedung fakultasnya...",
    image: "assets/ruang.jpg",
  },
  "Darimo, 2000 tahun yang lalu": {
    category: "Cerita Pendek",
    description:
      "Yegar terbaik timeDrop yang mengharuskan ia menghadapi keadaan mengertikan yang sama di masa depan.",
    content: "Your story content here...",
    image: "assets/tulisan1.jpg",
  },
  Bebas: {
    category: "Puisi",
    description:
      "Menggambarkan seseorang yang ingin bebas dari beban pikiran dan perasaannya",
    content: "Your poem content here...",
    image: "assets/sampul1.jpg",
  },
  "Ibarat Rumus": {
    category: "Puisi",
    description:
      "Puisi yang menggambarkan tentang matematika dan bahasa sebagai permainan dan mengungkapkan ungkapan perasaan.",
    content: "Your poem content here...",
    image: "assets/published1.jpg",
  },
  "Seperti Lukisan Abstrak": {
    category: "Kutipan",
    description:
      "Kutipan ini tentang rindu yang menjadi jembatan ketika jarak memisahkan",
    content: "Your quote content here...",
    image: "assets/tulisan1.jpg",
  },
  "Tak perlu menjadi nomor 1": {
    category: "Kutipan",
    description:
      "Kutipan ini menggambarkan tentang belajar 'menerima' dirinya untuk menjadi diri sendiri yang baik",
    content: "Your quote content here...",
    image: "assets/sampul1.jpg",
  },
};

// Get story title from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const storyTitle = urlParams.get("title");

// Load story content
// Update the image in the load story content section
if (storyTitle && storyContent[storyTitle]) {
  const story = storyContent[storyTitle];
  document.title = storyTitle;
  document.querySelector(".story-title").textContent = storyTitle;
  document.querySelector(".category-pill").textContent = story.category;
  document.querySelector(".story-description").textContent = story.description;
  document.querySelector(".story-content").textContent = story.content;
  document.querySelector(".story-featured-image").src = story.image;
  document.querySelector(".story-featured-image").alt = storyTitle;
}
