import Company from '../../models/Company'
import Vacancy from '../../models/Vacancy'


export const VACANCIES = [
    new Vacancy(
        1,
        'Programador Front-End - Júnior',
        1,
        'Estamos buscando um programador Front-End Júnior altamente motivado e apaixonado por tecnologia para se juntar à nossa equipe. \nO candidato ideal terá habilidades sólidas em desenvolvimento web e desejo de aprender e crescer dentro de um ambiente dinâmico.\n\n• Vaga presencial; \n• Salário de R$ 2.000 + VT R$ 600,00 + VR R$ 700,00; \n• Benefícios a combinar.',
        '• Formação em ADS ou outro curso afim; \n• Conhecimento em HTML, CSS e JavaScript; \n• Experiência com o framework React.',
        '• Conhecimento em UX/UI; \n• Conhecimento em metodologias ágeis, como Scrum; \n• Conhecimento em Git.',
        '../../assets/vagas/front-end.png'
    ),
    new Vacancy(
        2,
        'Desenvolvimento Mobile - Estágio',
        2,
        'Estamos em busca de estagiários talentosos e entusiasmados para se juntarem à nossa equipe de Desenvolvimento Mobile. Esta é uma oportunidade única para aprender e crescer em um ambiente de trabalho estimulante, desenvolvendo habilidades essenciais em desenvolvimento de aplicativos móveis. \n\n• Vaga presencial; \n• Bolsa estágio de R$ 800,00 \n• Possibilidade de contratação futura',
        '• Estudante matriculado em ADS ou outro curso afim; \n• Conhecimento em React Native (Android) e/ou Swift (iOS); \n• Familiaridade com o ambiente de desenvolvimento integrado (IDE) Xcode (iOS) e/ou Android Studio (Android).',
        '• Experiência prévia em projetos de desenvolvimento mobile, seja acadêmico ou pessoal; \n• Conhecimento em UX/UI;',
        '../../assets/vagas/dev-mobile.png'
    ),
    new Vacancy(
        3,
        'Analista de Banco de Dados - Sênior',
        3,
        'Estamos buscando um Analista de Banco de Dados Sênior altamente qualificado e experiente para liderar nossos esforços de gestão e otimização de dados. Este papel desempenhará um papel fundamental na definição da estratégia de dados da empresa, garantindo a integridade, segurança e desempenho de nossos sistemas de banco de dados. \n\n• Vaga híbrida; \n Salário de R$ 10.000,00; \n• Plano de saúde e Seguro de Vida incluídos.',
        '• Formação em ADS ou outro curso afim; \n• Experiência comprovada em administração de bancos de dados em ambientes corporativos, com um mínimo de 5 anos de experiência; \n• Proficiência em bancos de dados relacionais, como Oracle, SQL Server, MySQL, etc. \n• Forte experiência em modelagem de dados, design de esquema e normalização de banco de dados.',
        '• Experiência em liderança técnica, com habilidades demonstradas em gerenciar projetos; \n• Certificações relevantes em administração de banco de dados, como Oracle Certified Professional (OCP) ou Microsoft Certified: Azure Database Administrator Associate; \n• Proficiência em ferramentas de monitoramento de desempenho de banco de dados, como Oracle Enterprise Manager, SQL Server Management Studio, etc.',
        '../../assets/vagas/banco-de-dados.png'
    ),
    new Vacancy(
        4,
        'Designer',
        2,
        'Estamos em busca de um Designer talentoso e apaixonado para se juntar à nossa equipe. O candidato ideal terá uma sólida compreensão dos princípios de design e habilidades criativas excepcionais para transformar conceitos em experiências visuais memoráveis. \n\n• Vaga home-office; \n• Salário de R$ 4.236,00',
        '• Experiência em software de design gráfico, como Adobe Photoshop, Illustrator e/ou Sketch; \n• Compreensão dos princípios de design, incluindo layout, tipografia, cor e composição; \n• Capacidade de trabalhar de forma independente e gerenciar múltiplos projetos simultaneamente, cumprindo prazos apertados.',
        '• Formação acadêmica em Design Gráfico, Design de Comunicação Visual ou outro curso afim; \n• Conhecimento em UX/UI; \n• Forte portfólio com projetos já realizados, seja profissional ou pessoal.',
        '../../assets/vagas/designer.png'
    )
]

export const COMPANIES = [
    new Company(
        1,
        'TechWave Solutions',
        'Nossa empresa é uma start-up inovadora no setor de tecnologia, especializada no desenvolvimento de soluções web. Estamos comprometidos em criar produtos de alta qualidade que atendam às necessidades e expectativas dos nossos clientes.',
        '../../assets/empresas/techwave.jpg'
    ),
    new Company(
        2,
        'MobileTech Innovations',
        'A MobileTech Innovations é uma empresa de tecnologia focada no desenvolvimento de soluções móveis de ponta há mais de 15 anos no mercado. Nosso ambiente de trabalho é dinâmico e colaborativo, oferecendo a todos os funcionários a oportunidade de se envolver em projetos desafiadores.',
        '../../assets/empresas/mobiletech.jpg'
    ),
    new Company(
        3,
        'DataForge LTDA',
        'A DataForge é uma empresa líder no setor de tecnologia, especializada em desenvolvimento de software e soluções de dados para clientes em diversos segmentos. Nossa equipe é composta por profissionais talentosos e apaixonados por inovação, comprometidos em oferecer soluções de alta qualidade e valor agregado aos nossos clientes.',
        '../../assets/empresas/dataforge.jpg'
    )
]