// Ambil elemen tombol dan card

const btnKeliling = document.getElementById('btnKeliling');
const btnLuas = document.getElementById('btnLuas');
const cardKeliling = document.getElementById('card-keliling');
const cardLuas = document.getElementById('card-luas');
const submitKeliling = document.getElementById('submit-keliling');
const submitLuas = document.getElementById('submit-luas');
const hasilKeliling = document.getElementById('hasil-keliling');
const hasilLuas = document.getElementById('hasil-luas');
const inputKeliling = document.getElementById('input-keliling');
const inputLuas = document.getElementById('input-luas');

// Tambahkan event listener untuk tombol Keliling
btnKeliling.addEventListener('click', function (e){
  e.preventDefault();
  cardKeliling.style.display = 'block'; // Tampilkan card Keliling
  cardLuas.style.display = 'none'; // Sembunyikan card Luas
 // console.log('keliling');
});

// Tambahkan event listener untuk tombol Luas
btnLuas.addEventListener('click', function (e) {
  e.preventDefault();
  cardKeliling.style.display = 'none'; // Sembunyikan card Keliling
  cardLuas.style.display = 'block'; // Tampilkan card Luas
 // console.log('luas');
});

submitKeliling.addEventListener('click', function(e) {
//  console.log({hasilKeliling});
  let answer = 0;
  let val = parseFloat(inputKeliling.value); // Use input.value to get the input value
    answer = val * 4;
//  console.log(answer);
  hasilKeliling.innerHTML = "<p>K = 4 x S <br/>K = " +4+" x "+val+"<br/>K = "+answer+"</p>";
  // Now you can use the 'answer' variable as needed
});


submitLuas.addEventListener('click', function(e) {
 // console.log({hasilLuas});
  let answer = 0;
  let val = parseFloat(inputLuas.value); // Use input.value to get the input value
    answer = val * val;
 // console.log(answer);
  hasilLuas.innerHTML = "<p>L = S x S <br/>L = " +val+" x "+val+"<br/>L = "+answer+"</p>";
  // Now you can use the 'answer' variable as needed
});

const resetLuas = document.getElementById('reset-luas');

resetLuas.addEventListener('click',function(){
    hasilLuas.innerHTML = "";
    inputLuas.value = null;
})


const resetKeliling = document.getElementById('reset-keliling');

resetKeliling.addEventListener('click',function(){
    hasilKeliling.innerHTML = "";
    inputKeliling.value = null;
})
