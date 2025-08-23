function toggleContrast() {
  document.body.classList.toggle('contrast');
}

function toggleLeituraFacil() {
  const body = document.body;
  body.classList.toggle('leitura-facil');
  if (body.classList.contains('leitura-facil')) {
    document.body.style.fontSize = '1.2rem';
  } else {
    document.body.style.fontSize = '';
  }
}

function searchTiles() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const tiles = document.getElementById('tileContainer').getElementsByClassName('tile');
  for (const tile of tiles) {
    if (tile.textContent.toLowerCase().includes(input)) {
      tile.style.display = '';
    } else {
      tile.style.display = 'none';
    }
  }
}

function openMapModal() {
  document.getElementById('mapModal').style.display = 'flex';
}

function closeMap() {
  document.getElementById('mapModal').style.display = 'none';
}
