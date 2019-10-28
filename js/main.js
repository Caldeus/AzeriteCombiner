function updateSpec() {
  options.class = document.getElementById('select_class');
  options.spec = document.getElementById('select_spec');
  
  for (i = 0; i < options.spec.length; i++) {
    options.spec.remove(i);
  }   
 }
