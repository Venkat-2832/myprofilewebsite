import React, { useEffect, useRef } from "react";

function MouseTrail() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(44, 47, 51, 0.7)";
      ctx.lineWidth = 10;
      ctx.lineCap = "round";

      pointsRef.current.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
        point.life -= 1.2;
      });

      ctx.stroke();

      // remove faded points
      pointsRef.current = pointsRef.current.filter(p => p.life > 0);

      requestAnimationFrame(draw);
    };

    draw();

    const onMouseDown = () => {
      isDrawingRef.current = true;
    };

    const onMouseUp = () => {
      isDrawingRef.current = false;
    };

    const onMouseMove = (e) => {
      if (!isDrawingRef.current) return;

      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 30
      });
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
}

export default MouseTrail;
