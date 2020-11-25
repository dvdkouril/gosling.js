import { GeminidSpec } from '../geminid.schema';

/**
 * Update track-level specs considering the root-level specs (e.g., arrangements).
 * @param spec
 */
export function fixSpecDownstream(spec: GeminidSpec) {
    /**
     * Flag tracks to use circular marks
     */
    if (spec.layout?.type === 'circular') {
        // We need to let individual tracks know that they are rendered in a circular layout
        spec.tracks.forEach(t => {
            if (t.circularLayout === undefined) {
                // EXPERIMENTAL: Remove if statement
                t.circularLayout = true;
            }
        });
    }
}
