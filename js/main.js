function updateSpec() {
  selectclass = document.getElementById('select_class');
  selectspec = document.getElementById('select_spec');
  
  selectspec.length = 0;
  
  var spec1 = document.createElement("spec1");
  var spec2 = document.createElement("spec2");
  var spec3 = document.createElement("spec3");
  
  if (selectclass.text == "Death Knight") {
    spec1.text = "Blood";
    spec1.text = "Frost";
    spec1.text = "Unholy";
    selectspec.options.add(spec1, 0);
    selectspec.options.add(spec2, 1);
    selectspec.options.add(spec3, 2);
  }
  
}
