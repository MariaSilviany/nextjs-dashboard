// types/formidable.d.ts
declare module 'formidable' {
  import * as http from 'http';
  import { EventEmitter } from 'events';

  export interface File {
    originalFilename?: string | null;
    filepath: string;
    mimetype?: string | null;
    newFilename: string;
    size: number;
  }

  export interface Fields {
    [key: string]: any;
  }

  export interface Files {
    [key: string]: File | File[];
  }

  export interface Options {
    multiples?: boolean;
    uploadDir?: string;
    keepExtensions?: boolean;
    maxFileSize?: number;
    allowEmptyFiles?: boolean;
  }

  export class IncomingForm extends EventEmitter {
    constructor(options?: Options);
    parse(
      req: http.IncomingMessage,
      callback: (err: any, fields: Fields, files: Files) => void
    ): void;
  }

  const formidable: {
    IncomingForm: typeof IncomingForm;
  };

  export default formidable;
}
