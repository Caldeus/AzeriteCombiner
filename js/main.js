



function updateData() {
  options.class = document.getElementById('select_class').text;
  options.spec = document.getElementById('select_spec');
  
  //DK 0, DH 1, Dr 2, Hu 3, Ma 4, Mo 5, Pa 6, Pr 7, Ro 8, Sh 9, 10 WL, 11 War
  if (options.class == "Death Knight") {
    options.spec.options[options.spec.options.length] = new Option('Blood', '0', false, false);
    options.spec.options[options.spec.options.length] = new Option('Frost', '0', false, false);
    options.spec.options[options.spec.options.length] = new Option('Unholy', '0', false, false);
  }
  else if (options.class == 1) {
    options.spec.options[options.spec.options.length] = new Option('Havoc', '0', false, false);
    options.spec.options[options.spec.options.length] = new Option('Vengeance', '0', false, false);
  }
  else if (options.class == 2) {
    
  }
  else if (options.class == 3) {
    
  }
  else if (options.class == 4) {
    
  }
  else if (options.class == 5) {
    
  }
  else if (options.class == 6) {
    
  }
  else if (options.class == 7) {
    
  }
  else if (options.class == 8) {
    
  }
  else if (options.class == 9) {
    
  }
  else if (options.class == 10) {
    
  }
  else if (options.class = 11) {
    
  }
}

function refesh() {
  updateData();
}
