const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
    "Perkenalkan nama saya MiuBot. Siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia} tahun, trus hobi kamu apaa?`,
    `Wihh sama dongg aku juga suka ${data?.hobi}, btw kamu udah punya pacar belum? `,
    `Ohhh ${data?.pacar}, yaudah kalau gitu semangatt yaa`,
]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
    init++
    if (init === 1){
        botDelay({ nama: jawaban.value })
    } else if (init === 2){
        botDelay({ usia: jawaban.value })
    } else if (init === 3){
        botDelay({ hobi: jawaban.value })
    } else if (init === 4){
        botDelay({ pacar: jawaban.value })
    } else if (init === 5){
        finishing()
    } else{
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    },[1000])
    usersData.push(jawaban.value)
    console.log({usersData: usersData})
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank you ${usersData[0]} udah main ke MiuBot 😉, lain kali kita ${usersData[2]} bareng yaa`
    jawaban.value = "Sama-sama MiuBot😁"
}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`)

    window.location.reload()
} 