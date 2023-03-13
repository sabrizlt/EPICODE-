function dig(n){
    document.form.area.value = document.form.area.value+n
  }
  function risultato() {
    var c = document.form.area.value;
    if (c){
      document.form.area.value = eval(c);
    }
  }

  function reset() {
    document.form.area.value = '';
  }

