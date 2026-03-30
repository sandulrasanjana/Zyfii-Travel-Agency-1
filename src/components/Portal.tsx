"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Ensure we are in a client environment and mounted
    if (!mounted || typeof document === 'undefined') {
        return null;
    }

    return createPortal(children, document.body);
};

export default Portal;
