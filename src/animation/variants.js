export const variants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: ({ delay }) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    }),
};