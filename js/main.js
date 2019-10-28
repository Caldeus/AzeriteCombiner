function updateSpec() {
  selectclass = document.getElementById('select_class');
  selectspec = document.getElementById('select_spec');
  
  //clear options
  if (selectspec.length > 0) {
    selectspec.length = 0;
  }
  
  var spec1 = document.createElement("option");
  var spec2 = document.createElement("option");
  var spec3 = document.createElement("option");
  var spec4 = document.createElement("option");
  // assigning Specs to Classes
  // Death Knight
  if (selectclass.value == 0) {
    spec1.text = "Blood";
    spec2.text = "Frost";
    spec3.text = "Unholy";
  }//Demon Hunter
  else if (selectclass.value == 1) {
    selectspec.options.remove(2);
    spec1.text = "Havoc";
    spec2.text = "Vengeance";
  }//Druid
  else if (selectclass.value == 2) {
    spec1.text = "Balance";
    spec2.text = "Feral";
    spec3.text = "Guardian";
    spec4.text = "Restoration";
  }//Hunter
  else if (selectclass.value == 3) {
    spec1.text = "Beast Mastery";
    spec2.text = "Marksmanship";
    spec3.text = "Survival";
  }//Mage
  else if (selectclass.value == 4) {
    spec1.text = "Arcane";
    spec2.text = "Fire";
    spec3.text = "Frost";
  }//Monk
  else if (selectclass.value == 5) {
    spec1.text = "Brewmaster";
    spec2.text = "Marksmanship";
    spec3.text = "Survival";
  }//Paladin
  else if (selectclass.value == 6) {
    spec1.text = "Brewmaster";
    spec2.text = "Mistweaver";
    spec3.text = "Windwalker";
  }//Priest
  else if (selectclass.value == 7) {
    spec1.text = "Discipline";
    spec2.text = "Holy";
    spec3.text = "Shadow";
  }//Rogue
  else if (selectclass.value == 8) {
    spec1.text = "Assassination";
    spec2.text = "Outlaw";
    spec3.text = "Subtlety";
  }//Shaman
  else if (selectclass.value == 9) {
    spec1.text = "Elemental";
    spec2.text = "Enhancement";
    spec3.text = "Restoration";
  }//Warlock
  else if (selectclass.value == 10) {
    spec1.text = "Affliction";
    spec2.text = "Demonology";
    spec3.text = "Destruction";
  }//Warrior
  else if (selectclass.value == 11) {
    spec1.text = "Arms";
    spec2.text = "Fury";
    spec3.text = "Protection";
  }
  //post specs
  //DH (2specs)
  if (selectclass.value == 1) {
    selectspec.options.add(spec1);
    selectspec.options.add(spec2);
  }//Druid (4specs)
  else if (selectclass.value == 2) {
    selectspec.options.add(spec1);
    selectspec.options.add(spec2);
    selectspec.options.add(spec3);
    selectspec.options.add(spec4);
  }//rest
  else {
    selectspec.options.add(spec1);
    selectspec.options.add(spec2);
    selectspec.options.add(spec3);
  }
  
}
