import type { UseIMGElementStateWithCacheProps, IMGElementStateError, IMGElementStateSuccess } from './img-types';
/**
 * This hook is useful when one has access to image natural dimensions prior to
 * loading. The `cachedNaturalDimensions` prop must be passed to immediately
 * compute concrete dimensions.
 */
export default function useIMGElementStateWithCache(props: UseIMGElementStateWithCacheProps): IMGElementStateError | IMGElementStateSuccess;
