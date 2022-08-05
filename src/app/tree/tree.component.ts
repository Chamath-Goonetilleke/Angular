import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.

*/

interface subNode {
  moduleName: string;
  moduleId: string;
  child: any;
}

interface FoodNode {
  parent?: string;
  moduleName?: string;
  moduleId?: string;
  child?: any;
  menuResources?: FoodNode[];
}

 const TREE_DATA: FoodNode[] =
   //   {
   //     name: 'Fruit',
   //     children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
   //   },
   //   {
   //     name: 'Vegetables',
   //     children: [
   //       {
   //         name: 'Green',
   //         children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
   //       },
   //       {
   //         name: 'Orange',
   //         children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
   //       },
   //     ],
   //   },
   // ]
   [
    //  {
    //    parent: 'FLEET',
    //    menuResources: [
    //      {
    //        parent: 'FLEET',
    //        menuResources: [{ parent: 'FLEET' }],
    //      },
    //      { moduleName: 'FLEET' },
    //    ],
    //  },
     {
       parent: 'FLEET',
       menuResources: [
         {
           moduleName: 'BAD ORDER CARS',
           moduleId: '2706586',
           child: null,
         },
         {
           moduleName: 'FLEET BY STATUS',
           moduleId: '2706526',
           child: null,
         },
         {
           moduleName: 'FLEET CURRENT LOCATION SUMMARY',
           moduleId: '2706546',
           child: null,
         },
         {
           moduleName: 'FLEET MANAGEMENT',
           moduleId: '2706566',
           child: null,
         },
       ],
     },
     // {
     //   parent: 'LEASE',
     //   menuResources: [
     //     {
     //       moduleName: 'LEASE CONTRACT RIDER MANAGEMENT',
     //       moduleId: '2706826',
     //       child: null,
     //     },
     //     {
     //       moduleName: 'LEASE EQUIPMENT MANAGEMENT',
     //       moduleId: '2706827',
     //       child: null,
     //     },
     //     {
     //       moduleName: 'LEASE EQUIPMENT REPORT',
     //       moduleId: '2706828',
     //       child: null,
     //     },
     //     {
     //       moduleName: 'RAILCAR ANALYSIS REPORT',
     //       moduleId: '2706846',
     //       child: null,
     //     },
     //   ],
     // },
     {
       parent: 'SEARCH',
       menuResources: [
         {
             parent: 'SHIPMENT SEARCH',
             menuResources: [
               {
                 moduleName: 'CURRENT SHIPMENTS',
                 moduleId: '2706866',
                 child: null,
               },
               {
                 moduleName: 'HISTORY SHIPMENTS',
                 moduleId: '2706886',
                 child: null,
               },
               {
                 moduleName: 'ALL SHIPMENTS',
                 moduleId: '2706906',
                 child: null,
               },
               {
                 moduleName: 'EXCEPTION SHIPMENTS',
                 moduleId: '2706926',
                 child: null,
               },
             ],
           },
         
       ],
     },
     {
       parent: 'REPORTS',
       menuResources: [
         {
           moduleName: 'BACKEND REPORT',
           moduleId: '2706807',
           child: null,
         },
         {
             parent: 'SUMMARY REPORTS',
             menuResources: [
               {
                 moduleName: 'SHIPMENT SUMMARY',
                 moduleId: '2706646',
                 child: null,
               },
               {
                 moduleName: 'INBOUND SUMMARY',
                 moduleId: '2706666',
                 child: null,
               },
               {
                 moduleName: 'GROUP BY SUMMARY',
                 moduleId: '2706686',
                 child: null,
               },
             ],
           
         },
         {
           
             parent: 'PERFORMANCE REPORTS',
             menuResources: [
               {
                 moduleName: 'CYCLE TIME REPORT',
                 moduleId: '2706706',
                 child: null,
               },
               {
                 moduleName: 'PERFORMANCE METRICS',
                 moduleId: '2706726',
                 child: null,
               },
               {
                 moduleName: 'DWELL TIME REPORT',
                 moduleId: '2706746',
                 child: null,
               },
               {
                 moduleName: 'SEGMENT BY LANE',
                 moduleId: '2706766',
                 child: null,
               },
               {
                 moduleName: 'PERCENT UNDER LOAD',
                 moduleId: '2706767',
                 child: null,
               },
             ],
          
         },
         {
           moduleName: 'REPORT MANAGEMENT',
           moduleId: '2706786',
           child: null,
         },
         {
           moduleName: 'COMMENTS REPORT',
           moduleId: '2706806',
           child: null,
         },
         {
           moduleName: 'DESTINATION CODE REPORT',
           moduleId: '2706946',
           child: null,
         },
         {
           moduleName: 'ORGANIZATION MAPPING REPORT',
           moduleId: '2706966',
           child: null,
         },
       ],
     },
     // {
     //   parent: 'Dashboard',
     //   menuResources: [
     //     {
     //       moduleName: 'DASHBOARD',
     //       moduleId: '2706606',
     //       child: null,
     //     },
     //   ],
     // },
   ];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'tree-nested-overview-example',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
})
export class TreeComponent {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.menuResources);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.menuResources && node.menuResources.length > 0 || node.child;
}
