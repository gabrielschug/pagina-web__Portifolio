document.addEventListener('DOMContentLoaded', () => {

    const projectsData = [
        {   title: "Réplica Spotify", 
            subtitle: "Website replicando o Spotify, utilizando HTML5, CSS3 e JavaScript para interações. Realizei o deploy deste site no GitHub Pages", 
            image:"src/images/replica_spotify.png", 
            link:"https://github.com/gabrielschug/pagina-web__replica_spotify"},
        
        {   title: "API de Pedidos", 
            subtitle: "API REST de gerenciamento de pedidos desenvolvida em Node.js + Express. Projeto CRUD com middlewares e boas práticas de back-end.", 
            image:"src/images/api-pedidos.png", 
            link:"https://github.com/gabrielschug/api-pedidos"},
        {   title: "Projeto deste Portfólio", 
            subtitle: "Aqui está o código que estruturei para criar este portfólio. Utilizo HTML5, Tailwind CSS e JavaScript. Fiz o deploy desta página com o Netlify", 
            image:"src/images/imagem_portfólio.png", 
            link:"https://github.com/gabrielschug/pagina-web__Portifolio"}
    ]
    
    const projectsGrid = document.querySelector('.projetos-caixa')
    
    projectsData.forEach( project => {
        const projectCard = document.createElement('div')
        projectCard.classList.add('project__card')
        
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            <div class="projetos-card m-2 bg-cinza_card rounded-2xl backdrop-blur-xs border-1 border-solid border-vidro overflow-hidden md:transition md:duration-500 md:ease-in-out cursor-pointer md:hover:shadow-[0_0_20px_rgba(224,173,111,0.3)] md:hover:transform md:hover:translate-y-[-10px] md:hover:scale-105">
                <img class= "card-imagem h-[200px] w-full object-cover" 
                    src="${project.image}" 
                    alt="${`Imagem de ${project.image}`}"/>
                <div class="projetos-card-texto p-2">
                    <h3 class="card-info mb-1">${project.title}</h3>
                    <p class="card-paragrafo text-texto-card text-justify text-sm">${project.subtitle}</p>
                </div>
            </div>
            </a>
        `
        projectsGrid.appendChild(projectCard)
    });

})