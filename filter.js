var input; var ul; var list; var a;

function caller(){
  ul = document.getElementById('mobiles');
  list = ul.getElementsByTagName('li')
  input = document.getElementById('mobile_search');
  input.addEventListener("input", filterList, false);
}

function filterList(){
  input = document.getElementById('mobile_search').value.toLowerCase();
  if(input.length > 0){
      ul.style.visibility="visible";
  }else{
      ul.style.visibility="hidden";
  }
  for(i = 0; i<list.length;i++){
    a = list[i].getElementsByTagName('a')[0].innerHTML.toLowerCase();
    if(a.indexOf(input) > -1){
      list[i].style.display = "";
    }
    else{
      list[i].style.display = "none";
    }
  }
}

window.addEventListener("load", caller, false);
