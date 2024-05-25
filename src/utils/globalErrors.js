import { toast } from "react-toastify";

export function handleApiErros(err) {
  toast.error(err.response.data.message || "Something went wrong!");
}
