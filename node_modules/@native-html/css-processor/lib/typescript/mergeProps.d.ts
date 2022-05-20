declare function mergeProps<T extends Record<string, any>>(props: Array<T | null>): T;
export default mergeProps;
