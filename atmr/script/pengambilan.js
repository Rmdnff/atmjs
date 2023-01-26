const tunai = {
    seratus:"100.000",
    duaratus:"200.000",
    tigaratus:"300.000",
    limaratus:"500.000",
    satujuta:"1000000",
    satujutalimaratus:"1500000",
    duajuta:"2000000",
}

const form1 = document.getElementById("form1")
alert('sisa saldo anda 5.000.000')

form1.innerHTML = `
<button onclick="penarikan(${tunai.seratus})"><- ${tunai.seratus}</button>
<button onclick="penarikan(${tunai.duaratus})"><- ${tunai.duaratus}</button>
<button onclick="penarikan(${tunai.tigaratus})"><- ${tunai.tigaratus}</button>
<button onclick="penarikan(${tunai.limaratus})"><- ${tunai.limaratus}</button>
`
const form2 = document.getElementById("form2")

form2.innerHTML = `
<button onclick="penarikan(${tunai.satujuta})"><- ${tunai.satujuta}</button>
<button onclick="penarikan(${tunai.satujutalimaratus})"><- ${tunai.satujutalimaratus}</button>
<button onclick="penarikan(${tunai.duajuta})"><- ${tunai.duajuta}</button>
`

let sisaSaldo = "5000000"

const penarikan = (value)=>{

 const non= confirm(`sisa saldo anda ${sisaSaldo - value}`)
sisaSaldo = sisaSaldo - value

if(non== true){
    location.href="ambilkartu.html"
}
}