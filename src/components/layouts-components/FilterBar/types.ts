export interface ComposeFiltersPayloadType {
    category: string[];
    author: string[];
    meat: string[];
    side: string[];
}

export type ToggleFn = (value: string) => void;
