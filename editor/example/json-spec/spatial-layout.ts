import type { GoslingSpec } from '@gosling-lang/gosling-schema';

export const EX_SPEC_SPATIAL_LAYOUT: GoslingSpec = {
    title: 'Spatial Layout',
    //layout: "linear", //~ can specify here for all views
    subtitle: 'Example of using the new spatial layout.',
    //xDomain: { chromosome: "chr1", interval: [1, 3000500] },
    views: [
        {
            layout: "linear",
            tracks: [
                {
                    id: 'track-2',
                    data: {
                        url: 'https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec',
                        type: 'multivec',
                        row: 'sample',
                        column: 'position',
                        value: 'peak',
                        categories: ['sample 1', 'sample 2', 'sample 3', 'sample 4']
                    },
                    mark: 'bar',
                    x: { field: 'position', type: 'genomic', axis: 'top' },
                    y: { field: 'peak', type: 'quantitative' },
                    row: { field: 'sample', type: 'nominal' },
                    color: { field: 'sample', type: 'nominal', legend: true },
                    width: 600,
                    height: 130,
                }
            ]
        },
        //{
        //    layout: "spatial",
        //},
    ],
};
