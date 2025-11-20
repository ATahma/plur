function createBuildTimeAstroVersionProvider() {
  const version = "5.15.9";
  return {
    getVersion() {
      return version;
    }
  };
}
export {
  createBuildTimeAstroVersionProvider
};
