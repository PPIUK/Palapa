declare const internalRenderers: {
    img: import("./render-types").InternalBlockRenderer;
    ul: import("./render-types").InternalBlockRenderer;
    ol: import("./render-types").InternalBlockRenderer;
    a: import("./render-types").InternalMixedRenderer;
};
export default internalRenderers;
