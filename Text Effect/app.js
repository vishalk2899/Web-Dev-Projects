const logo = document.querySelectorAll("#logo path");

for(let i=0; i<logo.length;i++){
  console.log(logo.length);
  console.log(`Letter $(1) is ${logo[i].getTotalLength()}`);
}
