import { Toaster } from "react-hot-toast";

export default function Toast() {
    return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 6000,
        style: {
          borderRadius: "12px",
        },
      }}
    />
    );
}