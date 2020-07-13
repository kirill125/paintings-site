const drop = () => {
    const fileInputs = document.querySelectorAll("[name='upload']");
    ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlight(item) {
        item.closest(".file_upload").style.border = "5px solid yellow";
        item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, 0.7)";
    }

    function unhighlight(item) {
        item.closest(".file_upload").style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else if (item.closest('.row')){
            item.closest('.file_upload').style.backgroundColor = "#f7e7e6";
        }
        else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    ["dragenter", "dragover"].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => highlight(fileInput), false);
        });
    });

    ["dragleave", "drop"].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => unhighlight(fileInput), false);
        });
    });

    fileInputs.forEach(fileInput => {
        fileInput.addEventListener("drop", (event) => {
            fileInput.files = event.dataTransfer.files;
            let dots;
            const arr = fileInput.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            fileInput.previousElementSibling.textContent = name;
        });
    });
};
export default drop;