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
                `${data.name} dari cabang ${data.branch} resmi bergabung menjadi mitra Ayam Geprek Mas Jampang`
            );

            index = (index + 1) % toastTestimonials.length;
        }, 6000);

        return () => clearInterval(interval);
    }, []);

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