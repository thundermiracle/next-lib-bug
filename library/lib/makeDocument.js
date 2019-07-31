import Document from "next/document";

import extendsDocument from "./extendsDocument";

const makeNextDocument = (applyBootstrap, DocumentComponent = Document) =>
  extendsDocument(applyBootstrap)(DocumentComponent);

export default makeNextDocument;

export const DefaultNextDocument = makeNextDocument();
