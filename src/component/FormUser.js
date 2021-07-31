import React, {useState, useEffect} from 'react'

const initState = {
    id: 1,
    nama: "",
    pekerjaan: "",
    alamat: "",
    tanggalLahir: ""
}

const FormUser = (props) => {
    const [user, setUser] = useState(initState)
    const { location, match } = props
    const userArr = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    
    useEffect(() => {
        if (location.pathname.includes("update")){
            let data = userArr.find(e => e.id === parseInt(match.params.id))
            setUser(prevState => ({
                ...prevState,
                id: data.id,
                nama: data.nama,
                pekerjaan: data.pekerjaan,
                alamat: data.alamat,
                tanggalLahir: data.tanggalLahir
            }))
        }
    }, [])

    const handleState = (property, value) => {
        setUser(prevState => ({
            ...prevState,
            [property]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (location.pathname.includes("update")){ //Update User
            let idx = userArr.findIndex(obj => obj.id === parseInt(match.params.id))
            userArr[idx].nama = user.nama
            userArr[idx].pekerjaan = user.pekerjaan
            userArr[idx].alamat = user.alamat
            userArr[idx].tanggalLahir = user.tanggalLahir
            localStorage.setItem('user', JSON.stringify(userArr));
            setUser(initState)
            alert("Success Update")
        }else{ //Create User
            if(userArr.length !== 0){
                let length = userArr.length
                let id = userArr[length-1].id
                let body = {
                    id: id+1,
                    nama: user.nama,
                    pekerjaan: user.pekerjaan,
                    alamat: user.alamat,
                    tanggalLahir: user.tanggalLahir
                }
                userArr.push(body)
            }else{
                userArr.push(user)
            }
            localStorage.setItem('user', JSON.stringify(userArr));
            setUser(initState)
            alert("Success Add")
        }
    }

    const handleCancel = () => {
        window.history.back()
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>{`${location.pathname.includes("update") ? "Update" : "Add"} User`}</h1>
            <div>
                <div>
                    <label htmlFor="nama">Nama</label>
                    <input type="text" id="nama" name="nama" placeholder="Masukkan nama.." value={user.nama} onChange={(e) => handleState("nama",e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="pekerjaan">Pekerjaan</label>
                    <input type="text" id="pekerjaan" name="pekerjaan" placeholder="Masukkan pekerjaan.." value={user.pekerjaan} onChange={(e) => handleState("pekerjaan", e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="alamat">Alamat</label>
                    <input type="text" id="alamat" name="alamat" placeholder="Masukkan alamat.." value={user.alamat} onChange={(e) => handleState("alamat", e.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                    <input type="text" id="tanggalLahir" name="tanggalLahir" placeholder="Masukkan tanggal lahir.." value={user.tanggalLahir} onChange={(e) => handleState("tanggalLahir", e.target.value)}></input>
                </div>
            </div>
            <div>
                <button type="submit">Simpan</button>
                <button type="button" onClick={() => handleCancel()}>Batal</button>
            </div>
        </form>
    )
}

export default FormUser
