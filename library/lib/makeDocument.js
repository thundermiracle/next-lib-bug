import Document from 'next/document';

import extendsWithMui from './extendsMui';

import defaultTheme from './defaultTheme';

// import compose from '../util/compose';

/**
 * Making _document from next/document.
 * Including material-ui.
 * @param {MUITheme} theme
 */
const makeNextDocument = theme => extendsWithMui(theme || defaultTheme)(Document);

export default makeNextDocument;

export const DefaultNextDocument = makeNextDocument();
