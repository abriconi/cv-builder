import { IconUpload } from "../components/Builder/components/IconUpload";

export const CustomUploadFile = () => {
  const handleDelete = () => console.log("Delete");
  const handleUpload = () => console.log("Uppoad");

  return (
    <div className="flex flex-row items-center gap-4">
      <div className="rounded-md border bg-gray-50 p-4 shadow-md border border-gray-300 w-24">
        <IconUpload />
      </div>
      <div className="flex flex-col">
        <button type="button" className="text-blue-600 hover:underline" onClick={handleUpload}>
          Upload photo
        </button>
        <button type="button" className="text-blue-600 hover:underline" onClick={handleDelete}>
          Delete photo
        </button>
      </div>
    </div>
  );
};
