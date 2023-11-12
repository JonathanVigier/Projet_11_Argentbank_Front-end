import toast from "react-hot-toast";

export function serverErrorHandler(response) {
  switch (response.status) {
    case 200:
      toast.success(response.message);
      if (window.location.pathname === "/login") {
        setTimeout(() => {
          window.location.href = "http://localhost:3000/profile";
        }, 500);
      }
      break;
    case 400:
      toast.error("Invalid Credentials");
      break;
    case 401:
      toast.error(response.message);
      setTimeout(() => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "http://localhost:3000/login";
      }, 500);
      break;
    case 500:
      toast.error(response.message);
      break;
    default:
      return;
  }
}
