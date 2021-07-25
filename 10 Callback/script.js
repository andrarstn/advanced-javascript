function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response)
            }else if(xhr.readyState === 404 ){
                error(xhr.response)
            }
        }
    }

    xhr.open('get', url)

    xhr.send()
}

console.log('mulai');

getDataMahasiswa(
    'data/mahasiswa.json', 
    results=>{
        const mhs = JSON.parse(results)
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    ()=>{}
);

console.log('selesai');