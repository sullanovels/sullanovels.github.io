async function loadNovel(path) {
  const info = await fetch(path + "/info.json").then(r => r.json());

  document.getElementById("title").innerText = info.title;

  const list = document.getElementById("chapters");
  list.innerHTML = "";

  info.chapters.forEach((chapterFile) => {
    const li = document.createElement("li");

    li.innerText = chapterFile.replace(".md", "");

    li.onclick = async () => {
      const text = await fetch(path + "/" + chapterFile).then(r => r.text());
      document.getElementById("content").innerText = text;
    };

    list.appendChild(li);
  });
}

loadNovel("./novels/minha-novel");
