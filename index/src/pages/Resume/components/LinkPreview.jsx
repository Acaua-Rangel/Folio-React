import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const linkData = {
    "github.com/Acaua-Rangel": {
        title: "Acauã Rangel - GitHub",
        description: "AI Agent Engineer & Full-Stack Developer. Open source projects and contributions.",
    },
    "linkedin.com/in/acau": {
        title: "Acauã Rangel - LinkedIn",
        description: "AI Agent Engineer at Ford Motor Company. Full-Stack Developer based in Salvador, BA.",
    },
    "github.com/monan-ai/monan-sdk": {
        title: "Monan SDK",
        description: "Open source framework in Bun for local conversational AI agents. Hybrid inference, native RAG with SQLite and PII masking.",
    },
    "top.gg/bot/921954829352468572": {
        title: "Pitanga - Discord Bot",
        description: "Multifunctional Discord bot with TTS, music system, virtual economy, mini-games, and fun commands for communities.",
    },
    "phoenixligajovem.netlify.app": {
        title: "Phoenix - Liga Jovem",
        description: "Responsive website with Gemini API integration for an interactive chatbot for SENAI Cimatec teachers.",
    },
};

function getPreviewData(href) {
    for (const [key, value] of Object.entries(linkData)) {
        if (href.includes(key)) return value;
    }
    return null;
}

function getFavicon(href) {
    try {
        const url = new URL(href);
        return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=32`;
    } catch {
        return null;
    }
}

function LinkPreview() {
    const [preview, setPreview] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [placement, setPlacement] = useState("right");
    const tooltipRef = useRef(null);
    const hideTimeoutRef = useRef(null);

    const showPreview = useCallback((anchor) => {
        clearTimeout(hideTimeoutRef.current);
        const href = anchor.href;
        const data = getPreviewData(href);
        if (!data) return;

        const favicon = getFavicon(href);
        const rect = anchor.getBoundingClientRect();
        const tooltipW = 288;
        const tooltipH = 160;
        const rightX = rect.right + 12;
        const rightFits = rightX + tooltipW <= window.innerWidth;

        if (rightFits) {
            setPlacement("right");
            setPosition({
                x: rightX,
                y: rect.top + rect.height / 2,
            });
        } else {
            setPlacement("bottom");
            setPosition({
                x: rect.left,
                y: rect.bottom + 12,
            });
        }
        setPreview({ ...data, favicon, href });
    }, []);

    const hidePreview = useCallback(() => {
        hideTimeoutRef.current = setTimeout(() => {
            setPreview(null);
        }, 200);
    }, []);

    // Animate tooltip on show
    useEffect(() => {
        if (preview && tooltipRef.current) {
            gsap.fromTo(tooltipRef.current, 
                { opacity: 0, x: placement === "right" ? -8 : 0, y: placement === "bottom" ? -8 : 0, scale: 0.95 },
                { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.25, ease: "power2.out" }
            );
        }
    }, [preview, placement]);

    // Event delegation
    useEffect(() => {
        const handleMouseOver = (e) => {
            const anchor = e.target.closest("a[href^='http']");
            if (anchor && getPreviewData(anchor.href)) {
                showPreview(anchor);
            }
        };

        const handleMouseOut = (e) => {
            const anchor = e.target.closest("a[href^='http']");
            if (anchor) {
                hidePreview();
            }
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            clearTimeout(hideTimeoutRef.current);
        };
    }, [showPreview, hidePreview]);

    if (!preview) return null;

    return (
        <div
            ref={tooltipRef}
            className="fixed z-9999 pointer-events-none"
            style={{
                left: position.x,
                top: position.y,
                transform: placement === "right" ? "translateY(-50%)" : "none",
            }}
        >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-72 flex flex-col gap-3">
                {/* Header: favicon + domain */}
                <div className="flex items-center gap-2.5">
                    {preview.favicon && (
                        <img 
                            src={preview.favicon} 
                            alt="" 
                            className="w-5 h-5 rounded-sm shrink-0"
                        />
                    )}
                    <span className="text-xs text-gray-400 truncate font-medium">
                        {(() => {
                            try { return new URL(preview.href).hostname; } catch { return ""; }
                        })()}
                    </span>
                </div>
                {/* Title */}
                <h4 className="text-sm font-bold text-gray-900 leading-snug">
                    {preview.title}
                </h4>
                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                    {preview.description}
                </p>
            </div>
        </div>
    );
}

export default LinkPreview;
