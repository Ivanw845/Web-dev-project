// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Contact form (replace with real backend or service)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pretend this sent an email.");
});

// Blog section (future Markdown loader)
async function loadBlog() {
  const posts = ["post1.md", "post2.md"];
  const blogList = document.getElementById("blog-list");

  for (let file of posts) {
    const res = await fetch("blog/" + file);
    const text = await res.text();
    const div = document.createElement("div");
    div.innerHTML = `<pre>${text}</pre>`;
    blogList.appendChild(div);
  }
}

loadBlog();
