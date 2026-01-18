import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { toastTestimonials } from "../data";

export default function ToastAuto() {
    useEffect(() => {
        console.log("ToastAuto aktif");
        let index = 0;

        const interval = setInterval(() => {
            const data = toastTestimonials[index];

            toast.success(
                 <span>
                    <strong>{data.name}</strong> dari cabang{" "}
                    <strong>{data.branch}</strong> resmi bergabung{" "}
                    <strong>menjadi mitra Ayam Geprek Sederhana</strong>
                </span>
            );

            index = (index + 1) % toastTestimonials.length;
        },15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Toaster
            position="bottom-right"
            toastOptions={{
                duration: 4000,
                style: {
                    borderRadius: "12px",
                },
            }}
        />
    );
}