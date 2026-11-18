import { createInertiaApp } from "@inertiajs/react";
import type { ComponentType } from "react";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "./components/ui/Toast";

const pages = import.meta.glob<{ default: ComponentType }>("./pages/**/*.tsx");

createInertiaApp({
    title: (title) => (title ? `${title} — Peoplix` : "Peoplix"),
    resolve: async (name) => {
        const loadPage = pages[`./pages/${name}.tsx`];

        if (!loadPage) {
            throw new Error(`Page not found: ${name}`);
        }

        const page = await loadPage();

        return page.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ToastProvider>
                <App {...props} />
            </ToastProvider>,
        );
    },
    progress: { color: "#7c3aed", showSpinner: false },
});
