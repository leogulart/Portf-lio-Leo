/* ==================================================
   PROJETOS
================================================== */

const projects = {

    charrua: {

        number: "01",

        title: "Super App Charrua",

        category: "Product · Discovery · Requisitos",

        intro:
            "Atuação no desenvolvimento e evolução do Super App Charrua, conectando necessidades das unidades, áreas internas e time de tecnologia.",

        contextTitle: "Contexto",

        context:
            "O Super App Charrua reúne diferentes funcionalidades e conteúdos voltados à experiência dos clientes da rede. Minha atuação esteve próxima da operação e do desenvolvimento do produto, acompanhando necessidades das unidades e transformando essas informações em demandas para evolução do aplicativo.",

        roleTitle: "Minha atuação",

        role: [
            "Contato com as unidades e áreas internas para entender necessidades e oportunidades de melhoria.",
            "Levantamento e organização de requisitos junto ao Product Owner.",
            "Documentação das informações e estruturação das demandas.",
            "Construção de estratégias junto ao time de desenvolvimento para evolução do aplicativo.",
            "Acompanhamento das tarefas e evolução do projeto utilizando Jira.",
            "Participação no processo de atualização de funcionalidades e melhorias do produto."
        ],

        images: [
            "images/appcharrua.jpg",
            "images/charrua-01.jpg"
        ],

        imageCaptions: [
            "Super App Charrua",
            "Interface e experiência do aplicativo"
        ],

        process: [
            "Entendimento",
            "Levantamento de requisitos",
            "Estratégia com desenvolvimento",
            "Evolução do produto"
        ]
    },


 sim: {

    number: "02",

    title: "Super App SIM",

    category: "Product · B2C · Dados · Operação",

    intro:
        "Atuação na evolução do Super App SIM, conectando necessidades de usuários, operação, dados e tecnologia para apoiar decisões e melhorias na experiência do produto.",

    contextTitle: "Contexto",

    context:
        "O Super App SIM reúne funcionalidades voltadas à experiência dos clientes da Rede SIM, como ofertas, promoções, benefícios, compras e localização de postos. Minha atuação esteve próxima do produto, dos usuários e da operação interna, participando da organização de demandas, configuração de funcionalidades e acompanhamento da evolução do aplicativo.",

    roleTitle: "Minha atuação",

    role: [
        "Apoio ao Product Owner no levantamento, organização e priorização de requisitos.",
        "Contato com usuários e áreas internas para identificar necessidades, problemas e oportunidades de melhoria.",
        "Acompanhamento de demandas e evolução das funcionalidades do produto.",
        "Atuação no backoffice utilizado para operação, configuração e gerenciamento de funcionalidades do aplicativo.",
        "Cadastro e configuração de diferentes formatos de promoções dentro do produto.",
        "Criação e configuração de cupons de desconto.",
        "Análise de dados para compreender comportamento dos usuários e desempenho das ações.",
        "Documentação de informações, requisitos e demandas utilizando Jira.",
        "Interface entre áreas de negócio, usuários e equipe de tecnologia para alinhamento das demandas."
    ],

    images: [
        "images/appredesim.jpg",
        "images/sim-01.jpg",
        "images/sim-02.jpg",
        "images/sim-03.jpg"
    ],

    imageCaptions: [
        "Experiência do usuário no Super App SIM",
        "Ofertas e promoções",
        "Localização de postos",
        "Funcionalidades e operação do produto"
    ],

    process: [
        "Entendimento do usuário",
        "Levantamento de requisitos",
        "Operação e configuração",
        "Dados e análise",
        "Evolução do produto"
    ]
},

    simplifica: {

        number: "03",

        title: "App Simplifica",

        category: "Product · Processos · Tecnologia",

        intro:
            "Aplicativo interno desenvolvido para apoiar gestores de área na organização e acompanhamento de suas rotinas.",

        contextTitle: "Contexto",

        context:
            "O App Simplifica foi desenvolvido como uma ferramenta interna para apoiar gestores de área na organização de atividades, acompanhamento de tarefas e execução de rotinas operacionais.",

        roleTitle: "Minha atuação",

        role: [
            "Apoio ao Product Owner durante o desenvolvimento do produto.",
            "Levantamento das necessidades dos usuários.",
            "Organização e documentação dos requisitos.",
            "Tradução das necessidades do negócio para o time de tecnologia.",
            "Acompanhamento das demandas e do backlog.",
            "Participação na evolução das funcionalidades do aplicativo.",
            "Documentação técnica e funcional do produto."
        ],

        images: [
            "images/appsimplifica.jpg",
            "images/simplifica-01.jpg",
            "images/simplifica-02.jpg"
        ],

        imageCaptions: [
            "App Simplifica",
            "Gestão de tarefas",
            "Acompanhamento de rotinas"
        ],

        process: [
            "Necessidade do usuário",
            "Levantamento",
            "Desenvolvimento",
            "Evolução"
        ]
    },


    processos: {

        number: "04",

        title: "Otimização de Processos",

        category: "Eficiência · Dados · Automação",

        intro:
            "Atuação voltada à organização de processos, documentação de informações e identificação de oportunidades de melhoria.",

        contextTitle: "Contexto",

        context:
            "Além da atuação diretamente ligada aos aplicativos, participei de iniciativas de otimização de processos internos, buscando organizar informações, reduzir retrabalho e aumentar a confiabilidade das atividades.",

        roleTitle: "Minha atuação",

        role: [
            "Mapeamento e documentação de processos.",
            "Organização de informações e fluxos de trabalho.",
            "Identificação de oportunidades de melhoria.",
            "Apoio na análise de dados.",
            "Automatização de processos simples.",
            "Documentação de procedimentos e informações.",
            "Interface entre áreas administrativas, negócio e tecnologia."
        ],

        images: [],

        imageCaptions: [],

        process: [
            "Mapeamento",
            "Análise",
            "Melhoria",
            "Automação"
        ]
    }

};


