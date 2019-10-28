function updateSpec() {
  selectclass = document.getElementById('select_class');
  selectspec = document.getElementById('select_spec');
  
  selectspec.length = 0;
  
  if (selectclass.text == "Death Knight") {
    selectspec.options.add("Blood", 0);
  }
  
}
