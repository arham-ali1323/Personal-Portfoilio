import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";

export const FloatingDock = ({
  items,
  desktopClassName = "",
  mobileClassName = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(Infinity);
  
  return (
    <>
      {/* Desktop Dock */}
      <div className="hidden md:flex justify-center items-center group">
        <motion.div 
          className="flex gap-4 items-center px-6 py-4 glass rounded-2xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {items.map((item, idx) => (
            <IconContainer
              mouseX={mouseX}
              key={idx}
              hovered={hoveredIndex === idx}
              index={idx}
              {...item}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Mobile Dock */}
      <div className={clsx("flex md:hidden justify-center w-full", mobileClassName)}>
        <motion.div 
          className="flex gap-2 items-center justify-center px-3 py-2 glass rounded-xl border border-white/10 shadow-xl max-w-[90vw] overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {items.map((item, idx) => (
            <IconContainer
              mouseX={mouseX}
              key={idx}
              hovered={hoveredIndex === idx}
              index={idx}
              {...item}
              setHoveredIndex={setHoveredIndex}
              isMobile={true}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

function IconContainer({
  mouseX,
  index,
  hovered,
  setHoveredIndex,
  title,
  icon,
  href,
  isMobile = false,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  
  const baseSize = isMobile ? 40 : 48;
  const hoverSize = isMobile ? 48 : 60;
  
  const widthTransform = useTransform(distance, (distance) => {
    if (hovered) {
      return hoverSize;
    }
    if (distance < 0) {
      return Math.max(baseSize, baseSize + distance * 0.3);
    } else {
      return Math.max(baseSize, baseSize - distance * 0.3);
    }
  });
  
  const heightTransform = useTransform(widthTransform, (width) => {
    return hovered ? hoverSize : baseSize;
  });
  
  const widthTransformSpring = useSpring(widthTransform);
  const heightTransformSpring = useSpring(heightTransform);

  return (
    <motion.a
      href={href}
      ref={ref}
      className={`relative flex flex-col items-center justify-center ${isMobile ? 'p-1' : 'p-2'}`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{ width: widthTransformSpring, height: heightTransformSpring }}
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence>
        {hovered && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10, position: "absolute" }}
            animate={{ opacity: 1, y: -60 }}
            exit={{ opacity: 0, y: -40 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 glass border border-white/20 text-white text-xs rounded-xl whitespace-nowrap font-medium shadow-lg"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="flex items-center justify-center w-full"
        style={{ width: widthTransformSpring, height: heightTransformSpring }}
      >
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:from-white/15 hover:to-white/10">
          <div className={`relative w-full h-full flex items-center justify-center ${isMobile ? 'p-2' : 'p-3'}`}>
            <div className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} text-white/80 hover:text-white transition-colors duration-300`}>
              {icon}
            </div>
          </div>
        </div>
      </motion.div>
      {!isMobile && (
        <motion.span
          className="text-xs text-white/60 hover:text-white/90 mt-2 text-center whitespace-nowrap font-medium transition-colors duration-300"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: hovered ? 1 : 0.8, y: hovered ? 0 : 2 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.span>
      )}
    </motion.a>
  );
}
