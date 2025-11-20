function createProcessCloudIdeProvider() {
  return {
    getName() {
      return Boolean(process.env.GITPOD_REPO_ROOT) ? "gitpod" : null;
    }
  };
}
export {
  createProcessCloudIdeProvider
};
