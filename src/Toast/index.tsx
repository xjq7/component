let toastContainer: HTMLDivElement;

let toastNode = [];

export interface ToastOptions {
  text: string;
  time?: number;
}

function show(options: ToastOptions) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'x-toast';
    document.body.appendChild(toastContainer);
  }

  const { time = 5000, text } = options;

  const toast = document.createElement('div');
  toast.className = 'x-toast-node';
  toast.textContent = text;

  toastContainer.appendChild(toast);
  toastContainer.classList.add('x-toast-show');

  const hide = () => {
    toastContainer.removeChild(toast);
  };

  setTimeout(() => {
    hide();
    toastContainer.classList.remove('x-toast-show');
  }, time);

  return {
    hide,
  };
}

export default { show };
