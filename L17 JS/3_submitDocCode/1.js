let input = document.querySelector("#imageInput");

      input.addEventListener("change", (e) => {
        const img = document.getElementById("imgFile");

        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920, // You can adjust this based on your requirements
        };

        imageCompression(e.target.files[0], options)
          .then((compressedFile) => {
            let newImg = URL.createObjectURL(compressedFile);
            img.src = newImg;
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      });