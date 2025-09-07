import { useEffect, useRef } from "react";

export default function MatrixBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const letters = "01";

        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        let drops = Array(columns).fill(0).map(() => Math.random() * -canvas.height / fontSize);

        // Mudar cor do fundo
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        function draw() {
            // Mudar cor do rastro
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                const x = i * fontSize;

                let bright = Math.random() > 0.9;
                ctx.fillStyle = bright ? '#F0AFFF' : '#B400FF';
                ctx.shadowColor = "transparent";
                ctx.shadowBlur = 0;

                ctx.fillText(text, x, y * fontSize);
                drops[i] = y * fontSize > canvas.height && Math.random() > 0.999 ? 0 : y + 1;
            });
        }

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
            }}
        />
    );
}