const PLATFORM_TO_OS = {
  darwin: "macOS",
  win32: "Windows",
  linux: "Linux"
};
function createProcessOperatingSystemProvider() {
  const platform = process.platform;
  return {
    getName() {
      return platform;
    },
    getDisplayName() {
      const system = PLATFORM_TO_OS[platform] ?? platform;
      return `${system} (${process.arch})`;
    }
  };
}
export {
  createProcessOperatingSystemProvider
};
