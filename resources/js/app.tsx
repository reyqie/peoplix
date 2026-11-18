import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "./components/ui/Toast";

createInertiaApp({
    title: (title) => (title ? `${title} — Peoplix` : "Peoplix"),
    resolve: (name) => import(`./pages/${name}.tsx`),
    setup({ el, App, props }) {
        createRoot(el).render(
            <ToastProvider>
                <App {...props} />
            </ToastProvider>,
        );
    },
    progress: { color: "#7c3aed", showSpinner: false },
});
