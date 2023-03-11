const scriptURL = 'https://script.google.com/macros/s/AKfycbwEuAtMwYQmFfPlz1GDBdXaJdsQen8_20zQdkauZnKAccJKlWYIM_xKQMWhNg3RmHdvRw/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Ketika Tombol Submit Di Klik
    // Tampilkan Tombol Loading. Hilangkan Tombol Kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // Tampilkan Tombol Kirim. Hilangkan Tombol Loading
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            // Tampilkan Alert
            myAlert.classList.toggle('d-none')
            // Reset Form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})