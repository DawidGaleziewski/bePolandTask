const uploadFileForm = document.querySelector('#upload-file');
const uploadFileInput = document.querySelector('#upload-file__image');
const uploadFilePreview = document.querySelector('#upload-preview');

const uploadEventHandler = (event)=> {
    const uploadedFiles = Array.from(event.target.files);
    const imageElement = document.createElement('img');

    uploadedFiles.forEach((file, index)=> {
        imageElement.src = URL.createObjectURL(file);
        uploadFilePreview.appendChild(imageElement);
    })


}

uploadFileInput.addEventListener('change', uploadEventHandler)






// console.log(imageElement)

