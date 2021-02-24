const counter = document.getElementById('counter');

const majCounter = async () => {
    const data = await fetch('https://api.countapi.xyz/hit/sltcava/visites');
    const count = await data.json();
    counter.innerHTML = count.value;
    // counter.style.filter = 'blur(0)';
}

majCounter();