import { ReactElement } from 'react';
import { RenderHTMLProps } from './shared-types';
/**
 * Render HTML text in native views!
 *
 * @remarks If your application uses many instances of this component, you
 * should share the render engine across those instances via the
 * {@link TRenderEngineProvider} and {@link RenderHTMLConfigProvider}
 * components, and render the HTML with {@link RenderHTMLSource} instead. That
 * should significantly increase performance.
 *
 * @warning It should never be a child of a React Native `Text` element, as the
 * layout will break.
 *
 * @public
 */
export default function RenderHTML(props: RenderHTMLProps): ReactElement;