/* ==================================================
   IDENTIFICAR PROJETO
================================================== */

function getProjectFromURL() {

    const params = new URLSearchParams(window.location.search);

    return params.get("projeto");

}


/* ==================================================
   CARROSSEL
================================================== */

function createCarousel(project) {

    if (!project.images || project.images.length === 0) {
        return "";
    }


    const slides = project.images.map((image, index) => {

        return `
            <div class="carousel-slide">

                <img
                    src="${image}"
                    alt="${project.title} — imagem ${index + 1}"
                >

            </div>
        `;

    }).join("");


    const dots = project.images.map((image, index) => {

        return `
            <button
                class="carousel-dot ${index === 0 ? "active" : ""}"
                data-slide="${index}"
                aria-label="Ir para imagem ${index + 1}"
            ></button>
        `;

    }).join("");


    return `

        <section class="case-gallery">

            <div class="carousel">

                <button
                    class="carousel-button carousel-prev"
                    aria-label="Imagem anterior"
                >
                    ←
                </button>


                <div class="carousel-window">

                    <div class="carousel-track">

                        ${slides}

                    </div>

                </div>


                <button
                    class="carousel-button carousel-next"
                    aria-label="Próxima imagem"
                >
                    →
                </button>

            </div>


            <div class="carousel-footer">

                <div class="carousel-dots">

                    ${dots}

                </div>


                <div class="carousel-counter">

                    <span class="current-slide">01</span>
                    /
                    <span>${String(project.images.length).padStart(2, "0")}</span>

                </div>

            </div>


            <div class="carousel-caption">

                ${project.imageCaptions[0] || ""}

            </div>

        </section>

    `;

}


/* ==================================================
   CRIAR PÁGINA DO PROJETO
================================================== */

function createProjectPage(project) {

    const page = document.getElementById("project-page");

    if (!page || !project) {
        return;
    }


    const roleHTML = project.role
        .map(item => `<li>${item}</li>`)
        .join("");


    const processHTML = project.process
        .map((item, index) => {

            return `

                <div class="process-step">

                    <span>
                        0${index + 1}
                    </span>

                    <strong>
                        ${item}
                    </strong>

                </div>

            `;

        })
        .join("");


    const projectKeys = Object.keys(projects);

    const currentKey = projectKeys.find(
        key => projects[key] === project
    );

    const currentIndex = projectKeys.indexOf(currentKey);


    const nextKey =
        projectKeys[
            (currentIndex + 1) % projectKeys.length
        ];


    const previousKey =
        projectKeys[
            (currentIndex - 1 + projectKeys.length) %
            projectKeys.length
        ];


    page.innerHTML = `

        <section class="case-hero">

            <div class="case-label">
                ${project.number} — PROJETO
            </div>


            <div class="case-hero-grid">

                <div>

                    <h1>
                        ${project.title}
                    </h1>

                </div>


                <div class="case-intro">

                    <p class="case-category">
                        ${project.category}
                    </p>

                    <p>
                        ${project.intro}
                    </p>

                </div>

            </div>

        </section>


        ${createCarousel(project)}


        <section class="case-content">


            <div class="case-section">

                <div class="case-section-label">
                    CONTEXTO
                </div>


                <div class="case-section-content">

                    <h2>
                        ${project.contextTitle}
                    </h2>

                    <p>
                        ${project.context}
                    </p>

                </div>

            </div>



            <div class="case-section">

                <div class="case-section-label">
                    ATUAÇÃO
                </div>


                <div class="case-section-content">

                    <h2>
                        ${project.roleTitle}
                    </h2>


                    <ul class="role-list">

                        ${roleHTML}

                    </ul>

                </div>

            </div>



            <div class="case-section">

                <div class="case-section-label">
                    PROCESSO
                </div>


                <div class="case-section-content">

                    <h2>
                        Da necessidade à evolução
                    </h2>


                    <div class="process-grid">

                        ${processHTML}

                    </div>

                </div>

            </div>


        </section>


        <section class="case-end">

            <div class="case-end-number">
                ${project.number}
            </div>


            <h2>
                Produto, tecnologia e processos.
            </h2>


            <a
                href="index.html#projetos"
                class="back-projects"
            >
                ← Voltar para projetos
            </a>

        </section>



        <section class="project-navigation">

            <a
                href="projeto.html?projeto=${previousKey}"
                class="project-nav-item"
            >

                <span>
                    Projeto anterior
                </span>

                <strong>
                    ${projects[previousKey].title}
                </strong>

            </a>


            <a
                href="projeto.html?projeto=${nextKey}"
                class="project-nav-item next"
            >

                <span>
                    Próximo projeto
                </span>

                <strong>
                    ${projects[nextKey].title} →
                </strong>

            </a>

        </section>

    `;


    document.title =
        `${project.title} — Leo Gulart`;


    initializeCarousel(project);

}


