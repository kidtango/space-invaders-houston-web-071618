class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    crew.length ? (this.docked = false) : (this.docked = true);
    this.notifyCrew();
  }

  notifyCrew() {
    this.crew.forEach(crewMember => (crewMember.currentShip = this));
  }
}

scott = new CrewMember("Pilot");
pablo = new CrewMember("Gunner");
kevin = new CrewMember("Defender");

fireFalcon = new Spaceship(
  "Fire Falcon",
  [scott, kevin, pablo],
  "laser beams",
  "Ultron"
);
// console.log(fireFalcon.notifyCrew());

// console.log(scott);
// console.log(fireFalcon);
console.log(fireFalcon.docked);
console.log(scott.currentShip);
