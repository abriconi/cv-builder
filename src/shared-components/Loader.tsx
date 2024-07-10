import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loader() {
  return (
    <div role="status" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <FontAwesomeIcon icon={faSpinner} className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
