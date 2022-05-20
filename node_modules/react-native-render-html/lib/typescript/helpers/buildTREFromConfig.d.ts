import { TRenderEngineConfig } from '../shared-types';
import TRenderEngine from '@native-html/transient-render-engine';
/**
 * Build a {@link TRenderEngine} instance from a configuration object.
 *
 * @remarks This utility can be useful to test and debug the TRE layer of your
 * application.
 *
 * @param props - The configuration from which a TRE should be built.
 */
export default function buildTREFromConfig(props: TRenderEngineConfig): TRenderEngine;
