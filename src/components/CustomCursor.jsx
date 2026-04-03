import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-badge",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovering ? 3 : 1})`,
          transition: "transform 0.2s ease",
        }}
      />
      <div
        className="custom-cursor-outline"
        style={{
          transform: `translate(${position.x - 15}px, ${position.y - 15}px) scale(${isHovering ? 1.5 : 1})`,
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />
    </>
  );
}

export default CustomCursor;
