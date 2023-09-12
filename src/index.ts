import { transformTool } from "@he3-kit/utils";

export default transformTool({
  sampleData: "<h1>Hello</h1>",
  inputHandler: (str) => {
    return new DOMParser().parseFromString(str, "text/html").documentElement
      .textContent;
  },
});
