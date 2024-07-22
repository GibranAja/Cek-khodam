// let lagi = true;
// while (lagi) {
//   let p = prompt("Pilih batu, gunting, atau kertas");
//   let comp = Math.random();

//   if (comp < 0.34) {
//     comp = "batu";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "gunting";
//   } else {
//     comp = "kertas";
//   }

//   let hasil = "";
//   if (p == comp) {
//     hasil = "seri";
//   } else if (p == "gunting") {
//     hasil = comp == "gunting" ? "menang" : "kalah";
//   } else if (p == "batu") {
//     hasil = comp == "kertas" ? "kalah" : "menang";
//   } else if (p == "kertas") {
//     hasil = comp == "gunting" ? "kalah" : "menang";
//   } else {
//     hasil = "bukan bagian suit";
//   }

//   alert("Kamu memilih: " + p + "\nKomputer memilih:" + comp);
//   alert("Maka kamu " + hasil);
//   lagi = confirm("Mau main lagi?");
// }

// alert('nuhun')

// let lagi = true;
// while (lagi) {
//   alert("Silakan tebak angka dari 1-10, kamu punya 3 kesempatan");
//   let comp = Math.floor(Math.random() * 10) + 1;
//   let kesempatan = 3;

//   alert("kamu memulai permainan dengan " + kesempatan + " kesempatan");
//   while (kesempatan >= 1) {
//     let player = parseInt(prompt("Silakan kamu tebak"));
//     let hasil = '';

//     if (player === comp) {
//       hasil = "Benar";
//       kesempatan -= 1;
//       alert('Selamat kamu benar, angka yang dicari adalah ' + comp)
//       break;
//     } else if (player > comp) {
//       hasil = "Terlalu Besar";
//       kesempatan -= 1;
//       alert(
//         kesempatan == 0 ? "Kesempatan kamu habis" :"Hasil " + hasil + ", kesempatan kamu tersisa " + kesempatan + " lagi"
//       );
//     } else if (player < comp) {
//       hasil = "Terlalu kecil";
//       kesempatan -= 1;
//       alert(
//         kesempatan == 0 ? "Kesempatan kamu habis" : "Hasil " + hasil + ", kesempatan kamu tersisa " + kesempatan + " lagi"
//       );
//     }
//     if (kesempatan === 0) {
//       alert("kamu gagal, angka yang dicari adalah " + comp);
//     }
//   }
//   lagi = confirm("Mau lagi");
// }
// alert('nuhun')

// let main = true;
// while (main) {
//   alert("Silakan tebak warna mejikuhibiniu");
//   let warna = ["merah", "jingga", "kuning", "hijau", "biru", "nila", "ungu"];
//   let comp = warna[Math.floor(Math.random() * warna.length)];
//   let kesempatan = 3;

//   alert("Kamu memiliki kesempatan " + kesempatan + " lagi");
//   while (kesempatan >= 1) {
//     let player = prompt(
//       "Silakan tebak warna! \nnote: jangan menggunakan huruf kapital"
//     );

//     if(!warna.includes(player)) {
//       alert( player +' tidak ada di daftar, silakan pilih yang ada di daftar')
//       continue;
//     }

//     let hasil = "";
//     if (player == comp) {
//       hasil = "Selamat kamu benar, warna yang dicari adalah " + comp;
//       alert(hasil);
//       break;
//     } else {
//       if (kesempatan > 0) {
//         hasil = 'Pilihan kamu salah'
//         kesempatan -= 1
//         alert(kesempatan === 0 ? 'Kesempatan kamu habis nih, warna yang dicari adalah ' + comp : hasil + ', tersisa ' + kesempatan + ' lagi')
//       } else {
//         hasil = 'Itu bukan warna yang benar'
//         kesempatan -= 1
//         alert(kesempatan === 0 ? 'Kesempatan kamu habis nih, warna yang dicari adalah ' + comp : hasil + ', tersisa ' + kesempatan + ' lagi')
//       }
//     }
//   }
//   main = confirm('Mau main lagi?')
// }
// alert('nuhun')

// let main = true;
// while (main) {
//   alert("Tebak negara ASEAN!!");
//   let negara = [
//     "Indonesia",
//     "Malaysia",
//     "Singapura",
//     "Brunei",
//     "Thailand",
//     "Philiphines",
//     "Laos",
//     "Kamboja",
//     "Myanmar",
//     "Vietnam",
//     "Timor leste",
//   ];
//   let bot = negara[Math.floor(Math.random() * negara.length)]
//   let kesempatan = 5;

//   alert("Silakan Bermain, untuk huruf pertama wajib kapital!!!");
//   while (kesempatan >= 1) {
//     let player = prompt("Tebak negara ASEAN!");
//     let hasil = "";

//     if (!negara.includes(player)) {
//       alert("Itu bukan negara yang ada di daftar");
//       continue;
//     }

