import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message) => {
  toast.success(message, {
    autoClose: 2000,
    position: 'top-right'
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    autoClose: 2000,
    position: 'top-right'
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
