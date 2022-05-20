declare const useProfiler: ({ name, prop }: {
    name?: string | undefined;
    prop?: string | undefined;
}) => () => void;
export default useProfiler;
