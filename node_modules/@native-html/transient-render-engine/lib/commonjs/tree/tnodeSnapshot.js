"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tnodeSnapshot;

function printTableStyles(styles) {
  const entries = Object.entries(styles);
  return entries.reduce((prev, [name, val]) => {
    return `${prev}${prev ? ',' : ''} ${name}: ${JSON.stringify(val)}`;
  }, '');
}

function tnodePropertiesString(tnode, {
  withNodeIndex,
  withStyles
}) {
  var _tnode$classes;

  const tagPrint = tnode.tagName ? `tagName="${tnode.tagName}"` : 'anonymous';
  const unregisteredPrint = tnode.isUnregistered ? 'unregistered' : null;
  const indexPrint = withNodeIndex ? `nodeIndex={${tnode.nodeIndex}}` : null;
  const idPrint = tnode.id ? `id=${tnode.id}` : null;
  const classesPrint = (_tnode$classes = tnode.classes) !== null && _tnode$classes !== void 0 && _tnode$classes.length ? `classes={[${tnode.classes.join(', ')}]}` : null;
  const dataPrint = tnode.type === 'text' ? `data=${JSON.stringify(tnode.data)}` : null;
  const anchorPrint = typeof tnode.attributes.href === 'string' ? `href=${JSON.stringify(tnode.attributes.href)}` : null;
  const srcPrint = typeof tnode.attributes.src === 'string' ? `src=${JSON.stringify(tnode.attributes.src)}` : null;
  const pstyles = withStyles ? printTableStyles(tnode.getNativeStyles()) : null;
  const nativeStylesPrint = pstyles ? `nativeStyles={{${pstyles} }}` : null;
  const oStyles = withStyles ? printTableStyles(tnode.getWebStyles()) : null;
  const webStylesPrint = oStyles ? `webStyles={{${oStyles}}}` : null;
  const detailsPrint = [tagPrint, unregisteredPrint, indexPrint, idPrint, classesPrint, dataPrint, anchorPrint, srcPrint, nativeStylesPrint, webStylesPrint].filter(p => p !== null).join(' ');
  return `<${tnode.displayName} ${detailsPrint}`;
}

function tnodeSnapshot(tnode, params) {
  const {
    parentLeftPrefix = '',
    isChild = false,
    isLast = true,
    withStyles,
    withNodeIndex
  } = params;
  const prefix = isChild ? '  ' : '';
  const totalPrefixLeft = parentLeftPrefix + prefix;
  const childrenPrint = tnode.children.map((c, i) => tnodeSnapshot(c, {
    parentLeftPrefix: parentLeftPrefix + ''.padStart(prefix.length, ' '),
    isChild: true,
    isLast: i === tnode.children.length - 1,
    withStyles,
    withNodeIndex
  })).join('');
  return `${totalPrefixLeft}${tnodePropertiesString(tnode, {
    withStyles,
    withNodeIndex
  })}${childrenPrint ? `>\n${childrenPrint}\n${totalPrefixLeft}</${tnode.displayName}>` : ' />'}${isLast ? '' : '\n'}`;
}
//# sourceMappingURL=tnodeSnapshot.js.map