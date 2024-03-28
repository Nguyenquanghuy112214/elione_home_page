export const staggerContainer = (staggerChildren?:any, delayChildren?:any, delay?:any) => ({
    hidden: {
    //   opacity: 0,
    },
    show: {
    //   opacity: 1,
  
      transition: {
        // duration: 1,
        delay: delay,
        staggerChildren,
        delayChildren,
      },
    },
    exit: {
      opacity: 0,
    },
  });
  
  export const planetVariants = (active:any) => ({
    hidden: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
    },
    show: {
      height: active === true ? 'auto' : 0,
      opacity: active === true ? 1 : 0,
      overflow: active === true ? 'visible' : 'hidden',
      transition: {
        type: 'spring',
        duration: 1.2,
        delay: 0.4,
        bounce: 0.47,
        damping: 20,
        stiffness: 200,
      },
    },
  });
  
  export const opacity = (delay:any, duration:any) => ({
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  export const tranformY = (delay?:any, duration?:any, top?:any) => ({
    hidden: {
      opacity: 0,
  
      y: !top ? '50%' : '-30%',
    },
    show: {
      opacity: 1,
      y: 0,
  
      transition: {
        type: 'spring',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: !top ? '50%' : '-50',
    },
  });
  
  export const tranformX = (delay?:any, duration?:any, left?:any) => ({
    hidden: {
      opacity: 0,
  
      x: !left ? '50%' : '-30%',
    },
    show: {
      opacity: 1,
      x: 0,
      
  
      transition: {
        type: 'spring',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: !left ? '50%' : '-50',
    },
  });
  
  export const textContainer = (time:any) => ({
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: time || 0.05, delayChildren: i * 0.2 },
    }),
  });
  export const textVariant2 = (y:any) => ({
    hidden: {
      opacity: 0,
      y: y || 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  });
  
  export const zoomIn = (delay:any, duration:any, scale:any) => ({
    hidden: {
      scale: scale || 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        delay,
        duration,
        ease: 'easeIn',
      },
    },
    exit: {
      opacity: 0,
      scale:1
    },
  });
  