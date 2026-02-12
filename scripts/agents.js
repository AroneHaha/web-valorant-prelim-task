  const agents = [
    { name: "Astra", role: "Controller", img: "astra.webp", icon: "astra_icon.webp" },
    { name: "Breach", role: "Initiator", img: "breach.webp", icon: "Breach_icon.webp" },
    { name: "Brimstone", role: "Controller", img: "brim.webp", icon: "Brimstone_icon.webp" },
    { name: "Chamber", role: "Sentinel", img: "chamber.webp", icon: "Chamber_icon.webp" },
    { name: "Clove", role: "Controller", img: "clove.webp", icon: "Clove_icon.webp" },
    { name: "Cypher", role: "Sentinel", img: "cyp.webp", icon: "Cypher_icon.webp" },
    { name: "Deadlock", role: "Sentinel", img: "dl.webp", icon: "Deadlock_icon.webp" },
    { name: "Fade", role: "Initiator", img: "fade.webp", icon: "Fade_icon.webp" },
    { name: "Gekko", role: "Initiator", img: "gekko.webp", icon: "Gekko_icon.webp" },
    { name: "Harbor", role: "Controller", img: "harbor.webp", icon: "Harbor_icon.webp" },
    { name: "Iso", role: "Duelist", img: "iso.webp", icon: "Iso_icon.webp" },
    { name: "Jett", role: "Duelist", img: "jett.webp", icon: "Jett_icon.webp" },
    { name: "KAY/O", role: "Initiator", img: "kayo.webp", icon: "Kayo_icon.webp" },
    { name: "Killjoy", role: "Sentinel", img: "kj.webp", icon: "Killjoy_icon.webp" },
    { name: "Neon", role: "Duelist", img: "neon.webp", icon: "Neon_icon.webp" },
    { name: "Omen", role: "Controller", img: "omen.webp", icon: "Omen_icon.webp" },
    { name: "Phoenix", role: "Duelist", img: "phx.webp", icon: "Phoenix_icon.webp" },
    { name: "Raze", role: "Duelist", img: "raze.webp", icon: "Raze_icon.webp" },
    { name: "Reyna", role: "Duelist", img: "reyna.webp", icon: "Reyna_icon.webp" },
    { name: "Sage", role: "Sentinel", img: "sage.webp", icon: "Sage_icon.webp" },
    { name: "Skye", role: "Initiator", img: "skye.webp", icon: "Skye_icon.webp" },
    { name: "Sova", role: "Initiator", img: "sov.webp", icon: "Sova_icon.webp" },
    { name: "Tejo", role: "Initiator", img: "tejo.webp", icon: "Tejo_icon.webp" },
    { name: "Veto", role: "Sentinel", img: "veto.webp", icon: "Veto_icon.webp" },
    { name: "Viper", role: "Controller", img: "viper.webp", icon: "Viper_icon.webp" },
    { name: "Vyse", role: "Sentinel", img: "vyse.webp", icon: "Vyse_icon.webp" },
    { name: "Waylay", role: "Duelist", img: "waylay.webp", icon: "Waylay_icon.webp" },
    { name: "Yoru", role: "Duelist", img: "yoru.webp", icon: "Yoru_icon.webp" },
  ];

  const grid = document.getElementById("agentsGrid");

  agents.forEach(agent => {
    const card = document.createElement("div");
    card.className = "relative group overflow-hidden h-[450px] cursor-pointer bg-valorant-card clip-corner transition-all duration-300 hover:shadow-2xl hover:shadow-valorant-red/50";
    card.innerHTML = `
      <img src="assets/agent-image/${agent.img}" alt="${agent.name}" class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:-translate-y-full filter brightness-90">
      <img src="assets/agents-hover/${agent.icon}" alt="${agent.name} Name" class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 z-10">
      <div class="absolute bottom-0 left-0 w-full p-4 border-t border-transparent group-hover:border-valorant-red transition-colors z-20">
        <div class="highlight-container">
          <h4 class="text-valorant-red text-xs font-bold uppercase tracking-widest mb-1">${agent.role}</h4>
          <h3 class="text-white text-3xl font-bold uppercase group-hover:text-4xl transition-all duration-300">${agent.name.toUpperCase()}</h3>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
    `;
    grid.appendChild(card);
  });