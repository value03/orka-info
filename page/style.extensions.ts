import { StyleProperty, Variable, Calculation} from '@acryps/style';


export class MaskImageGlobalStyleProperty extends StyleProperty {
    static properties = ['value'];
      value: any;

      constructor(value: any) {
          super('mask-image');
          this.value = value;
      }

      toValueString() {
          return `${this.value}`;
      }
  }

  export class MaskImageStyleProperty extends StyleProperty {
      static properties = ['sources'];
      sources: any[];

      constructor(...sources: any[]) {
          super('mask-image');
          this.sources = sources;
      }

      toValueString() {
          return `${this.sources.join(', ')}`;
      }
  }

  export function maskImage(...parameters: any[]) {
      if (parameters.length === 1) {
          const value = (parameters[0] instanceof Variable || parameters[0] instanceof Calculation)
              ? parameters[0].toValueString()
              : parameters[0];
          if (['inherit', 'initial', 'unset', 'revert', 'revert-layer'].includes(value)) {
              return new MaskImageGlobalStyleProperty(parameters[0]);
          }
      }
      return new MaskImageStyleProperty(...parameters);
  }