//     if (player === bot) {
//       hasil = "Selamat Kamu Benar";
//       alert(hasil + ", jawabannya adalah " + bot);
//       break;
//     } else {
//       if(kesempatan > 0){
//         hasil = 'Kamu salah'
//         kesempatan -= 1
//         alert(kesempatan === 0 ? 'Kesempatan kamu habis!, jawabannya adalah ' + bot : hasil + ', bukan jawaban yang benar, kesempatan kamu tersisa ' + kesempatan)
//       } else {
//         hasil = 'Masih salah'
//         kesempatan -= 1
//         alert(kesempatan === 0 ? 'Kesempatan kamu habis!, jawabannya adalah ' + bot : hasil + ', bukan jawaban yang benar, kesempatan kamu tersisa ' + kesempatan)
//       }
//     }
//   }
//   main = confirm('Mau main lagi?')
// }
// alert('TerimaKasih')

function cekKhodam() {
  let khodam = [
    "Jerapah Botak",
    "Gajah Kurus",
    "Semut Gendut",
    "Bebek Pesek",
    "Kucing Cungkring",
    "Ayam Berkumis",
    "Singa Tuyul",
    "Kuda Bau",
    "Kelinci Gigi Ompong",
    "Buaya Caplang",
    "Kerbau Gingsul",
    "Harimau Keriting",
    "Kanguru Muka Tembok",
    "Koala Mata Juling",
    "Burung Beringus",
    "Ikan Kaki Bebek",
    "Tikus Buntut Panjang",
    "Kambing Kuping Lebar",
    "Domba Hidung Belang",
    "Monyet Keriputan",
    "Beruang Ceking",
    "Zebra Meler",
    "Tupai Pincang",
    "Kura-kura Bau Ketek",
    "Katak Bopeng",
    "Bunglon Cadel",
    "Landak Jenong",
    "Gorila Bulu Lebat",
    "Musang Jangkung",
    "Macan Gigi Tonggos",
    "Penguin Kumis Tebal",
    "Serigala Bibir Dower",
    "Marmut Pipi Tembem",
    "Trenggiling Jenggot",
    "Babi Bau Mulut",
    "Rusa Pantat Besar",
    "Ular Bulu Ketek",
    "Kelelawar Mulut Monyong",
    "Iguana Rambut Kribo",
    "Platypus Perut Buncit",
    "Hamster Bulu Hidung",
    "Anoa Jari Bengkok",
    "Cendrawasih Bintik-bintik",
    "Badak Botak Licin",
    "Kancil Pelupa",
    "Siamang Ingus Meler",
    "Burung Hantu Kepala Kotak",
    "Laba-laba Lidah Panjang",
    "Lobster Gigi Hitam",
    "Angsa Leher Sengklek",
    "Banteng Tangan Keriput",
    "Orangutan Kaki Bau",
    "Gurita Telinga Gajah",
    "Lumba-lumba Kumis Melintang",
    "Merak Jenggot Lebat",
    "Kuda Nil Bahu Sempit",
    "Flamingo Dagu Lancip",
    "Belalang Jempol Gede",
    "Udang Jari Bengkak",
    "Keong Lutut Bundar",
    "Kepiting Tumit Pecah-pecah",
    "Laba laba sunda",
    "Paus Paha Besar",
    "Bekantan Bujur Tepos",
    "Piranha Pinggang Karung",
    "Kadal Dada Tepos",
    "Kiwi Lengan Kekar",
    "Elang Alis Tebal",
    "Belut Darat",
    "Tapir Hidung Pesek",
    "Cheetah Pipi Tirus",
    "Biawak Benjol",
    "Capung Bibir Sumbing",
    "Keledai Bulu Mata Lentik",
    "Panda Kutil Banyak",
    "Rubah Lesung Pipit",
    "Anjing Laut Keriput Dini",
    "Bunglon Tompel Gede",
    "Kelinci Ompong Depan",
    "Walrus Gigi Kelinci",
    "Sapi Senyum Lebar",
    "Kalkun Mata Juling",
    "Burung Beo Suara Cempreng",
    "Codot Bau Kaki",
    "Cicak Ketek Basah",
    "Luwak Mulut Monyong",
    "Kuda Laut Jari Lentik",
    "Tokek Kuku Panjang",
    "Landak Rambut Mohawk",
    "Berang-berang Berbulu Kribo",
    "Burung Unta Berkacamata",
    "Ikan Paus Bertopi",
    "Nyamuk Berjenggot",
    "Banteng PDI",
    "Orang Bogor",
    "Patrick Emas",
    "Aufa Kehed",
    "Jerapah Cebol"
  ];
  let comp = khodam[Math.floor(Math.random() * khodam.length)];
  let name = prompt("Silakan masukan nama untuk di cek khodam!!");
  if (name === null || name.trim() === "") {
    alert(name + " tidak diizinkan");
    return;
  }
  alert(name + " khodamnya adalah " + comp);
}
