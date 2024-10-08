import React, { useState } from "react";

const ImgUpload = ({ setFieldValue }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const httpUrlImg = "http://example.com/" + file.name;
        setImage(reader.result);
        setFieldValue("hinhAnh", httpUrlImg);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-between">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <img
            src={image}
            alt="Uploaded"
            style={{ maxWidth: "70%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImgUpload;
