export const textVariant = (delay) => {
  return {
    // hidden: When the animation starts, the text is hidden, slightly above its final position (y: -50) and fully transparent (opacity: 0).
    hidden: {
      y: -50,
      opacity: 0,
    },
    // The text slides into place (y: 0) and becomes fully visible (opacity: 1).
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    // Initially, the element is positioned off-screen, based on the direction parameter. It's also transparent (opacity: 0).
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    // The element moves to its normal position (x: 0, y: 0) and fades in.
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    // The element starts small (scale: 0) and invisible (opacity: 0).
    hidden: {
      scale: 0,
      opacity: 0,
    },
    // It grows to normal size (scale: 1) and fades in (opacity: 1).
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    // The element starts completely off-screen in the given direction.
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    //It slides into view.
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

//Các phần tử sẽ transition lần lượt chứ animation của các phần tử sẽ ko chạy cùng lúc.
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};