/* ==================================================
   FUNCIONAMENTO DO CARROSSEL
================================================== */

function initializeCarousel(project) {

    const carousel =
        document.querySelector(".carousel");

    if (!carousel) {
        return;
    }


    const track =
        carousel.querySelector(".carousel-track");

    const slides =
        carousel.querySelectorAll(".carousel-slide");

    const previous =
        carousel.querySelector(".carousel-prev");

    const next =
        carousel.querySelector(".carousel-next");

    const dots =
        carousel.querySelectorAll(".carousel-dot");

    const current =
        carousel.querySelector(".current-slide");

    const caption =
        document.querySelector(".carousel-caption");


    let currentIndex = 0;


    function updateCarousel(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }


        currentIndex = index;


        track.style.transform =
            `translateX(-${index * 100}%)`;


        dots.forEach((dot, dotIndex) => {

            dot.classList.toggle(
                "active",
                dotIndex === index
            );

        });


        current.textContent =
            String(index + 1).padStart(2, "0");


        if (caption && project.imageCaptions[index]) {

            caption.textContent =
                project.imageCaptions[index];

        }

    }


    previous.addEventListener(
        "click",
        () => updateCarousel(currentIndex - 1)
    );


    next.addEventListener(
        "click",
        () => updateCarousel(currentIndex + 1)
    );


    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => updateCarousel(index)
        );

    });


    /* SWIPE NO CELULAR */

    let startX = 0;
    let endX = 0;


    carousel.addEventListener(
        "touchstart",
        event => {

            startX =
                event.touches[0].clientX;

        },
        { passive: true }
    );


    carousel.addEventListener(
        "touchend",
        event => {

            endX =
                event.changedTouches[0].clientX;


            const distance =
                startX - endX;


            if (Math.abs(distance) < 50) {
                return;
            }


            if (distance > 0) {

                updateCarousel(
                    currentIndex + 1
                );

            } else {

                updateCarousel(
                    currentIndex - 1
                );

            }

        },
        { passive: true }
    );


    /* TECLADO */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "ArrowRight") {

                updateCarousel(
                    currentIndex + 1
                );

            }

            if (event.key === "ArrowLeft") {

                updateCarousel(
                    currentIndex - 1
                );

            }

        }
    );

}


/* ==================================================
   HOME — INTERAÇÕES
================================================== */

function initializeHome() {

    const projectCards =
        document.querySelectorAll(".project-card");


    /*
    Pequeno efeito de entrada nos projetos.
    */

    if (projectCards.length) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        projectCards.forEach(card => {

            observer.observe(card);

        });

    }


    /*
    Navegação ativa conforme a seção.
    */

    const sections =
        document.querySelectorAll(
            "main > section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".navbar nav a"
        );


    if (sections.length && navLinks.length) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        navLinks.forEach(link => {

                            link.classList.remove(
                                "nav-active"
                            );


                            const href =
                                link.getAttribute("href");


                            if (
                                href &&
                                href.includes(
                                    `#${entry.target.id}`
                                )
                            ) {

                                link.classList.add(
                                    "nav-active"
                                );

                            }

                        });

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }


    /*
    Número da seção no canto da Home.
    */

    if (!document.querySelector(".home-progress")) {

        const progress =
            document.createElement("div");

        progress.className =
            "home-progress";

        progress.innerHTML = `
            <span class="home-progress-current">
                01
            </span>
            <span class="home-progress-line"></span>
            <span>
                04
            </span>
        `;

        document.body.appendChild(progress);

    }

}


/* ==================================================
   INICIALIZAÇÃO
================================================== */

const currentProject =
    getProjectFromURL();


if (
    currentProject &&
    projects[currentProject]
) {

    createProjectPage(
        projects[currentProject]
    );

} else {

    initializeHome();

}