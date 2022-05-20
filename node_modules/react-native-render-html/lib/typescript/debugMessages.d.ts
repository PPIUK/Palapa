export declare type DebugType = 'noSource' | 'contentWidth' | 'outdatedUriProp' | 'outdatedHtmlProp' | 'outdatedListPrefixRenderersProps' | 'outdatedImagesDimensions' | 'outdatedOnLinkPressProp' | 'outdatedEnableExperimentalPercentWidth' | 'outdatedIgnoreNodesFunction' | 'outdatedAlterNode' | 'outdatedAlterChildren' | 'outdatedAlterData' | 'outdatedComputeImagesMaxWidth' | 'outdatedTriggerTREInvalidation';
declare let debugMessage: Record<DebugType, string>;
export declare type DebugMessages = typeof debugMessage;
export default debugMessage;
