import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface TreeNode {
  parent?: string;
  moduleName?: string;
  moduleId?: number;
  child?: any;
  menuResources?: TreeNode[];
}
interface ToDo {
  functionId?: number;
  functionName?: string;
  moduleId?: number;
}
const menu_data = {
  treeNodes: [
    {
      parent: 'FLEET',
      menuResources: [
        {
          moduleId: 2706586,
          moduleName: 'BAD ORDER CARS',
        },
        {
          moduleId: 2706526,
          moduleName: 'FLEET BY STATUS',
        },
        {
          moduleId: 2706546,
          moduleName: 'FLEET CURRENT LOCATION SUMMARY',
        },
        {
          moduleId: 2706566,
          moduleName: 'FLEET MANAGEMENT',
        },
      ],
    },
    {
      parent: 'LEASE',
      menuResources: [
        {
          moduleId: 2706826,
          moduleName: 'LEASE CONTRACT RIDER MANAGEMENT',
        },
        {
          moduleId: 2706827,
          moduleName: 'LEASE EQUIPMENT MANAGEMENT',
        },
        {
          moduleId: 2706828,
          moduleName: 'LEASE EQUIPMENT REPORT',
        },
        {
          moduleId: 2706846,
          moduleName: 'RAILCAR ANALYSIS REPORT',
        },
      ],
    },
    {
      parent: 'SEARCH',
      menuResources: [
        {
          parent: 'SHIPMENT SEARCH',
          menuResources: [
            {
              moduleId: 2706866,
              moduleName: 'CURRENT SHIPMENTS',
            },
            {
              moduleId: 2706886,
              moduleName: 'HISTORY SHIPMENTS',
            },
            {
              moduleId: 2706906,
              moduleName: 'ALL SHIPMENTS',
            },
            {
              moduleId: 2706926,
              moduleName: 'EXCEPTION SHIPMENTS',
            },
          ],
        },
      ],
    },
    {
      parent: 'REPORTS',
      menuResources: [
        {
          moduleId: 2706807,
          moduleName: 'BACKEND REPORT',
        },
        {
          parent: 'SUMMARY REPORTS',
          menuResources: [
            {
              moduleId: 2706646,
              moduleName: 'SHIPMENT SUMMARY',
            },
            {
              moduleId: 2706666,
              moduleName: 'INBOUND SUMMARY',
            },
            {
              moduleId: 2706686,
              moduleName: 'GROUP BY SUMMARY',
            },
          ],
        },
        {
          parent: 'PERFORMANCE REPORTS',
          menuResources: [
            {
              moduleId: 2706706,
              moduleName: 'CYCLE TIME REPORT',
            },
            {
              moduleId: 2706726,
              moduleName: 'PERFORMANCE METRICS',
            },
            {
              moduleId: 2706746,
              moduleName: 'DWELL TIME REPORT',
            },
            {
              moduleId: 2706766,
              moduleName: 'SEGMENT BY LANE',
            },
            {
              moduleId: 2706767,
              moduleName: 'PERCENT UNDER LOAD',
            },
          ],
        },
        {
          moduleId: 2706786,
          moduleName: 'REPORT MANAGEMENT',
        },
        {
          moduleId: 2706806,
          moduleName: 'COMMENTS REPORT',
        },
        {
          moduleId: 2706946,
          moduleName: 'DESTINATION CODE REPORT',
        },
        {
          moduleId: 2706966,
          moduleName: 'ORGANIZATION MAPPING REPORT',
        },
      ],
    },
    {
      parent: 'Dashboard',
      menuResources: [
        {
          moduleId: 2706606,
          moduleName: 'DASHBOARD',
        },
      ],
    },
  ],
  masterFunctions: [
    {
      functionId: 2710866,
      functionName: 'SEARCH',
      moduleId: 2706826,
    },
    {
      functionId: 2710886,
      functionName: 'SEARCH',
      moduleId: 2706807,
    },
    {
      functionId: 2710906,
      functionName: 'SEARCH',
      moduleId: 2706586,
    },
    {
      functionId: 2710907,
      functionName: 'SEARCH',
      moduleId: 2706606,
    },
    {
      functionId: 2710926,
      functionName: 'SEARCH',
      moduleId: 2707626,
    },
    {
      functionId: 2710946,
      functionName: 'SEARCH',
      moduleId: 2707646,
    },
    {
      functionId: 2710947,
      functionName: 'SEARCH',
      moduleId: 2706526,
    },
    {
      functionId: 2710948,
      functionName: 'SEARCH',
      moduleId: 2706546,
    },
    {
      functionId: 2710966,
      functionName: 'SEARCH',
      moduleId: 2706566,
    },
    {
      functionId: 2710967,
      functionName: 'SEARCH',
      moduleId: 2706646,
    },
    {
      functionId: 2710986,
      functionName: 'SEARCH',
      moduleId: 2706666,
    },
    {
      functionId: 2710987,
      functionName: 'SEARCH',
      moduleId: 2706686,
    },
    {
      functionId: 2711006,
      functionName: 'SEARCH',
      moduleId: 2706706,
    },
    {
      functionId: 2711026,
      functionName: 'SEARCH',
      moduleId: 2706726,
    },
    {
      functionId: 2711027,
      functionName: 'SEARCH',
      moduleId: 2706746,
    },
    {
      functionId: 2711028,
      functionName: 'SEARCH',
      moduleId: 2706766,
    },
    {
      functionId: 2711046,
      functionName: 'SEARCH',
      moduleId: 2706786,
    },
    {
      functionId: 2711066,
      functionName: 'SEARCH',
      moduleId: 2706806,
    },
    {
      functionId: 2711067,
      functionName: 'SEARCH',
      moduleId: 2706827,
    },
    {
      functionId: 2711067,
      functionName: 'ADD',
      moduleId: 2706827,
    },
    {
      functionId: 2711068,
      functionName: 'SEARCH',
      moduleId: 2706828,
    },
    {
      functionId: 2711086,
      functionName: 'SEARCH',
      moduleId: 2706846,
    },
    {
      functionId: 2711087,
      functionName: 'SEARCH',
      moduleId: 2706626,
    },
    {
      functionId: 2711088,
      functionName: 'SEARCH',
      moduleId: 2706866,
    },
    {
      functionId: 2711089,
      functionName: 'SEARCH',
      moduleId: 2706886,
    },
    {
      functionId: 2711090,
      functionName: 'SEARCH',
      moduleId: 2706906,
    },
    {
      functionId: 2711091,
      functionName: 'SEARCH',
      moduleId: 2706926,
    },
    {
      functionId: 2711092,
      functionName: 'SEARCH',
      moduleId: 2706767,
    },
    {
      functionId: 2711093,
      functionName: 'SEARCH',
      moduleId: 2706946,
    },
    {
      functionId: 2711094,
      functionName: 'SEARCH',
      moduleId: 2706966,
    },
  ],
};

const TREE_DATA: TreeNode[] = menu_data.treeNodes;

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css'],
})
export class ModalViewComponent implements OnInit {
  form: FormGroup;
  treeControl = new NestedTreeControl<TreeNode>((node) => node.menuResources);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  selectedMenu: number = 0;
  todo: ToDo[] = [];
  done: ToDo[] = [];
  donetemp: ToDo[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      roleName: [''],
    });
    this.dataSource.data = TREE_DATA;
  }

  onSelect(id: number) {
    this.donetemp = [...this.done];
    let todoTemp = menu_data.masterFunctions.filter((f) => f.moduleId === id);
    let doneTemp = this.done.filter((f) => f.moduleId === id);

    this.todo = todoTemp;
    this.done=doneTemp;
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(event.container.data);
      transferArrayItem(
        
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  hasChild = (_: number, node: TreeNode) =>
    (!!node.menuResources && node.menuResources.length > 0) || node.child;

  ngOnInit(): void {}
}
