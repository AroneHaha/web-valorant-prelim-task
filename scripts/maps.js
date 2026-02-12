const maps = [
  { 
    name: "Bind", 
    description: "Bind is known for its teleporters that allow players to instantly travel between two points, creating unpredictable rotations. The map has two bomb sites (A & B) with tight chokepoints and long sightlines. Attackers often use smokes and utility to block defenders’ vision. Defenders can control mid or hookah to dominate rotations. It rewards both fast aggression and careful map control.", 
    images: ["bind1.webp","bind2.webp","bind3.webp"]
  },
  { 
    name: "Haven", 
    description: "Haven is unique with three bomb sites (A, B, C), making it harder for attackers to predict. The map has a mix of long sightlines and close-quarter areas, supporting both sharpshooters and duelists. Mid control is crucial for rotations between sites. Attackers often use smokes and flashes to execute bomb plants. Team coordination and communication are key to success here.", 
    images: ["haven1.webp","haven2.webp","haven3.webp"]
  },
  { 
    name: "Split", 
    description: "Split features tight vertical chokepoints and narrow corridors, making it a map that favors coordinated utility usage. It has two bomb sites (A & B) with mid control being highly contested. Attackers often rely on executing with flashes and smokes to clear defenders. Defenders can hold vertical angles to punish pushes. The map rewards precision aiming and strategic positioning.", 
    images: ["split1.webp","split2.webp","split3.webp"]
  },
  { 
    name: "Ascent", 
    description: "Ascent is an open map with large mid area that controls rotations. It has two bomb sites (A & B) and plenty of long sightlines. Attackers can quickly split between sites if mid is controlled. Defenders need to hold chokepoints and use utility to slow pushes. It favors operators/snipers and teams with strong mid control strategies.", 
    images: ["ascent1.webp","ascent2.webp","ascent3.webp"]
  },
  { 
    name: "Icebox", 
    description: "Icebox is a vertical map with tight vertical angles and crates for cover. It has two bomb sites (A & B) with many elevated positions for defenders. Attackers often execute with coordinated utility to take site control. Mid control can open paths to either bomb site. It rewards aggressive dueling and map awareness.", 
    images: ["icebox1.webp","icebox2.webp","icebox3.webp"]
  },
  { 
    name: "Breeze", 
    description: "Breeze is a long-range map with open areas and wide sightlines. Two bomb sites (A & B) feature multiple long corridors, perfect for snipers and utility-heavy pushes. Attackers often need careful spacing to avoid being picked off. Defenders can use long sightlines to control rotations. Breeze emphasizes precision shooting and strategic utility use.", 
    images: ["breeze1.webp","breeze2.webp","breeze3.webp"]
  },
  { 
    name: "Pearl", 
    description: "Pearl features tight chokepoints and a central mid area with fast rotations. Two bomb sites (A & B) require attackers to use utility to enter safely. Defenders can hold sightlines to control mid and delay pushes. Verticality is limited compared to maps like Icebox. Success depends on team communication and clearing corners effectively.", 
    images: ["pearl1.webp","pearl2.webp","pearl3.webp"]
  }
];

const grid = document.createElement("div");
grid.className = "mapsGrid flex flex-col gap-20";
document.querySelector("main").appendChild(grid);

maps.forEach((map, index) => {
  const section = document.createElement("section");
  section.className = "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center fade-in-section relative";

  const textDiv = document.createElement("div");
  textDiv.innerHTML = `
    <h2 class="text-6xl md:text-7xl font-bold uppercase text-text-dark mb-4">${map.name}</h2>
    <div class="h-1 w-24 bg-valorant-red mb-6"></div>
    <p class="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">${map.description}</p>
  `;

  const imgDiv = document.createElement("div");
  imgDiv.className = "relative w-full h-[500px]";
  const positions = [
    { pos: "top-0 left-0", size: "img-lg", border: "border-t-2 border-l-2" },
    { pos: "bottom-0 right-0", size: "img-sm", border: "border-b-2 border-r-2" },
    { pos: "top-[30%] left-[20%]", size: "img-md", border: "border border-valorant-red z-10 shadow-[0_0_20px_rgba(255,70,85,0.3)]" }
  ];

  map.images.forEach((img, i) => {
    const imgContainer = document.createElement("div");
    imgContainer.className = `map-img-container absolute ${positions[i].pos} ${positions[i].size} clip-corner overflow-hidden ${positions[i].border}`;
    imgContainer.innerHTML = `<img src="assets/maps/${img}" alt="${map.name} ${i+1}" class="w-full h-full object-cover">`;
    imgDiv.appendChild(imgContainer);
  });

  if (index % 2 === 0) {
    section.appendChild(imgDiv);
    section.appendChild(textDiv);
  } else {
    section.appendChild(textDiv);
    section.appendChild(imgDiv);
  }

  grid.appendChild(section);
});



