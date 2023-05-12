import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message) => {
  if (!message) {
    return;
  }
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

const Toast = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
