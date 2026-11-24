let relogio = document.querySelector('.relogio');

function atualizarRelogio() {
    const agora = new Date();
    relogio.textContent = agora.toLocaleTimeString('pt-br', {hour:'2-digit', minute:'2-digit'});
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);