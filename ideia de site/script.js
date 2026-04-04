const movieGrid = document.getElementById("movieGrid");
const statusMessage = document.getElementById("statusMessage");
const searchInput = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreSelect");
const featuredButton = document.getElementById("featuredButton");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const movieModal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModalButton = document.getElementById("closeModalButton");
let featuredOnly = false;

const allMovies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ficção científica",
    year: 2014,
    duration: "169 min",
    rating: 8.7,
    featured: true,
    cover: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg",
    description: "Uma equipe viaja pelo espaço em busca de um novo lar para a humanidade.",
  },
  {
    id: 2,
    title: "Parasita",
    genre: "Drama",
    year: 2019,
    duration: "132 min",
    rating: 8.5,
    featured: true,
    cover: "https://i0.wp.com/javiu.blog/wp-content/uploads/2019/08/para.png?fit=677%2C899&ssl=1",
    description: "Duas famílias de classes sociais opostas se conectam de forma imprevisível.",
  },
  {
    id: 3,
    title: "Mad Max: Estrada da Fúria",
    genre: "Ação",
    year: 2015,
    duration: "120 min",
    rating: 8.1,
    featured: false,
    cover: "https://wp.ufpel.edu.br/empauta/files/2015/05/madmax6.jpg",
    description: "Uma fuga explosiva em um mundo pós-apocalíptico dominado pela escassez.",
  },
  {
    id: 4,
    title: "A Viagem de Chihiro",
    genre: "Fantasia",
    year: 2001,
    duration: "125 min",
    rating: 8.6,
    featured: false,
    cover: "https://m.media-amazon.com/images/M/MV5BYmZmMmM4OTYtMDkyNi00ZDI5LThiODItNzhlZGI3ZDJmZDZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "Uma garota entra em um mundo espiritual e precisa resgatar seus pais.",
  },
  {
    id: 5,
    title: "Whiplash",
    genre: "Drama",
    year: 2014,
    duration: "107 min",
    rating: 8.5,
    featured: false,
    cover: "https://m.media-amazon.com/images/I/61tWmSwoDeL._AC_UF894,1000_QL80_.jpg",
    description: "Um jovem baterista entra em conflito com um professor extremamente exigente.",
  },
  {
    id: 6,
    title: "Homem-Aranha no Aranhaverso",
    genre: "Animação",
    year: 2018,
    duration: "117 min",
    rating: 8.4,
    featured: true,
    cover: "https://m.media-amazon.com/images/M/MV5BMjgzNWYyOWItMGQxYi00MzQ2LWFhNGQtMDI4OWUyMThmZjk3XkEyXkFqcGc@._V1_.jpg",
    description: "Miles Morales descobre que não é o único Homem-Aranha do multiverso.",
  },
];

function populateGenres(movies) {
  const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
  genreSelect.innerHTML = '<option value="">Todos</option>';

  for (const genre of genres) {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  }
}

function renderMovies(movies) {
  movieGrid.innerHTML = "";

  if (movies.length === 0) {
    movieGrid.innerHTML = '<p class="empty-state">Nenhum filme encontrado.</p>';
    return;
  }

  for (const movie of movies) {
    const article = document.createElement("article");
    article.className = "movie-card";
    article.innerHTML = `
      <img src="${movie.cover}" alt="Capa do filme ${movie.title}" />
      <div class="movie-card-content">
        <span class="tag">${movie.genre}</span>
        <h3>${movie.title}</h3>
        <div class="movie-meta">
          <span>Ano: ${movie.year}</span>
          <span>Duração: ${movie.duration}</span>
          <span>Nota: ${movie.rating}</span>
        </div>
        <p class="movie-description">${movie.description}</p>
        <button class="button primary details-button" data-id="${movie.id}">Ver detalhes</button>
      </div>
    `;

    movieGrid.appendChild(article);
  }

  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => openMovieDetails(Number(button.dataset.id)));
  });
}

function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  const selectedGenre = genreSelect.value;
  let filtered = [...allMovies];

  if (search) {
    filtered = filtered.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(search) ||
        movie.genre.toLowerCase().includes(search) ||
        movie.description.toLowerCase().includes(search)
      );
    });
  }

  if (selectedGenre) {
    filtered = filtered.filter((movie) => movie.genre === selectedGenre);
  }

  if (featuredOnly) {
    filtered = filtered.filter((movie) => movie.featured === true);
  }

  renderMovies(filtered);
  statusMessage.textContent = `${filtered.length} filme(s) encontrado(s).`;
}

function openMovieDetails(movieId) {
  const movie = allMovies.find((item) => item.id === movieId);
  if (!movie) return;

  modalBody.innerHTML = `
    <img class="modal-image" src="${movie.cover}" alt="Capa do filme ${movie.title}" />
    <div class="modal-text">
      <span class="tag">${movie.genre}</span>
      <h3>${movie.title}</h3>
      <p class="movie-meta">
        <span>Ano: ${movie.year}</span>
        <span>Duração: ${movie.duration}</span>
        <span>Nota: ${movie.rating}</span>
      </p>
      <p>${movie.description}</p>
    </div>
  `;

  movieModal.classList.remove("hidden");
  movieModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  movieModal.classList.add("hidden");
  movieModal.setAttribute("aria-hidden", "true");
}

function clearErrors() {
  document.querySelectorAll(".field-error").forEach((item) => {
    item.textContent = "";
  });
  formFeedback.textContent = "";
  formFeedback.className = "form-feedback";
}

function validateForm(data) {
  const errors = {};

  if (data.name.trim().length < 3) {
    errors.name = "Informe um nome com pelo menos 3 caracteres.";
  }

  if (!data.email.includes("@") || !data.email.includes(".")) {
    errors.email = "Informe um e-mail válido.";
  }

  if (data.movie.trim().length === 0) {
    errors.movie = "Informe um filme de interesse.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";
  }

  return errors;
}

function showErrors(errors) {
  for (const [field, message] of Object.entries(errors)) {
    const element = document.getElementById(`${field}Error`);
    if (element) {
      element.textContent = message;
    }
  }
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  const errors = validateForm(data);

  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    formFeedback.textContent = "Corrija os campos destacados.";
    formFeedback.classList.add("error");
    return;
  }

  formFeedback.textContent = "Validação concluída. Na aula 07 o formulário será enviado ao Flask.";
  formFeedback.classList.add("success");
  contactForm.reset();
});

searchInput.addEventListener("input", applyFilters);
genreSelect.addEventListener("change", applyFilters);
featuredButton.addEventListener("click", () => {
  featuredOnly = !featuredOnly;
  featuredButton.textContent = featuredOnly ? "Mostrar todos os filmes" : "Mostrar apenas destaques";
  applyFilters();
});
closeModalButton.addEventListener("click", closeModal);
movieModal.addEventListener("click", (event) => {
  if (event.target === movieModal) {
    closeModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !movieModal.classList.contains("hidden")) {
    closeModal();
  }
});

populateGenres(allMovies);
renderMovies(allMovies);
statusMessage.textContent = `${allMovies.length} filme(s) carregado(s).`;
