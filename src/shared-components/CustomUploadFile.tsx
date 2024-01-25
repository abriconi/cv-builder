import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ButtonText } from "./Buttons";

export const CustomUploadFile = () => {
  const uploadedPhoto = localStorage.getItem("userPhoto");
  const [image, setImage] = useState<string | null>(uploadedPhoto ? uploadedPhoto : null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);

      setImage(imageUrl);
      localStorage.setItem("userPhoto", imageUrl);
    } else {
      setImage(null);
      localStorage.removeItem("userPhoto");
    }
  };
  const handleDelete = () => {
    setImage(null);
    localStorage.removeItem("userPhoto");
  };

  console.log("image", image);

  return (
    <div className="flex flex-row gap-2">
      <label className="rounded-md border bg-gray-50 shadow-md border border-gray-300 w-16 h-16 flex items-center justify-center cursor-pointer">
        <input type="file" onChange={(e) => handleChange(e)} className="hidden" accept="image/png, image/jpeg" size={4000000} />
        {image ? (
          <img src={image} alt="Uploaded user" className="h-full w-full" />
        ) : (
          <FontAwesomeIcon icon={faUser} color="#ccc" size="2x" />
        )}
      </label>
      {image && <ButtonText name=" Delete photo" onClick={handleDelete} aligning="self-center" />}
    </div>
  );
};
