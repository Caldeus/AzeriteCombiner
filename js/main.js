function updateSpec() {
  selectclass = document.getElementById('select_class');
  selectspec = document.getElementById('select_spec');
  if (selectspec.length > 0) {
    selectspec.length = 0;
  }
  
  var spec1 = document.createElement("option");
  var spec2 = document.createElement("option");
  var spec3 = document.createElement("option");
  
  spec1.txt = "a";
  spec2.txt = "b";
  spec3.txt = "c";
  
  selectspec.options.add(spec1);
  selectspec.options.add(spec2);
  selectspec.options.add(spec3);
  
}
