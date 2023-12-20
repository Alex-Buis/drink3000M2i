// --------------Header scroll -----------

// function handleScroll() {
//     const header = document.querySelector('.border');
//     const scrollTop = window.scrollY;
//     console.log (header)

//     if (scrollTop > 100) {
//       header.style.display= "flex";
//     } else {
//       header.style.display = "none";
//     }
//   }
//   window.addEventListener('scroll', handleScroll);

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 75) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


// ---------- Boisson séléct -------------
  let searchForm = document.querySelector("");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let prenom = document.querySelector("").value;
    let nom = document.querySelector("").value;

    // Rechercher le client avec les infos fournies
    clients.find(client => ((client.firstname == prenom) && (client.lastname == nom)));
    });

  let htmlFactureClient = document.querySelector("");
    htmlFactureClient.classList.add("visible");

    let htmlContainer = document.querySelector("");

    if (customer) {
        let total = customer.getBillValue(rooms[customer.room]);

        htmlContainer.innerHTML=`<p>Votre choix:${customer.boisson} :<p>`;
    } else {
        // Aucune sélect
        htmlContainer.innerHTML = "<p>Aucune</p>";
    };