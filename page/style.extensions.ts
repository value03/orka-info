import { StyleProperty, Variable, Calculation, GlobalPropertyValue, ImageSource, Length, Percentage } from '@acryps/style';

const globalKeywords = ['inherit', 'initial', 'unset', 'revert', 'revert-layer'];

// Type definitions for mask properties
export type MaskRepeatType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | Variable<MaskRepeatType> | Calculation<Partial<MaskRepeatType>>;

export type MaskSizeKeyword = 'auto' | 'cover' | 'contain' | Variable<MaskSizeKeyword> | Calculation<Partial<MaskSizeKeyword>>;
export type MaskSizeValue = Length | Percentage | MaskSizeKeyword | Variable<MaskSizeValue> | Calculation<Partial<MaskSizeValue>>;

export type MaskPositionKeyword = 'center' | 'top' | 'bottom' | 'left' | 'right' | Variable<MaskPositionKeyword> | Calculation<Partial<MaskPositionKeyword>>;
export type MaskPositionValue = MaskPositionKeyword | Length | Percentage | Variable<MaskPositionValue> | Calculation<Partial<MaskPositionValue>>;

// Factory for creating mask properties with vendor prefixes
function createMaskProperty<T>(propertyName: string) {
    const webkitPropertyName = `-webkit-${propertyName}`;

    class MaskGlobalStyleProperty extends StyleProperty {
        static properties = ['value'];
        value: GlobalPropertyValue;

        constructor(value: GlobalPropertyValue) {
            super(propertyName);
            this.value = value;
        }

        toValueString() {
            return `${this.value}`;
        }

        // Generate both standard and webkit prefixed versions
        toString() {
            const valueStr = this.toValueString();
            return `${webkitPropertyName}: ${valueStr};\n${propertyName}: ${valueStr};`;
        }
    }

    class MaskStyleProperty extends StyleProperty {
        static properties = ['values'];
        values: T[];

        constructor(...values: T[]) {
            super(propertyName);
            this.values = values;
        }

        toValueString() {
            return this.values.join(', ');
        }

        // Generate both standard and webkit prefixed versions
        toString() {
            const valueStr = this.toValueString();
            return `${webkitPropertyName}: ${valueStr};\n${propertyName}: ${valueStr};`;
        }
    }

    // Return overloaded function with proper types
    return Object.assign(
        function(...parameters: T[] | [GlobalPropertyValue]) {
            if (parameters.length === 1) {
                const value = (parameters[0] instanceof Variable || parameters[0] instanceof Calculation)
                    ? parameters[0].toValueString()
                    : parameters[0];
                if (globalKeywords.includes(value as string)) {
                    return new MaskGlobalStyleProperty(parameters[0] as GlobalPropertyValue);
                }
            }
            return new MaskStyleProperty(...parameters as T[]);
        },
        // Allow TypeScript to see these as separate overloads
        {} as {
            (value: GlobalPropertyValue): MaskGlobalStyleProperty;
            (...values: T[]): MaskStyleProperty;
        }
    );
}

export const maskImage = createMaskProperty<ImageSource>('mask-image');
export const maskSize = createMaskProperty<MaskSizeValue>('mask-size');
export const maskPosition = createMaskProperty<MaskPositionValue>('mask-position');
export const maskRepeat = createMaskProperty<MaskRepeatType>('mask-repeat');
