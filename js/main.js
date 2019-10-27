



function updateData() {
  options.class = document.getElementById('select_class').text;
  options.spec = document.getElementById('select_spec');
  
  //DK 0, DH 1, Dr 2, Hu 3, Ma 4, Mo 5, Pa 6, Pr 7, Ro 8, Sh 9, 10 WL, 11 War
  if (options.class == "Death Knight") {
    options.spec[0].options[0].textContent = "Blood"
    options.spec[1].options[1].textContent = "Frost"
    options.spec[2].options[2].textContent = "Unholy"
  }
  else if (options.class == 1) {
    options.spec[0].options[0].textContent = "Havoc"
    options.spec[1].options[1].textContent = "Vengeance"
    options.spec[2].options[2].textContent = ""
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
};
