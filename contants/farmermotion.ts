export const dropMenu = (active: boolean) => ({
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  show: {
    height: active ? "auto" : 0,
    opacity: active ? 1 : 0,
    overflow: active ? "hidden" : "hidden",
    transition: {
      duration: 0.2,
    },
  },
});
